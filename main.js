const TypeWriter = function(txtElement, words, wait) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = ''; // represents what is in the text area
    this.wordIndex = 0; // which word  we are on. formatted as an array
    this.wait = parseInt(wait, 10); // needs to be an integer. base 10 number
    this.type();
    this.isDeleting = false; // represents the state whether it's deleting or not
}

// Type Method

// Init On Dom Load
document.addEventListener('DOMContentLoaded', init);

// Init App

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = txtElement.getAttribute('data-words');
}