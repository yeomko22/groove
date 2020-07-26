package Utils

import "fmt"

func GenNextUrl(url string, count, limit, offset int) string {
	limitOffset := genLimitOffset(count, limit, offset)
	if limitOffset=="" {
		return ""
	}
	return url + limitOffset
}

func genLimitOffset(count, limit, offset int) string {
	limitOffset := ""
	var newOffset int
	var newLimit int
	if offset + limit < count {
		newOffset = offset + limit
		newLimit = limit
		if count - newOffset < limit {
			newLimit = count - newOffset
		}
		limitOffset = fmt.Sprintf("limit=%d&offset=%d", newLimit, newOffset)
	}
	return limitOffset
}
