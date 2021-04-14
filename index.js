// Code your solutions in this file

const cards = []
arr = ["Lisa", "Kaitlin", "Jan"]
function writeCards(arr, event = surprise){
    for(let i = 0; i < arr.length; i++) {
        let sentence = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`; 
        cards.push(sentence); 
    }
    return cards
};
function countDown(num){
    let count = num + 1; 
    while(num >= 0){
        console.log(num--);
    }
}