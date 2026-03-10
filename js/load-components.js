function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data
    })
}

loadComponent("footer", "/components/footer.html")
loadComponent("header", "/components/header.html")