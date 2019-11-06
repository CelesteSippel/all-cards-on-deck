const suits = ['hearts', 'diamonds', 'spades', 'clubs']
const ranks = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King'
]
const deck = []

const makeDeck = () => {
  for (let suitsIndex = 0; suitsIndex < suits.length; suitsIndex++) {
    for (let ranksIndex = 0; ranksIndex < ranks.length; ranksIndex++) {
      deck.push(ranks[ranksIndex] + ' of ' + suits[suitsIndex])
    }
  }
}
const shuffleDeck = () => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const dog = deck[i]
    deck[i] = deck[j]
    deck[j] = dog
  }
  console.log(shuffleDeck)
}

const dealCard = () => {
  document.querySelector('p').textContent = deck[0]
}
const makeAndShuffleDeck = () => {
  makeDeck()
  shuffleDeck()
}
document.addEventListener('click', dealCard)
document.addEventListener('DOMContentLoaded', makeAndShuffleDeck)
