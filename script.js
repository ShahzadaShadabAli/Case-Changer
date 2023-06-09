//Second Method
// const uppercaseBtn = document.querySelector('.uppercase').onclick = function(){
//     const text = textArea.value;
//     const newText = text.toUpperCase();
//     textArea.value = newText;
//     } 

// const lowercaseBtn = document.querySelector('.lowercase').onclick = function(){
//   const text = textArea.value;
//   const newText = text.toLowerCase();
//   textArea.value = newText;

// }
// const reset = document.querySelector('.reset').onclick = function(){
//     textArea.value = ''
// }
const textArea = document.querySelector('textarea')

function uppercaseText(){

    const text = textArea.value;
    const newText = text.toUpperCase();
    textArea.value = newText;
}

function lowercaseText(){

    const text = textArea.value;
    const newText = text.toLowerCase();
    textArea.value = newText;

}

function resetAll(){
    textArea.value = ''
}

//First Method
// uppercaseBtn.addEventListener('click', uppercaseText)
// lowercaseBtn.addEventListener('click', lowercaseText)
// reset.addEventListener('click', resetAll)