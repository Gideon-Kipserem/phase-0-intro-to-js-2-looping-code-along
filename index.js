function writeCards(names, eventName) {
  const messages = [];

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    messages.push(message);

}

  return messages;
}
const names = ["Charlie", "Samip", "Ali"];

const thankYouMessages = writeCards(names, "birthday");

console.log(thankYouMessages);

function countDown() {
    let countup = 10;
while (countup >= 0) {
  console.log(countup--);
}
}
