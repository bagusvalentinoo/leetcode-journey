/**
 * Problem: 1096. Brace Expansion II
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func braceExpansionII(expression string) []string {
	// If the expression is empty, return an empty slice.
	if expression == "" {
		return []string{}
	}

	// Find the first occurrence of '{' to identify the start of a brace group.
	openBraceIdx := strings.Index(expression, "{")

	// If there is no '{', split the expression by ',' and prepare the answer.
	if openBraceIdx == -1 {
		return prepareAns(strings.Split(expression, ","))
	}

	// Extract the prefix before the first '{'.
	prefix := expression[:openBraceIdx]
	// Update expression to start from the first '{'.
	expression = expression[openBraceIdx:]
	// Extract the string inside the braces and the remaining expression.
	braceContent, remainingExpr := getBraceString(expression)
	// Recursively expand the brace content.
	expandedBrace := braceExpansionII(braceContent)
	result := []string{}

	// If there is a prefix before the brace group, process it.
	if prefix != "" {
		// Find the last comma in the prefix to split it.
		lastCommaIdx := strings.LastIndex(prefix, ",")

		if lastCommaIdx != -1 {
			// Add all elements before the last comma to the result.
			result = strings.Split(prefix[:lastCommaIdx], ",")
			// Update prefix to the substring after the last comma.
			prefix = prefix[lastCommaIdx+1:]
		}
		// If prefix is not empty, prepend it to each expanded brace string.
		if prefix != "" {
			for i := range expandedBrace {
				expandedBrace[i] = prefix + expandedBrace[i]
			}
		}
	}
	// If there is no remaining expression, append expanded brace and return.
	if remainingExpr == "" {
		result = append(result, expandedBrace...)

		return prepareAns(result)
	}

	// Connect expanded brace with the remaining expression.
	expandedBrace, remainingExpr = connect(expandedBrace, remainingExpr)
	result = append(result, expandedBrace...)

	// If there is still remaining expression, recursively expand it and append.
	if remainingExpr != "" {
		suffixArr := braceExpansionII(remainingExpr)
		result = append(result, suffixArr...)
	}

	// Prepare the final answer by sorting and removing duplicates.
	return prepareAns(result)
}

func getBraceString(expression string) (string, string) {
	braceContent := ""
	openCount := 1

	// Iterate through the expression to find the matching closing brace.
	for i := 1; i < len(expression); i++ {
		if expression[i] == '{' {
			openCount++
		}
		if expression[i] == '}' {
			openCount--
		}
		// When all opened braces are closed, extract the content.
		if openCount == 0 {
			braceContent = expression[1:i]
			expression = expression[i+1:]

			break
		}
	}

	return braceContent, expression
}

func prepareAns(result []string) []string {
	// Sort the result slice lexicographically.
	sort.Slice(result, func(i, j int) bool {
		return result[i] < result[j]
	})

	// Remove duplicates from the sorted slice.
	finalResult := []string{result[0]}

	for i := 1; i < len(result); i++ {
		if result[i] != result[i-1] {
			finalResult = append(finalResult, result[i])
		}
	}

	return finalResult
}

func connect(expanded []string, expression string) ([]string, string) {
	// If the expression is empty, return the current expanded slice.
	if len(expression) == 0 {
		return expanded, ""
	}
	// If the next character is ',', skip it and continue.
	if expression[0] == ',' {
		return expanded, expression[1:]
	}
	// If the next character is '{', expand the brace content and concatenate.
	if expression[0] == '{' {
		braceContent, remainingExpr := getBraceString(expression)
		expandedBrace := braceExpansionII(braceContent)
		combined := []string{}

		// Concatenate each expanded string with each expanded brace string.
		for _, prefix := range expanded {
			for _, suffix := range expandedBrace {
				combined = append(combined, prefix+suffix)
			}
		}

		// Continue connecting with the remaining expression.
		return connect(combined, remainingExpr)
	}

	// Find the next comma or brace to determine the next substring to concatenate.
	commaIdx := strings.Index(expression, ",")
	braceIdx := strings.Index(expression, "{")

	// If there are no commas or braces, concatenate the rest of the expression.
	if commaIdx == -1 && braceIdx == -1 {
		for i := range expanded {
			expanded[i] += expression
		}

		return expanded, ""
	}

	// Determine the next substring to concatenate.
	nextSubstring := ""

	if commaIdx == -1 {
		nextSubstring = expression[:braceIdx]
		expression = expression[braceIdx:]
	} else if braceIdx == -1 {
		nextSubstring = expression[:commaIdx]
		expression = expression[commaIdx:]
	} else {
		// Use the minimum index to find the next split point.
		nextSplitIdx := min(commaIdx, braceIdx)
		nextSubstring = expression[:nextSplitIdx]
		expression = expression[nextSplitIdx:]
	}

	// Concatenate the next substring to each expanded string.
	for i := range expanded {
		expanded[i] += nextSubstring
	}

	// Continue connecting if there is more expression left.
	if expression != "" {
		return connect(expanded, expression)
	}

	return expanded, ""
}
