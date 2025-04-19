
function checkRandomOddEven() {
  // Generate a random number between 1 and 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  // Check if the number is odd or even
  if (randomNumber % 2 === 0) {
    console.log(`It is an Even number: ${randomNumber}`);
  } else {
    console.log(`It is an Odd number: ${randomNumber}`);
  }
}


checkRandomOddEven();