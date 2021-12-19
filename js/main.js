const menu = ["Company","About","Information","Name"]
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
        type:"bullets",
        clickable:true,
        renderBullet:function(index,className){
            return `<span class="${className}">${menu[index]}</span>`
        }
    },

    // effect : "coverflow",
    // coverflowEffect:{
    //     rotate:50,
    //     stretch:-100,
    //     depth:400,
    //     slideShadows:false
    // }
});

//DOM Cashing
const bgs = document.querySelectorAll(".bg li");
const prev = document.querySelector(".swiper-button-prev");
const next = document.querySelector(".swiper-button-next"); 

next.addEventListener("click",activation);
prev.addEventListener("click",activation);
window.addEventListener("mousewheel",activation);
swiper.on("slideChangeTransitionEnd");
const navi = document.querySelectorAll(".swiper-pagination span")

for(let el of navi){
    el.addEventListener("click",e=>{
        const isOn = e.currentTarget.classList.contains(".swiper-pagination-bullet-active")
        
        swiper.on("slideChangeTransitionEnd",activation);
        if(isOn) return;
    })
}

function activation(){
    let item = document.querySelector(".swiper-slide-active");
    let i = item.getAttribute("data-swiper-slide-index");


    for(let el of bgs)    {
        el.classList.remove("on");
    }
    bgs[i].classList.add("on");

}