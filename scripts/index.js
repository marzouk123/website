const signInBtn = document.querySelector("#goTo")



signInBtn.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("ae")
  window.location.href = "./user.html"
})
