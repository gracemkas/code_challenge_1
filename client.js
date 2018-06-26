$(document).ready(readyNow);

function readyNow() {
    addClickHandlers();
}

function addClickHandlers() {
    $('#generate').on('click', handleGenerate);
    $('#main').on('click', '.swap', handleSwap);
    $('#main').on('click', '.delete', handleDelete);
}

function handleGenerate() {
    numberOfClicks++;
    let outputString = '<div class="red">';

    outputString += '<p>' + numberOfClicks + '</p>';
    outputString += '<button class="swap">swap</button>';
    outputString += '<button class="delete">delete</button>';

    outputString += '</div>';
    $('#main').append(outputString);
}

let numberOfClicks = 0;

function handleSwap() {
    $(this).parent().toggleClass('yellow');
}

function handleDelete() {
    $(this).parent().remove();
}