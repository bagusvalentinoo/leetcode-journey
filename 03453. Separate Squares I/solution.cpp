/**
 * Problem: 3453. Separate Squares I
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 8 ms (Beats 100%)
 */

#define INL __attribute__((always_inline))
#define HOT __attribute__((hot))
#define AVX2 __attribute__((target("avx2")))
#define INL_ATTR noexcept INL HOT
#define OUTL_ATTR noexcept HOT
#define LAM_ATTR INL HOT noexcept

#pragma GCC optimize("fast-math","no-stack-protector")

#pragma GCC diagnostic ignored "-Wshift-op-parentheses"
#pragma GCC diagnostic ignored "-Wvla-cxx-extension"
#pragma GCC diagnostic ignored "-Wunqualified-std-cast-call"

#include <immintrin.h>

template <uint8_t RBITS>
HOT AVX2 void partial_sum_v256(uint32_t *const data) noexcept {
    constexpr uint8_t V = 256 / (sizeof(uint32_t) * 8);
    constexpr uint n = 1u << RBITS;
    auto current = _mm256_set1_epi32(0);
    #pragma unroll 32
    for (uint i = 0; i < n; i += V) {
        auto d = _mm256_load_si256((const __m256i*) &data[i]);
        d = _mm256_add_epi32(d, _mm256_slli_si256(d, 1 * sizeof(uint32_t)));
        d = _mm256_add_epi32(d, _mm256_slli_si256(d, 2 * sizeof(uint32_t)));
        const auto c = _mm256_set_m128i(
            _mm_set1_epi32(_mm256_extract_epi32(d, V / 2 - 1)),
            _mm_setzero_si128()
        );
        d = _mm256_add_epi32(d, c);
        d = _mm256_add_epi32(d, current);
        _mm256_store_si256((__m256i*)&data[i], d);
        current = _mm256_set1_epi32(_mm256_extract_epi32(d, V - 1));
    }
}

template <class It, class Fun, uint8_t RBITS>
HOT remove_reference<decltype(*declval<It>())>::type radix_stable_sort(const It beg, const It end, const uint8_t pos, const It out, const Fun getval) noexcept {
    constexpr uint RADIX = 1u << RBITS, RMASK = RADIX - 1u;
    alignas(__m256i) uint freqs[RADIX+sizeof(__m256i)] = {};
    for (auto curr = beg; curr < end; curr++)
        freqs[((getval(*curr) >> pos) & RMASK) + 1u]++;
    partial_sum_v256<RBITS>(freqs);
    auto maxv = getval(*beg);
    for (auto curr = beg; curr < end; curr++) {
        const auto i = *curr;
        const auto v = getval(i);
        out[freqs[((v >> pos) & RMASK)]++] = i;
        maxv |= v;
    }
    return maxv;
}

template <class It, class Fun, uint8_t SBITS, uint8_t RBITS = SBITS>
HOT void adaptive_sort(const It beg, const It end, const Fun getval, const It temp) noexcept {
    using T = remove_reference<decltype(*declval<It>())>::type;
    using V = result_of<decltype(getval)(const T)>::type;
    constexpr uint8_t BITSIZE = sizeof(V) * 8u;
    const uint n = end - beg;
    if (n > 1u << (SBITS - 2u)) {
        const bool large = n > 1u << (RBITS - 2u);
        It bin = beg, ein = end, bout = temp, eout = temp + n;
        T maxi = *beg;
        V maxv = V(-1);
        const auto sortfn = large ? radix_stable_sort<It,Fun,RBITS> : radix_stable_sort<It,Fun,SBITS>;
        const uint8_t bits = large ? RBITS : SBITS;
        for (uint8_t pos = 0; pos < BITSIZE && maxv >> pos; pos += bits) {
            maxv = sortfn(bin, ein, pos, bout, getval);
            swap(bin, bout);
            swap(ein, eout);
        }
        if (bout == beg)
            copy(bin, ein, beg);
    } else if (n > 2) {
        sort(beg, end, [getval](const T i, const T j) LAM_ATTR { return getval(i) < getval(j); });
    } else if (n == 2 && getval(beg[0]) > getval(beg[1])) {
        swap(beg[0], beg[1]);
    }
}

template <class It, class Fun, uint8_t SBITS, uint8_t RBITS = SBITS>
HOT INL void adaptive_sort(const It beg, const It end, const Fun getval) noexcept {
    using T = remove_reference<decltype(*declval<It>())>::type;
    const uint n = end - beg;
    T temp[n];
    adaptive_sort<It,Fun,SBITS,RBITS>(beg, end, getval, temp);
}

template <class It, class T>
static It adaptive_search(It beg, const It end, const T v) noexcept {
    const uint n = end - beg;
    if (n >= 128)
        return lower_bound(beg, end, v);
    while (beg < end && *beg < v)
        beg++;
    return beg;
}

class Solution {
public:
    static double separateSquares(vector<vector<int>> &squares) noexcept __attribute__((hot)) {
        const uint n = squares.size();
        auto &events = (vector<uint64_t>&)squares;
        const auto edata = events.data();
        uint64_t ta = 0; // total area of all squares
        for (uint i = 0; i < n; i++) {
            const auto &s = squares[i];
            const uint64_t y = s[1], w = s[2], p = (y << 31) + w;
            edata[2*i] = p + (w << 31);
            edata[2*i+1] = p + (1u << 30);
            ta += w * w;
        }
        // low-to-high bits: 30 bit for side, 1 bit for start/end tag, 31 bit for side+len, total 62
        // 16-bit sort does 4 passes with a 65536-element temporary (sligtly exceeding max size of 50k)
        // 11-bit sort does 6 passes with a 2048-element temporary
        // STL sort would do >=16 passes for max size
        constexpr uint16_t MAXN = 50'000;
        static uint64_t temp[MAXN*2];
        adaptive_sort<uint64_t*,identity,11,16>(edata, edata + 2 * n, identity(), temp);
        uint64_t c = 0, // cumulative width at the moment
                 a = 0; // current area
        uint ph = 0; // former height
        for (uint i = 0; i < 2 * n; i++) {
            const uint64_t e = edata[i];
            const uint y = e >> 31,
                       w = e & (-1u >> 2),
                       dh = y - ph;
            const uint64_t da = c * dh;
            if ((a + da) * 2 >= ta) {
                events.clear();
                return ph + (ta - a * 2) / (c * 2.);
            }
            const uint64_t b = (e >> 30 & 1) - 1;
            c += (w ^ b) - b; // b ? -w : w  <=>  start ? w : -w
            a += da;
            ph = y;
        }
        events.clear();
        return 0; // unreachable
    }
};

static const auto init = []() noexcept {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    return 'c';
}();
