// function rollno(num){
//   console.log("Roll number is ",num)
// }

// setTimeout(rollno , 3000 , 2200321530011);  //3 sec baad print karega
// setTimeout(rollno , 4000 , 2200321530009);  //4 sec baad print karega

//this is called as callback hell very famous asked in interviews
function rollno(num, delay, nextroll) {
  setTimeout(() => {
    console.log("Roll Number is ", num);
    if (nextroll) nextroll();
  }, delay);
}

rollno(2200321530002, 1000, () => {
  rollno(2200321530003, 3000, () => {
    rollno(2200321530009, 3000, () => {
      rollno(2200321530011, 4000);
    });
  });
});
