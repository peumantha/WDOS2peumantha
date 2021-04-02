console.log("test");

let slideIndex = 0
/* This is for the slideshow in buynow page*/
const showSlides = () => {
    console.log("Function is running");

    const slides = document.getElementsByClassName("mySlides");

    for(let i=0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }

    slideIndex++;

    if(slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides , 3000);

    console.log("slides")

};

showSlides();