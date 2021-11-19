let count = 0;
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");
const imgEl = document.getElementById("rev-img");
const nameEl = document.getElementById("rev-name");
const jobEl = document.getElementById("rev-job");
const textEl = document.getElementById("rev-text");

let reviewers = {
    0 : [
        "James Robinson",
        "./person1.png",
        "Software Engineer",
        "Hi! My name is James and I had an absolutely fantastic experience with this company! Definetly recommend trying them out.",
    ],
    1: [
        "Jamal Adams",
        "./person2.jpg",
        "Cybersecurity Specialist",
        "Hi! My name is Jamal and I had an absolutely fantastic experience with this company! Definetly recommend trying them out.",
    ],
    2 : [
        "Sam Perriman",
        "./person3.png",
        "Data Scientist",
        "Hi! My name is Sam and I had an absolutely fantastic experience with this company! Definetly recommend trying them out.",
    ],
    3 : [
        "Margaret Brown",
        "./person4.png",
        "Machine Learning Specialist",
        "Hi! My name is Margaret and I had an absolutely fantastic experience with this company! Definetly recommend trying them out.",
    ],
};

let size = getSize(reviewers);
function getSize(obj) {
    let s = 0;
    for ( let key in obj ) {
        s++;
    }
    return s;
}

leftArrow.addEventListener('click', () => {
    --count;
    nameEl.innerText = reviewers[Math.abs(size + count) % size][0];
    jobEl.innerText = reviewers[Math.abs(size + count) % size][2];
    textEl.innerText = reviewers[Math.abs(size + count) % size][3];
})

rightArrow.addEventListener('click', () => {
    count++;
    nameEl.innerText = reviewers[Math.abs(size + count) % size][0];
    jobEl.innerText = reviewers[Math.abs(size + count) % size][2];
    textEl.innerText = reviewers[Math.abs(size + count) % size][3];
})

