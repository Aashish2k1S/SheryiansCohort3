let http = require("http");
// console.log(http);

let server = http.createServer((req, res) => {
    console.log(req);    
    console.log("hello from server");    
    res.end("sun liya bhai"); 
});

server.listen(3000, () => {
    console.log("server is listening at port 3000");    
});
 