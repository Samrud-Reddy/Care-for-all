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

navbar_is_vertical = null

if (window.innerWidth >= 1050) {
    navbar_is_vertical = false
} else {
    navbar_is_vertical = true
}

$(window).resize(function() {
    var windowWidth = window.innerWidth;
    if (windowWidth >= 1050) {
        $(".nav_buttons").css("display", "flex");
        navbar_is_vertical = false
    } else if (windowWidth < 1050 && !navbar_is_vertical) {
        close_menu()
    }
});
