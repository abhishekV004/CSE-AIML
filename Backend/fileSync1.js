const fs=require("node:fs");
function myReadFile(){

}
try{

    const data=fs.readFileSync("dummy.txt","utf-8");
    if(data){
        console.log("file data ",data.toString());
    }
    else
     throw err;
}
catch(err){
    console.log("File Error ",err.message);
}
function myWriteFile(data){
    try{
        // const data="Hello How are you?"
        fs.writeFileSync("dummy.txt",data);

    }
    catch(err){
        console.log("first Writing Error ",err.message);
    }
}
module.exports={
    myReadFile:myReadFile,
    myWriteFile:myWriteFile,
    username:"ashish1"
}
// myReadFile();
myWriteFile();
// myReadFile();