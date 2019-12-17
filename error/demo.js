function thr() {
  try {
    // connnnsole.log("this is a error");
    throw "first error"; 
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