const http=require("http");
const server=http.createServer((req,res)=>{
    res.write("hello world")
    res.end("response provide")
});
server.listen("3201","192.168.1.52",()=>{console.log("server running")})