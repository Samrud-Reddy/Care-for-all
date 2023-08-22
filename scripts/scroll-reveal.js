function onScroll(){
    var revealPoint = 0;

    let toApear = document.querySelectorAll(".website-section");
    let windowHeight = window.innerHeight;
    console.log(windowHeight)
    for (i = 0; i<toApear.length; i+=1){

        let revealTop = toApear[i].getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
			toApear[i].classList.add("active");
		} else {
			toApear[i].classList.remove("active");
		}
    }
}
onScroll()

$(window).scroll(onScroll)