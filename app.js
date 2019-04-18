$(document).ready(function() {
    $('#redBtn').on('click', whenIclickTheRedButton);
});

let redCount = 0;

function whenIclickTheRedButton() {
    redCount++;
    $('#redCount').text('Red Count: ' + redCount);
    $('#container').append('<div class="box red"></div>');
}

console.log('Im running outside the document ready!');


/*
function onReady() {
    console.log('Code to run when it loads!');
}

let someFunction = function() {
    console.log('Hey, Im a function!');
}
*/