var fortuneWord = [
    "การแอบไปคบคนใหม่นอกจากจะไม่ช่วยอะไรแล้ว ก็ยังเพิ่มปัญหาความสัมพันธ์ให้มากขึ้นจนอกแตกตายได้",
    "ครั้งนี้แม้จะหนักไปมากแต่มันคือบทเรียนที่สำคัญ",
    "ดอกสโนวไวท์จะอยู่ได้นานถึง 10 ปี ความทนนี้แหละ ทำให้ได้ความหมายว่าเป็นรักนิรันดร์ และมั่นคงตลอดไป",
    "ความรักในครั้งจะจะเป็นเครื่องพิสูจน์ให้คุณ คุณจะเข้าใจความรักมากขึ้น",
    "เข้มแข็งไว้นะสู้ๆ",
    "แกะฉันทำไมอยากนะนอนนน"
];

function play() {
    cookie1.classList.add('cookie-hide');
    cookie2.classList.add('cookie-show');
    setTimeout(function () {
        getFortune();
    }, 3000)
}

function getFortune() {
    let number = Math.floor(Math.random() * (fortuneWord.length - 1));
    fortune.innerText = fortuneWord[number];
    fortune.style.opacity = '1';
    fortune.style.top = '96px';
}

function playBack() {
    cookie2.classList.remove('cookie-show');
    cookie1.classList.remove('cookie-hide');
    fortune.style.opacity = '0';
    setTimeout(() => {
        cookie2.classList.add('cookie-hide');
        cookie1.classList.add('cookie-show');
    }, 10);
    setTimeout(() => {
        removeClass();
    }, 2000);
}

function removeClass() {
    cookie1.classList.remove('cookie-hide');
    cookie2.classList.remove('cookie-show');
    cookie2.classList.remove('cookie-hide');
    cookie1.classList.remove('cookie-show');
    fortune.style.opacity = '0';
}