const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
        if(req.url == '/'){
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write("This is Home Page")
            res.end()
        }else if(req.url == '/about'){
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write("This is About Page")
            res.end()
        }else if(req.url == '/contact'){
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write("This is Contact Page")
            res.end()
        }else if(req.url == '/file-write'){
            fs.writeFile('demo.txt','hello world','utf-8',(err,data)=>{
                if(err){
                    res.writeHead(200,{"Content-Type":"text/html"})
                    res.write("File Create Fail")
                    res.end()
                }else{
                    res.writeHead(200,{"Content-Type":"text/html"})
                    res.write("File Create successful")
                    res.end()
                }
            })
        }
})


server.listen(3000,()=>{
    console.log('server running')
})