const express = require("express")
const server = express()

// para o public nao ser uma 'pasta'

server.use(express.static("public"))

//utilizando template engine (nunjucks)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true
})

server.get("/", (req, res)=>{
    return res.render("index.html")
})

server.get("/create-point", (req, res)=>{
    return res.render("create-point.html")
})

server.get("/search-results", (req, res)=>{
    return res.render("search-results.html")
})

server.listen(3000)