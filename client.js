$(document).ready(readyNow);

function readyNow() {
    addClickHandlers();
}

function addClickHandlers() {
    $('#generate').on('click', handleGenerate);
    $('#swap').on('click', handleSwap);
    $('#delete').on('click', handleDelete);
}

function handleGenerate() {
    numberClicks();
    $('.block').append(
        `<div class="red">
            <p class="numberOfClicks"><p>
            <button class="swap">Swap</button>
            <button class="delete">Delete</button>
        </div>`);
    $('.swap').on('click', handleSwap);
    $('.delete').on('click', handleDelete);
}

let numberOfClicks = 0;

function numberClicks(){
    numberOfClicks++;
    $('.numberOfClicks').text(numberOfClicks);
}

function handleSwap() {
    $(this).parent().parent().toggleClass('yellow');
}

function handleDelete() {
    $(this).parent().parent().remove();
}