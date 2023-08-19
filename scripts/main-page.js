var slide_pos = 1;
const number_of_slides = $('.slideshow').length-1;

const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

for (let i = 1; i<=number_of_slides; i++){
    $(`.selector`).append(`<span class="dot" onclick="setPos(${i})"></span>`);
}

function mod(n, m) {
    return ((n % m) + m) % m;
}

function fix_x(x){
    return mod(slide_pos-1, number_of_slides)+1
}

function updateSelctors(){
    $(".dot").removeClass("selected");
    $(`.dot:nth-child(${fix_x(slide_pos)})`).addClass("selected");
}


function setPos(x){
    slide_pos = x;
    $(".slideshow").css("right", `${(x-1)*100}%`)
    updateSelctors()
}

function move(x, callback){
    slide_pos = x;
    running=true;
    let time = 0.8;
    if (callback){
        $(".slideshow").animate({right: `${(x-1)*100}%`}, time*1000, "swing", function() {callback();})
    }
    else {
        $(".slideshow").animate({right: `${(x-1)*100}%`}, time*1000, "swing", function() {})
    }
    setTimeout(() => {slide_pos = fix_x(slide_pos);running = false;}, (time*0.8)*1000)
    updateSelctors();
}



function go_right(){
    if (!running){
        if (slide_pos >= number_of_slides) {
            move(slide_pos+1, ()=>{setPos(1)})
        }
        else {
            move(slide_pos+1)
        }
    }
}

function go_left(){
    if (!running){
        if (slide_pos <= 1) {
            setPos(number_of_slides+1);
            move(slide_pos-1)
        }
        else {
            move(slide_pos-1)
        }
    }
}

setPos(slide_pos)
var running = false;


// let interval_time = 5
// let intervalId = setInterval(function(){go_right()}, interval_time*1000);





$(document).keydown(function(e) {
    if (e.which === 39) {
        go_right();
    }
    else if (e.which === 37) {
        go_left();
    }
})