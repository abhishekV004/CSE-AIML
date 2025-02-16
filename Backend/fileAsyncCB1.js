const fs=require("fs");
function myReadFile(){
    try{
        fs.readFile("dummy.txt","utf-8",(err,data)=>{
            if(err) 
                {
                    throw err;}
            else{

                console.log("file data:",data);
            }
        });
    }catch(err){
        console.log("File Reading error ",err.message);
    }
}

function myWriteFile(data){
    try{
        fs.writeFile("dummy.txt",data,(err)=>{
            if(err) throw err;
            console.log("SuccessFully write file");
        })
    }catch(err){
        console.log("File Writing error ",err.message);
    }
}

myReadFile();
const data="my new data"
myWriteFile(data);
myReadFile();