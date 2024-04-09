main_menu_is_open = false
open_submenu = null

function open_menu() {
    $(".cover").show()
    $(".nav_buttons").css("display", "flex")
    main_menu_is_open = true
}

function close_all_sub_menu() {
    $(".dropdown-content").hide()
    open_submenu = null
}

function close_menu() {
    close_all_sub_menu()
    $(".cover").hide()
    $(".nav_buttons").hide()
    main_menu_is_open = false
}

$(".menu").click(() => {
    if (main_menu_is_open) {
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


$(".has_content").click((e) => {
    if (e.target == open_submenu) {
        close_all_sub_menu()
    } else {
        close_all_sub_menu()
        $(e.target).next(".dropdown-content").css("display", "flex")
        open_submenu = e.target
    }
})