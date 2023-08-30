const counters = document.querySelectorAll('.counter');

function animate(elem, progress) {
    let final = +elem.getAttribute("final")
    let time = +elem.getAttribute("time")*100/5

    let interval = final/time


    if (progress < final){
        progress = progress+interval;
        if (progress>final){
            progress=final;
        }
        elem.innerHTML = Math.floor(progress);
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






$(function(){
	var inputs = $('.not_end');
	var paras = $('.descripters').find('p');

	inputs.click(function(){
		var t = $(this),
				ind = t.index()-1,
				matchedPara = paras.eq(ind);
		
		t.add(matchedPara).addClass('active');
		inputs.not(t).add(paras.not(matchedPara)).removeClass('active');
	});
});