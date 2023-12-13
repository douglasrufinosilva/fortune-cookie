let phrases = [
  'Siga os bons e aprenda com eles.',
  'Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.',
  'O conhecimento é a única virtude e a ignorância é o único vício.',
  'A vida trará coisas boas se tiver paciência.',
  'Não compense na ira o que lhe falta na razão.',
  'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
  'Deixe de lado as preocupações e seja feliz.',
  'A maior barreira para o sucesso é o medo do fracasso.',
  'Realize o óbvio, pense no improvável e conquiste o impossível.',
  'Nada é por acaso… Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera..',
  'Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas normais.',
  'A inspiração vem dos outros. A motivação vem de dentro de nós.',
  'Motivação não é sinónimo de transformação, mas um passo em sua direção.',
  'Espere pelo mais sábio dos conselhos: o tempo.',
  'Pare de procurar eternamente; a felicidade está mesmo aqui ao seu lado.'
]

const cookie = document.querySelector('.cookie')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const message = document.querySelector('.message')
const openBtn = document.querySelector('.open-btn')

cookie.addEventListener('click', handleCookie)
openBtn.addEventListener('click', handleAnotherCookie)

function handleCookie() {

screenToggle()
message.innerText = phrases[Math.round(Math.random() * 14)]
}

function handleAnotherCookie() {
  screenToggle()
}

function screenToggle() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}