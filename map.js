const fs = require("fs");

const path = "./coconut.jpg";

fs.exists(path, function (isExist) {
  if (isExist) {
    console.log("Starting");
    / Place all code for map in this if function otherwise it no work
    
  } else {
    window.stop()
  }
});