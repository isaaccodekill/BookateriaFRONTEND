const Token = localStorage.getItem("Token")
const baseUrl = "api.bookateria.net"


export default function fetchHelper(route, method, authRequired, body){
    if (method === "GET"){
        return fetch(`${baseUrl}${route}`)
    }else{

        const headers = {
            "Content-type": "application/json",
            "Authorization": `Bearer ${Token}`
        }

        if (!authRequired){
            delete headers["Authorization"]
        }

        if (method === "DELETE"){
            return fetch(`${baseUrl}${route}`, {
                headers: headers
            })
        }else{
            return fetch(`${baseUrl}${route}`, {
                headers: headers,
                body: body
            })
        }
    }
}