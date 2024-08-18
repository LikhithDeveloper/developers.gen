addEventListener("DOMContentLoaded", () => {
    let questions = document.querySelectorAll(".faqs");
    let puls = document.querySelectorAll(".svg");
    // console.log(questions)
    // console.log(puls)
    
    let x = questions.forEach((question, index) => {
        question.addEventListener('click', () => {
            // console.log(index)
            // console.log(question)
            let answer = question.nextElementSibling;
            let isCurrentlyVisible = answer.classList.contains('answershow');

            // Close all answers and reset plus icons
            let allAnswers = document.querySelectorAll(".faqa1");
            allAnswers.forEach((answer) => {
                answer.classList.remove('answershow');
            });

            puls.forEach((icon) => {
                icon.classList.remove('svg1');
            });
            
            // Toggle the selected answer and corresponding plus icon, but only if it was not already visible
            if (!isCurrentlyVisible) {
                answer.classList.add('answershow');
                puls[index].classList.add('svg1');
            }
        });
    });

});
