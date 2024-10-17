// function ()

function aa() {
  console.log("first");
}
aa();
//setTimeout is a asynchronous fucntion which makes js asynchronous
setTimeout(aa,5000);

(function() {
  console.log("second");
})();   //immediately invoked fucntion expression (IIFE)

() => {   //arrow fucntion
  console.log("Third");
}

let a = new Function('console.log("Fourth")'); // Using Function constructor correctly
a(); // Invoking the function







