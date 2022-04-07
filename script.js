// ****** word count **********
function countWord() {
    // get input text value.
    var words = document.getElementById("text-box").value;
    // initialize word counter.
    var count = 0;
    
    // split word on each space character.
    var split = words.split(' ');

    // loop throught the words and increase the counter by 1 when each split word is not empty.
    for (var i = 0; i<split.length; i++) {
        if (split[i] != "") {
            count += 1;
        }
    }


    //****** sentence count ********
    // get input text value
    var sentence = document.getElementById("text-box").value;
    // declare puntuations that ends a sentence
    var re = /['.?!']/;
    // initialize counter
    var counter = 0;
    
    // split sentence on each punctuation
    var split = sentence.split(re);

    // loop throught the sentence and increase the counter by 1 when each split word is not empty.
    for (var i = 0; i<split.length; i++) {
        if (split[i] != "") {
            counter += 1;
        }
    }

    // display words  and sentenceoutput.
    document.getElementById("display-word").innerHTML = count;
    document.getElementById("display-sentence").innerHTML = counter;
}


// character count jquery
$('textarea').keyup(function() {
    
    var characterCount = $(this).val().length,
        current = $('#display-character'),
        footerLabels = $('#footer-labels');
      
    current.text(characterCount);
});



// text color change function
function black() {
    document.getElementById("text-box").style.color="#000000";
}
function purple() {
    document.getElementById("text-box").style.color="#4857e2";
}
function brown() {
    document.getElementById("text-box").style.color="#D38282";
}


// save to local storage

