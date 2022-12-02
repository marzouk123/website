const quizbtn = document.getElementById("quiz")
const infobtn = document.getElementById("info")

quizbtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("ae")
    window.location.href = "./quizz.html"
  })
  infobtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("ae")
    window.location.href = "./info.html"
  })