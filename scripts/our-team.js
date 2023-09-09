const len = $(".volunteer").length
const height = $(".volunteer").height()

//change in css
const time_taken = 8 * 1000
const interval = 4 * 1000;

var last_track = -1;
function gen_track(elem){
    let track = Math.floor(Math.random() * 3)

    if (track == last_track){
        track = gen_track(elem);
    }

    last_track = track
    return track;
}

function get_random_elem(){
    var inactiveDivs =  $(".volunteer:not(.active)");

    if (inactiveDivs.length == 0){
        return -1;
    }



    var randomIndex = Math.floor(Math.random() * inactiveDivs.length);

    var randomInactiveDiv = inactiveDivs.eq(randomIndex);
    return randomInactiveDiv;
}

// function remove_active(){
//     $(".volunteer").removeClass("active");
// }

function send_name(elem){
    elem.css({ top: gen_track(elem)*height+"px" });
    elem.addClass('active')

    setTimeout(function() {elem.removeClass("active");}, time_taken)
}


let elem = get_random_elem()
send_name(elem);

function better_interval(callback, interval){
    var end = Date.now() + interval;

    setInterval(function() {
        if (document.visibilityState != "hidden"){
            $(".volunteer").css("animation-play-state", "running");

            let time_left = end - Date.now()

            if (time_left < 0){
                callback()

                end = Date.now() + interval;
            }
        }
        else{
            $(".volunteer").css("animation-play-state", "paused");
        }

    }, 100)

}

better_interval(function() {
    let elem = get_random_elem()
    send_name(elem);
}, interval);

