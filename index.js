// Code your solutions in this file
// names = ['Lisa', 'Kaitlin', 'Jan']
// function writeCards(names, event = 'surprise'){
//     for(let i = 0; i<names.length; i++){
//         console.log("Thank you, ${names}[i], for the wonderful ${event} gift!")
//     }

// }
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