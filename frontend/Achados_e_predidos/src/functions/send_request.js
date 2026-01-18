export async function send_request(
    url,
    method = "GET",
    body = null,
    bodyType = "json",
    token = "",
) {
    let res;

    if (body === null) {
        res = await fetch(url, {
            method: method,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const content = await res.json();

        return content;
    } else {
        if (bodyType == "json") {
            res = await fetch(url, {
                body: JSON.stringify(body),
                method: method,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } else {
            res = await fetch(url, {
                body: body,
                method: method,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        }

        const content = await res.json();

        return content;
    }
}
