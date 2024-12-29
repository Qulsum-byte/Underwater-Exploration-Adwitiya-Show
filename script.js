var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000);
}
// Add event listener to submit button
document.querySelector('.submit-btn').addEventListener('click', (e) => {
    e.preventDefault();
    // Get user answers
    const userAnswers = {};
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach((radio) => {
        if (radio.checked) {
            userAnswers[radio.name] = radio.value;
        }
    });
    // Check answers and display result
    const correctAnswers = {
        q1: 'a',
        q2: 'a',
        q3: 'a',
        q4: 'a',
        q5: 'a',
        q6: 'a',
        q7: 'b',
        q8: 'a',
        q9: 'a',
        q10: 'a',
        q11: 'b',
        q12: 'a',
        q13: 'c',
        q14: 'a',
        q15: 'c',
        q16: 'c',
        q17: 'a',
        q18: 'a',
        q19: 'a',
        q20: 'a',
    };
    let score = 0;
    Object.keys(userAnswers).forEach((question) => {
        if (userAnswers[question] === correctAnswers[question]) {
            score++;
        }
    });
    const result = `You scored ${score} out of ${Object.keys(correctAnswers).length}!`;
    alert(result);
});