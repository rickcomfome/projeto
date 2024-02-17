function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector(".eu-e-mo")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/eu-e-mo-escuro.jpg")
  } else {
    img.setAttribute("src", "./assets/eu e mo.jpg")
  }
}
