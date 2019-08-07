const letters = [".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",]
let faktiki = 0
const letters_con = document.getElementById('letters')
for (const letter of letters) {
    console.log(letter);

    const letter_div = document.createElement('div');
    letter_div.innerText = letter;
    console.log(letter_div);

    //set pos
    letter_div.style.position = 'absolute'
    const trans = Math.random() * 2 +1.5
    letter_div.style.left = (window.innerWidth * 0.98 - letter_div.offsetWidth) * Math.random() +'px';
    letter_div.style.top = (window.innerHeight * 0.97- letter_div.offsetHeight) * Math.random() +'px';
     letter_div.style.fontSize = Math.random() * 100 + 100 + '%'
     letter_div.style.opacity = Math.random()
    letters_con.appendChild(letter_div);

    letter_div.style.left = (window.innerWidth * 0.98 - letter_div.offsetWidth) * Math.random() +'px';
    letter_div.style.top = (window.innerHeight * 0.98- letter_div.offsetHeight) * Math.random() +'px';



    
}

requestAnimationFrame = window.requestAnimationFrame;
function step(timestamp) {
    
    for (const letter_div of letters_con.childNodes) {   
        letter_step(letter_div);
    }
    
}

function letter_step(letter_div) {
    letter_div.style.fontSize = Math.random() * 100 + 100 + '%'  
    letter_div.style.opacity = Math.random()  

    const trans = Math.random() * 2000 +1500 
    letter_div.style.left = (window.innerWidth * 0.98 - letter_div.offsetWidth) * Math.random() +'px';
    letter_div.style.top = (window.innerHeight * 0.98 - letter_div.offsetHeight) * Math.random() +'px';
    letter_div.style.transition = trans +'ms';

    setTimeout(function () {
        requestAnimationFrame(function() {
            letter_step(letter_div);
         });
    }, trans);
}
requestAnimationFrame(step); 
function myFunction() {
    faktiki -= 1;
    zbirka()
zakon();
}
function myFunction1() {
    faktiki += 1;
    zbirka()
    zakon();
}
function zakon() {
    if (faktiki == -1){
        faktiki += 1
    }
    if (faktiki == 3) {
        faktiki -= 1
    }
}
function zbirka() {
    if (faktiki == 2) {
        document.getElementById("fact1").innerHTML = "Вчусь користуватись AR.";
        document.getElementById("fact2").innerHTML = "Назад в майбутнє ТОП!!!.";
        document.getElementById("fact3").innerHTML = "Люблю подорожувати.";
    }
    if (faktiki == 1) {
        document.getElementById("fact1").innerHTML = "Займаюсь карате.";
        document.getElementById("fact2").innerHTML = "Не люблю школу";
        document.getElementById("fact3").innerHTML = "Я не дизайнер.";
    }
    if (faktiki == 0) {
        document.getElementById("fact1").innerHTML = "Люблю грати шахи.";
        document.getElementById("fact2").innerHTML = "Вмію створювати сайти.";
        document.getElementById("fact3").innerHTML = "Вчусь створювати ігри.";
    }

}
//background-color: rgb(59, 52, 52)

