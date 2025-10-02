import {Server} from "./server/server.js"

Server.listen(8081,()=>{
    console.log("Servidor lançado com sucesso: http://localhost:8081/")
})