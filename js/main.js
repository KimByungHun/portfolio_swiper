const swiper = new Swiper("#wrap",{
    loop: true,
    slidesPerView: "auto",
    centeredSlides:true,
    spaceBetween:50,
    mousewheel:true,


    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },

    pagination:{
        el:".swiper-pagination",
        clickable:true
    },

    effect : "coverflow",
    coverflowEffect:{
        rotate:50,
        stretch:-100,
        depth:400,
        slideShadows:false
    }
});