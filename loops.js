function forLoop(array) {
  for (var i = 0; i < 25; i++) {
<<<<<<< HEAD
    var s = String
    if (i < 1) {
      s = ""
    } else {
      s = "s"
    }
    array.push(`"I am ${i} strange loop${s}."`)
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
 do {
   array.pop()
 } while (array.length > 0 && maybeTrue())
 return array
}
=======
    if (i < 1) {
      console.log("I am a strange loop.")
    } else if (i === 1) {
      console.log("I am 1 strange loop.")
    } else {
      console.log(`I am ${i} strange loops.`)
    }
  }
}

>>>>>>> 2fde0953aca9a3d53ef9db84d21de3d1be402895
