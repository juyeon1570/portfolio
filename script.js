"use script";

// 스크롤에 따른 메뉴바 색상처리
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
console.log(navbarHeight);
document.addEventListener('scroll',() => {
    if(window.scrollY>navbarHeight){
        navbar.classList.add('navbar--bold');
    }else{
        navbar.classList.remove('navbar--bold');
    }
})


// 스크롤에 따른 메뉴바 고정
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(e) => {
    const target=e.target;
    const link = target.dataset.link;

    if(link==null){
        return;
    }
    scrollIntoView(link);
})

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}


//contact 버튼
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', (e) => {
    const target = e.target;
    const link = target.dataset.link;
    if(link==null)return;
    scrollIntoView(link);
})

// 화살표 버튼

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight/2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
    home.style.opacity = 1-window.scrollY / homeHeight;
})


arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
})