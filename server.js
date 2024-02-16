const http = require("http");

const port = 8081;

http.createServer((req, res)=>{
    res.writeHead(200, {"content-Type": "text/html"});
    res.write("<h5>hey we got our server here..add on data testing nodemon</h5>");
    res.end();
})
.listen(port,()=>{
    console.log(`Nodejs Server Started Running On Port ${port}`);
})