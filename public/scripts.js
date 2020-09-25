// Vars
const modalOverlay = document.querySelector('.modal-overlay')
const cardsAula = document.querySelectorAll('.card-aula')


// Cards Aula
for (let card of cardsAula) {
  card.addEventListener("click", function () {
    const videoId = card.getAttribute("id")
    window.location.href = `/video?id=${videoId}`
  })
}
