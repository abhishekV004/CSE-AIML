// function rollno(num, dealy, nextroll)

//========promise=========

const promise = new Promise((resolve, reject) => {
  console.log("first");
  resolve("Promise Resolved");
   reject("Promise Rejected"); // This won't be executed after resolve
});

promise.then(() => {
  console.log("This is my Promise");
}).catch(() => {
  console.log("This is my Error page");
});
