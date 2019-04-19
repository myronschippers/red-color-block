$(document).ready(function() {
    $('#redBtn').on('click', onClickForRed);
    $('#blueBtn').on('click', onClickForBlue);
    $('#greenBtn').on('click', onClickForGreen);
    $('#yellowBtn').on('click', onClickForYellow);

    $('#container').on('click', onClickContainerRemoveBox);
});

const counter = {
    red: 0,
    green: 0,
    yellow: 0,
    blue: 0,
};

function onClickForRed() {
    displayBox('red');
}

function onClickForBlue() {
    displayBox('blue');
}

function onClickForGreen() {
    displayBox('green');
}

function onClickForYellow() {
    displayBox('yellow');
}

function onClickContainerRemoveBox(event) {
    const $clickedChild = $(event.target);
    const elemClasses = $clickedChild.attr('class');

    if (elemClasses.indexOf('red') != -1) {
        removeDisplayBox('red', $clickedChild);
    }
}

function displayBox(color) {
    const firstLetter = color.charAt(0);
    const uppercaseFirstLetter = firstLetter.toUpperCase();
    const countLabel = uppercaseFirstLetter + color.slice(1);

    counter[color]++;
    const countText = `${countLabel} Count: ${counter[color]}`;

    $(`#${color}Count`).text(countText);
    $('#container').append(`<div class="box ${color}"></div>`);
}

function removeDisplayBox(color, $boxElem) {
    const firstLetter = color.charAt(0);
    const uppercaseFirstLetter = firstLetter.toUpperCase();
    const countLabel = uppercaseFirstLetter + color.slice(1);

    counter[color]--;
    const countText = `${countLabel} Count: ${counter[color]}`;
    $(`#${color}Count`).text(countText);
    $boxElem.remove();
}

console.log('Im running outside the document ready!');