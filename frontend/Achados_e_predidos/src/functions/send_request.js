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
                Authorization: `${token}`,
            },
        });
        const content = await res.json();

        return content;
    } else if (body !== null) {
        if (bodyType === "json") {
            console.log(body);
            res = await fetch(url, {
                body: JSON.stringify(body),
                method: method,
                headers: {
                    Authorization: `${token}`,
                    "Content-Type": "application/json",
                },
            });
        } else {
            res = await fetch(url, {
                body: body,
                method: method,
                headers: {
                    Authorization: `${token}`,
                },
            });
        }

        const content = await res.json();

        return content;
    }
}
