const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');


let activeSlide = 0;

setBgToBody();

function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;

}

rightBtn.addEventListener('click', ()=>{
    activeSlide++;

    if(activeSlide>slides.length){
        activeSlide = slides.length;
    }

    console.log(activeSlide);

    setBgToBody();
    updateSlides();
})


leftBtn.addEventListener('click', ()=>{

    activeSlide--;

    if(activeSlide<=0){
        activeSlide = 0;
    }

    setBgToBody();
    updateSlides();
})


function updateSlides(){
    slides.forEach((slide, index)=>{
        if(slide===index){
            slide.classList.add = 'active';
        }else{
            slide.classList.remove = 'active';
        }
    })
}