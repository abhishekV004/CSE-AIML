function rollno(num, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Roll Number is ", num);
      resolve(); // Resolve the promise after the roll number is logged
    }, delay);
  });
}

rollno(1, 1000)
  .then(() => rollno(2, 2000)) 
  .then(() => rollno(3, 3000)) 
  .catch((error) => {
    console.log("An error occurred:", error); 
  });



