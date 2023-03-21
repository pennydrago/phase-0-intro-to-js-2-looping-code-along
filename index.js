// Code your solutions in this file

// Function to write cards

function writeCards(name, event) {
  const message = [];
  for (let i = 0; i < name.length; i++) {
    message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }
  return message;
}

// Function to count down to zero

function countDown(number) {
  while (number >= 0) {
    console.log(number--);
  }
}
