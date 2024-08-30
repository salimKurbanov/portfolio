
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.2,
    effects: true,
});

gsap.fromTo('.menu_wrapper .menu_burger', {xPercent: -100},{
    xPercent: 0,
    duration: 0.8,
    delay: 0.5,
})
gsap.fromTo('.main_block p', {opacity: 0, yPercent: -100}, {
    opacity: 1,
    yPercent: 0,
    duration: 0.8,
    delay: 1.1,
})

gsap.fromTo('.main_block h1',{opacity: 0, xPercent: -100}, {
    opacity: 1,
    xPercent: 0,
    duration: 0.8,
    delay: 0.5,
})

gsap.fromTo('.main_img', {opacity: 0, x: 100}, {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 0.3,
})

gsap.fromTo('.main_block', {opacity: 1}, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.main_block',//для какого блока
        start: 'center',     //начало анимации
        end: '1000',       //конец анимаации относительно экрана   
        scrub: true          //чтобы анимация двигалась в обе стороны
    },
});

let itemsL = gsap.utils.toArray('.works_column.left .work_item');

itemsL.forEach(item => {
    gsap.fromTo(item, {x: -100, opacity: 0}, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: item,
            start: 'top bottom', //топ элемента и низ экрана(анимация начнётся, когда топ элемента коснётся низа экрана)
            end: 'bottom bottom',
            scrub: true          
        },
    });
})

let itemsR = gsap.utils.toArray('.works_column.right .work_item');

itemsR.forEach(item => {
    gsap.fromTo(item, {x: 200, opacity: 0}, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true          
        },
    });
})

let itemsRText = gsap.utils.toArray('.works_column.right .work_block_text');

itemsRText.forEach(item => {
    gsap.fromTo(item, {x: 200, opacity: 0}, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'center center',
            scrub: true          
        },
    });
})


/* -------------menu Burger------------- */
const menuList = document.querySelector('.menu_list');

document.querySelector('.menu_burger').addEventListener('click', (e) => {
    e.stopPropagation();
    menuList.classList.toggle('open');
});

window.addEventListener('click', () => {
    menuList.classList.remove('open');
});

/* --------------Skills block-------------- */
let sections = gsap.utils.toArray('.skills_item');


gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger:{
        trigger: '.skills_track',
        pin: true, //останавливает экран и добавляет скролл
        scrub: 1, //плавность движения
        snap: 1 / (sections.length - 1),
        end: () => "+=" + 
        document.querySelector(".skills_track").offsetWidth,
    },
})