function thr() {
  try {
    // connnnsole.log("this is a error");
    throw "first error"; 
    console.log("not going to execute...")
  } catch(err) {
    console.log("catched...", err)
    throw "second error"; 
  }
}

try {
  thr()
} catch(err) {
  console.log("catched...", err)
}


console.log("finished")