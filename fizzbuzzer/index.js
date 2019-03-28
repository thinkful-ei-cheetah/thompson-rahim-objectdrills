
function fizzbuzzer(num) {
    if (num % 15 === 0) return 'fizzbuzz';    
    if (num % 3 === 0) return 'buzz';    
    if (num % 5 === 0) return 'fizz';    
    return num;
}

function countUpTo(num) {
    
}

function fizzbuzzUpto(countTo) {

}

function generateDiv(fizzbuzzElement) {

}
function outputFizzbuzzHtml(num) {
    const fizzbuzzedResults = fizzbuzzUpto(50);
    const fizzbuzzElements = 
}

function main () {
    $("number-chooser").on('submit', event => {
    event.preventDefault();
    const countTo = $('#number-choice').val();
    $('#number-choice').val();
    event.target.reset();
    outputFizzbuzzHtml(countTo);
    //console.log('submitted'); )
    });
}

$(main);