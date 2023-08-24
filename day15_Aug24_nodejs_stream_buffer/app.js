const fs = require("fs")
const http = require("http")
//createa  readable stream to read file read.txt. fill up the buffer
// const readStream = fs.createReadStream("index.html")
const writeStream = fs.createWriteStream("write.txt")

// creating server
const server = http.createServer((request,response) =>{
    response.writeHead(200, {"Content-type":"text/html"});
    const url = request.url
    //piping
    if(url ==="/home" || url === "/"){
        fs.createReadStream("index.html").pipe(response)
    }
    else if(url === '/about'){
        fs.createReadStream("about.html").pipe(response)
    }
    else{
        fs.createReadStream("404.html").pipe(response)
    }
})

//  serve listening to port 3000
server.listen((3000),()=>{
    console.log("Serve is running at localhost:3000")
})

//listen to stream to read file readme.txt

// readStream.on("data",(d) =>{
//     console.log("\n read data received \n")
//     console.log(d)
//     console.log("\n ------- \n")
// })

// readStream.on("open",() =>{
//     console.log("stream opened")
// })

// readStream.on("end",() =>{
//     console.log("\n Stream closed")
// })


// writeStream.write("Streaming text content", 'utf-8')
//Creating a server in nodejs
//importing the http module
// const http = require("http")

//  creating server
// const server = http.createServer((request,response) =>{
//      sending the response
//     response.write("This is the response from the server")
//     response.end("\n------ end ------")
//     console.log(request.url)
// })

//  serve listening to port 3000
// server.listen((3000),()=>{
//     console.log("Serve is running at localhost:3000")
// })