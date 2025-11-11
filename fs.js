let fs = require('fs')

// fs.writeFile('mycode.txt',"this is my code",(err)=>{
//     if(err) throw err;
//     console.log("File created successfully")
// })       
//!  we created a file named mycode.txt and wrote "this is my code" in it.



// fs.writeFile('mycode.txt',"this code is Edited ",(err)=>{
//     if(err) throw err;
//     console.log("Editing successfully")
// })   
//!  we edited the content of mycode.txt file to "this code is Edited ".



// fs.appendFile('mycode.txt',"\n this line is appended ",(err)=>{
//     if(err) throw err;
//     console.log("Appending successfully")
// })
//!  we appended a new line " this line is appended " to the existing content of mycode.txt file.


// fs.readFile('mycode.txt',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })
// ! we read the content of mycode.txt file but it is in buffer format.


// fs.readFile('city.json', 'utf-8',(err, data)=>{
//     if(err) throw err;
//     console.log(data)
// })
// ! we read the content of city.json file in utf-8 format.



// fs.readFile('mytext.txt', 'utf-8',(err, data)=>{
//     if(err) throw err;
//     console.log(data)
// })
//! we read the content of mytext.txt file in utf-8 format.


let data = fs.readFileSync('mytext.txt', 'utf-8')
console.log(data)
//! we read the content of mytext.txt file in utf-8 format using synchronous method. 


let data2 = fs.readFileSync('city.json', 'utf-8')
console.log(data2)
// ! we read the content of city.json file in utf-8 format using synchronous method.


