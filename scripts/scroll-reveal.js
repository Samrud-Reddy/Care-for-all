const counters = document.querySelectorAll('.counter');

function add_commas(number) {
    if (number.length <= 3) {
        return number
    }
    comma_length = 2

    num_string = number.toString().split("").reverse();
     
    for (i = 3; i < num_string.length; i += comma_length + 1){
        num_string.splice(i, 0, ",");
    }

    return num_string.reverse().join("");
}

function get_numbers(str) {
    return parseInt(str.match(/[0-9]/g).join(""));
}

function has_commas(str) {
    return str != get_numbers(str)
}

function animate(elem, progress) {
    let final_txt = elem.getAttribute("final")
    let final = get_numbers(final_txt)
    let time = +elem.getAttribute("time")*100/5

    let interval = final/time


    if (progress < final){
        progress = progress+interval;
        if (progress>final){
            progress=final;
        }
        if (has_commas(final_txt)) {
            elem.innerHTML = add_commas(Math.floor(progress));
        } else {
            elem.innerHTML = Math.floor(progress);
        }
        setTimeout(animate, 50, elem, progress)
    }
}

function counters_hide(x){
    if (x){
        $(".counter").css("opacity", "0%")
    }
    else {
        $(".counter").css("opacity", "100%")
    }
}

function start_animation(){
    counters_hide(false)
    animation_run = true;
    counters.forEach( counter => {
        animate(counter, 0)
    });
}

counters_hide(true);
animation_run = false;

function scroll_handler(){
    let top = document.getElementsByClassName("counters")[0].getBoundingClientRect().top;
    let bottom = document.getElementsByClassName("counters")[0].getBoundingClientRect().bottom;

    let window_hieght = window.innerHeight
    let offset = 100;

    if (window_hieght > (bottom)){
        if (!animation_run){
            start_animation()
        }
    }
    else if(window_hieght<top){
        counters_hide(true)
        animation_run = false;
    }
}

$(document).ready(scroll_handler)


$(document).scroll(scroll_handler)

