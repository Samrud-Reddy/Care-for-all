var slide_pos = 1;
const number_of_slides = $('.slideshow').length;
const rem = 16;

for (let i = 1; i<=number_of_slides; i++){
    $(`.selector`).append(`<span class="dot" onclick="setSlidePos(${i})"></span>`);
}

function mod(n, m) {
    return ((n % m) + m) % m;
  }

function update_selector(){
    $(`.dot`).removeClass("selected")
    $(`.dot:nth-child(${slide_pos})`).addClass("selected")
}


function setSlidePos(x){
    slide_pos = x;
    update_selector()
    let width_of_img = ($(window).width()*0.9) - (rem * 6);
    let fixed_x = mod((x-1), (number_of_slides))
   
    // let start_pos = $(".carasel").scrollLeft();
    let final_scroll = fixed_x*width_of_img;
    // let scroll_pos = start_pos;
    // let scroll_len = final_scroll - start_pos;


    $(".carasel").scrollLeft(final_scroll);
}



setSlidePos(slide_pos)

$(window).resize(function() {
    setSlidePos(slide_pos);
})

$(document).keydown(function(e) {
    if (e.which === 39) {
        slide_pos = mod(((slide_pos + 1)-1), number_of_slides)+1;
        setSlidePos(slide_pos);
    }
    else if (e.which === 37) {
        slide_pos = mod(((slide_pos - 1)-1), number_of_slides)+1;
        setSlidePos(slide_pos);
    }
})