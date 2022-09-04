const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Helloooo userrr');
    }
    if(req.url ==="/about"){
        res.end("This is about page.");
    }
    res.end(`
    <h1>OOPS!!!!!</h1>
    <p>We cannot seemt to find the page you are looking for</p>
    <a href="/">HOME</a>
    `);
});

server.listen(5000);

