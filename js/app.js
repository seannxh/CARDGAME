// 1. Declare variables (arrays) for two decks of cards.
let deck1 = []
let deck2 = []
let cardToRemove

// 3. Create cached element references for each of the card decks.
let deck1El = document.querySelector('#deck-1')
let deck2El = document.querySelector('#deck-2')

// 5. Write an initialization function that assigns 52 cards" to deck 1, then invoke it.
// Functions
// Initialize deck 1 with array of 52 cards
const init = () => {
    deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
}
// invoke the function
init()
  
// 6. Declare a render() function to display a card after it is flipped.
const render = (cardPicked) => {
  // Removes outline class when first card is picked 
  if (deck2.length === 1) {
    deck2El.classList.remove("outline")
  }

  // Remove previous picked card from deck2's class list 
  if (deck2.length > 1) {
    deck2El.classList.remove(cardToRemove)
  }
  
  // Set card to be removed on next click 
  cardToRemove = cardPicked

  // Apply current picked card deck2's class list
  deck2El.classList.add(cardPicked)

  // Check which deck has the majority of cards. Once deck2 has more cards,
  // remove the shadow from deck1 and apply it to deck2 
  if (deck2.length === 26) {
    deck2El.classList.add("shadow")
    deck1El.classList.remove("shadow")
  }
  
  // If the deck is empty , add an outline and remove the card back color 
  if (deck1.length === 0) {
    deck1El.classList.add("outline")
    deck1El.classList.add("back-blue")
  }
}

// 7. Stub up a handleClick() function for the event listener to call.
const handleClick = () => {
    // Used to prevent error on click when no cards are left in deck 1
    if (deck1.length > 0){
        // Randomly select a number from total cards remaining
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        let randomIdx = Math.floor(Math.random() * deck1.length)

        // We use splice and the random index to remove a random card
        // from the deck. Then, we assign that card a variable.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
        let cardPicked = deck1.splice(randomIdx, 1)[0]

        // Add the picked to deck 2 
        deck2.push(cardPicked)

        // Pass the picked card to the render function to display
        render(cardPicked)
    }
}

document.querySelector('#btn').addEventListener('click', handleClick)


























