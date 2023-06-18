let names = ["Guadalupe", "Ollie", "Aki"];
const event = 'surprise'
let birthdayCard = [];

function writeCards(names, event) {

  for (let i = 0; i < names.length; i++) {

    let note = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    birthdayCard.push(note);
  }
  console.log(birthdayCard);
  return birthdayCard;
}

console.log(writeCards(names, events));

function countDown(number){
    let countDown = 10;
    while(countDown >= -0){
        console.log(countDown --);
    }
}
console.log(countDown(10));
