export function query_six(uri){
    return fetch (uri, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "api-version": "2023-01-01",
            "Accept-Encoding": "gzip",
            "Accept": "application/json"
        }
    }).then((response) => response.json())
}