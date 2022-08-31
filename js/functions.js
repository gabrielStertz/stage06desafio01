const body = document.querySelector('body')
const homeLink = document.querySelector('#home')
const universoLink = document.querySelector('#universo')
const exploracaoLink = document.querySelector('#exploracao')

export function handleChange(id){
  if(id == "/"){
    body.classList.add('background1')
    body.classList.remove('background2')
    body.classList.remove('background3')
    homeLink.classList.add('selected')
    universoLink.classList.remove('selected')
    exploracaoLink.classList.remove('selected')
  } else if(id == "/universo"){
    body.classList.remove('background1')
    body.classList.add('background2')
    body.classList.remove('background3')
    homeLink.classList.remove('selected')
    universoLink.classList.add('selected')
    exploracaoLink.classList.remove('selected')
  } else if(id == "/exploracao"){
    body.classList.remove('background1')
    body.classList.remove('background2')
    body.classList.add('background3')
    homeLink.classList.remove('selected')
    universoLink.classList.remove('selected')
    exploracaoLink.classList.add('selected')
  } 
}