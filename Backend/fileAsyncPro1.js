const fs=require("fs/promises");
async function myReadFile(){
    try{
 const res=await fs.readFile("dummy.txt","utf-8");
       
            console.log("file data :",res);
        }
      
    
    catch (err){
        console.log("File Reading Error:",err.message);
    }
}
const myWriteFile=async(data)=>{
    try{
        await fs.writeFile("dummy.txt",data);
        console.log("success");
    }
             
    catch (err){
        console.log("File Writing Error:",err.message);
    }
}
myReadFile();
const data="Full Stack Development Class";
myWriteFile(data);
myReadFile();