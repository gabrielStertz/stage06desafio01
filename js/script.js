const body = document.querySelector('body')

const routes = {
  "/": "/stage_06/desafio_01/pages/home.html",
  "/universo": "/stage_06/desafio_01/pages/oUniverso.html",
  "/exploracao": "/stage_06/desafio_01/pages/exploracao.html"
}
function route(event){
  event = event || window.event
  event.preventDefault()
  window.history.pushState({}, "", event.target.href)
  handle()
}
function handle(){
  const {pathname} = window.location
  const route = routes[pathname] || routes["/"]
  fetch(route)
  .then(data => data.text())
  .then(html => {
    document.querySelector('#app').innerHTML = html
  })
}