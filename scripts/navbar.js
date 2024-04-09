is_open = true

function open_menu() {
    $(".cover").show()
    $(".nav_buttons").css("display", "flex")
    is_open = true
}

function close_menu() {
    $(".cover").hide()
    $(".nav_buttons").hide()
    is_open = false
}

open_menu()

$(".menu").click(() => {
    if (is_open) {
        close_menu()
    } else {
        open_menu()
    }

})

$('.navbar').click(function(event) {
        if(event.target == this) {
            close_menu()
        }
});

$(".cover").click(() => {
    close_menu()
})