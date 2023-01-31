const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

function reveal() {
  var reveals = document.querySelectorAll(".reveal")

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight
    var elementTop = reveals[i].getBoundingClientRect().top
    var elementVisible = 150

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active")
    }
  }
}

window.onscroll = function() {
  const header = document.querySelector('header')
  const fixedNav = header.offsetTop
  const toTop = document.querySelector('#back-top')

  if (window.pageYOffset > fixedNav) {
    toTop.classList.remove('hidden')
    toTop.classList.add('flex')
  } else {
    toTop.classList.remove('flex')
    toTop.classList.add('hidden')
  }
}

window.addEventListener("scroll", reveal);


hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

window.addEventListener('click', function (e) {
  if (e.target != navMenu && e.target != hamburger) {
    hamburger.classList.remove('hamburger-active')
    navMenu.classList.add('hidden')
  }
})

const toggle = document.querySelector('#toggle-mode')
const html = document.querySelector('html')

toggle.addEventListener('click', function() {
  toggle.checked ? html.classList.add('dark') : html.classList.remove('dark')
})