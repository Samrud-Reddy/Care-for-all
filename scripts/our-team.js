function truncate(text) {
    // split = text.split(".", 1)
    // out = split[0] + "."

    out = text.split(" ", 20)
    out = out.join(" ")

    return out
}

function collapse(e) {
    if (e instanceof jQuery) {
        description = e
    } else {
        description = $(e.target)
    }

    text = description.attr("text")
    // description.text(truncate(text))
    description.text("")
    
    img = $("<img>", { src: "files/3-white-dots.png", class: "dots" });

    description.append(img)
}

function expand(e) {

    description = $(e.target)

    text = description.attr("text")

    description.text(text)
}

function init_idcard(idcard) {
    description = idcard.find(".discription")
    description.attr("text", description.text())

    collapse(description)
}



$(document).ready(function() {
    $(".idcard").each(function(i, elem) {
        init_idcard($(elem))
    });

    $(".idcard .discription").hover(expand, collapse)

});