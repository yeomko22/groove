package Models

type PageInfo struct {
	Option int
	Page   int
}

func NewPageInfo() PageInfo {
	var pageInfo PageInfo
	pageInfo.Option = 0
	pageInfo.Option = 1
	return pageInfo
}
