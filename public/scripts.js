// Vars
const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cardsAula = document.querySelectorAll('.card-aula')
const cardsConteudo = document.querySelectorAll('.card-conteudo')

// Cards Aula
for (let card of cardsAula) {
  card.addEventListener("click", function () {
    const videoId = card.getAttribute("id");
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`
  })
}

// Cards Conteúdo
for (let card of cardsConteudo) {
  card.addEventListener("click", function () {
    const linkId = card.getAttribute("id");
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("iframe").src = `https://app.rocketseat.com.br/${linkId}`
  })
}

// Close Modal
document.querySelector(".close-modal").addEventListener("click", function () {
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector("iframe").src = ""
  modal.classList.remove("active")
})

// Maximize Modal
document.querySelector(".maximize-modal").addEventListener("click", function () {
  if (modal.classList.contains("active")) {
    modal.classList.remove("active")
  } else {
    modal.classList.add("active")
  }
})

