function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array
}

function reset(elem) {
    elem.removeClass("move")
    elem.css("display", "none")
}

function pop() {
    if (order.length == 0) {
        order = new_order.reverse()
        new_order = []
    }
    reset(order[order.length - 1])
    new_order.push(order.pop())
    return new_order[new_order.length - 1]
}

function random(start, end) {
    return Math.floor((Math.random() * end) + start)
}

function generate_track() {
    if (prev_track == -1) {
        prev_track = (prev_track + random(1, 3)) % 3
    } else {
        prev_track = (prev_track + random(1,2)) % 3
    }

    return prev_track
}


function spawn() {
    elem = pop()
    track = generate_track()

    elem.css("top", (height_of_track*track).toString() + "px")
    elem.addClass("move")
    elem.show()

    time = elem.attr("length")
    setTimeout(() => {
        if (run) {
            spawn()
        }
    }, time*150*(1500/window.innerWidth))
}

order = []

new_order = []

height_of_track = $(".volunteer").height()

prev_track = -1

run = true

function start() {
    $('.volunteer').each(function() {
        $(this).attr("length", $(this).text().length)

        order.push($(this))
    });

    order = shuffleArray(order)

    run = true

    spawn()
}

function stop() {
    run = false
    $(".volunteer").removeClass("move")
    $(".volunteer").css("display", "none")
}


start()