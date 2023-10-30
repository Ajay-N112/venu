//import json server
const jsonsever=require('json-server')

//import cors
const cors=require('cors')

//create json server
const server=jsonsever.create()

//convert json type to js
const middleware=jsonsever.defaults()

//create a router
const router=jsonsever.router('db.json')

//apply to server
server.use(middleware)
server.use(cors())
server.use(router)

const PORT=5000
server.listen(PORT,() => {
    console.log(`__json Server Started At Port : ${PORT}__`);
})