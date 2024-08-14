// Define symbols for the slot machine
const symbols = ['🍒', '🍊', '🍋', '🍇', '🍉'];

// Function to generate a random symbol
function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Function to spin the slot machine
function spin() {
  const slot1 = document.getElementById('slot1');
  const slot2 = document.getElementById('slot2');
  const slot3 = document.getElementById('slot3');

  // Generate random symbols for each slot
  const symbol1 = getRandomSymbol();
  const symbol2 = getRandomSymbol();
  const symbol3 = getRandomSymbol();

  // Display the symbols
  
slot1.textContent = symbol1;
slot2.textContent = symbol2;
slot3.textContent = symbol3;
}
for(let i=0; i<5; i++){
     slot1
}