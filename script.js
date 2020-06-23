
var timer = 120;
var timeId;
var timerHtml = document.querySelector(".timer");
var wrongAnswer = document.querySelector(".wrong");
var rightAnswer = document.querySelector(".right");
var score = 0;
var intro = document.querySelector("#intro");
var set1 = document.querySelector("#set1");
var set2 = document.querySelector("#set2");
var set3 = document.querySelector("#set3");
var set4 = document.querySelector("#set4");
var set5 = document.querySelector("#set5");
var scoreDisplay = document.querySelector("#scoreDisplay");
var slideAr = [intro, set1, set2, set3, set4, set5, scoreDisplay];
var questions = ["hoe"];
var answers = ["that's you"];
var slideNumber = 0;
var currentSlide = slideAr[slideNumber];
currentSlide.append(questions[slideNumber]).append(answers[slideNumber])

//timer
timeId = setInterval(function () {
    timer--;
    timerHtml.textContent = timer;
    if (timer <= 0) {
        stoptime()
    }
    console.log(timer)
}, 1000)

function stoptime() {
    clearInterval(timeId)
}

function nextSlide() {
    currentSlide.clear()
    s++

}
//button responces
wrongAnswer.addEventListener("click", function () {
    timer -= 10
    score--
    nextSlide()
})

rightAnswer.addEventListener("click", function () {
    score++
    nextSlide()
})

start.addEventListener("click", function () {
    nextSlide()
})

finish.addEventListener("click", function () {
    nextSlide()
})



