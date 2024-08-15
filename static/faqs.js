addEventListener("DOMContentLoaded", () => {
    let questions = document.querySelectorAll(".faqs");
    
    questions.forEach((question) => {
        question.addEventListener('click', () => {
            let answer = question.nextElementSibling;
            let isCurrentlyVisible = answer.classList.contains('answershow');
            
            // Close all answers
            let allAnswers = document.querySelectorAll(".faqa1");
            allAnswers.forEach((answer) => {
                answer.classList.remove('answershow');
            });
            
            // Toggle the selected answer, but only if it was not already visible
            if (!isCurrentlyVisible) {
                answer.classList.add('answershow');
            }
        });
    });
});
