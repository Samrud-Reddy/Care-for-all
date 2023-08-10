var slide_pos = 1;
const number_of_slides = $('.slideshow').length;

for (let i = 1; i<=number_of_slides; i++){
    $(`.selector`).append(`<span class="dot" onclick="set_slide(${i})"></span>`);
}

function hide_all_slides(){
    for (let i = 1; i<=number_of_slides; i++){
        $(`.images>.slideshow:nth-child(${i})`).hide();
        $(`.dot:nth-child(${i})`).removeClass("selected");
    }
}

function update_slides(){
    hide_all_slides();

    $(`.images>.slideshow:nth-child(${slide_pos})`).show();
    $(`.dot:nth-child(${slide_pos})`).addClass("selected");
}

function mod(n, m) {
    return ((n % m) + m) % m;
}

function change_slides(x){
    let fixed_slide_pos = slide_pos-1;
    x = fixed_slide_pos + x;

    x = mod(x, number_of_slides);

    x = x + 1;

    slide_pos = x;
    update_slides();
}

function set_slide(x){
    slide_pos = x;
    update_slides();
}

update_slides();

$(document).keydown(function(e) {
    if (e.which === 39) {
        change_slides(1);
    }
    else if (e.which === 37) {
        change_slides(-1);
    }
})