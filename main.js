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

TypeWriter.prototype.type = function() {

    // console.log('test Type Method');

    // get current word index
    const currentWordIndex = this.wordIndex % this.words.length;
//    console.log(currentWordIndex);

    // get full text of the current word
    const fullText = this.words[currentWordIndex];
   // console.log(fullText);  

    // check if typed text is in deleting state
    
    if(this.isDeleting) {
        // remove a character
        this.txt = fullText.substring(0, this.txt.length - 1);

    } else {
        // add a character
        this.txt = fullText.substring(0, this.txt.length + 1);
    }

    // output text and insert txt into the text element (span)
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 300;

    setTimeout(() => this.type(), 500)
}

// Init On Dom Load 
document.addEventListener('DOMContentLoaded', init);

// Init App

function init() {
    const txtElement = document.querySelector('.txt-type');

    // parse through JSON.parse method
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    
    const wait = txtElement.getAttribute('data-wait');

    // initialize the typewriter by passing in all three data attributes
    new TypeWriter(txtElement, words, wait);

}