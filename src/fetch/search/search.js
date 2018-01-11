import { get } from "../get";

export function getSearchData(cityName, page, category, keyword) {
    const keywordStr = keyword ? "/" + keyword : "",
        result = get("/api/search/" + page + "/" + cityName + "/" + category + keywordStr);

    return result;
}