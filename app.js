const reviews = [
    {
        author: "Maeve Kenny",
        job: "Media Specialist",
        img: "./Images/maeve.jpg",
        info: "Spencer is the best programmer ever. He is also my favorite person on earth!",
    },
    {
        author: "Elon Musk",
        job: "The GOAT",
        img: "./Images/elon.jpeg",
        info: "Spencer is a brilliant individual." ,  
    },
    {
        author: "Edward Snowden",
        job: "Patriot",
        img: "./Images/snowden.jpg",
        info: "Had I known Spencer at the time, I'd given him the NSA secrets." , 
    },
    {
        author: "David Goggins",
        job: "Soul Snatcher",
        img: "./Images/goggins.jpg",
        info: "If anyone can carry the boat, it's Spencer!" , 
    },
    {
        author: "Warren Buffet",
        job: "Old Guy",
        img: "./Images/buffet.jpeg",
        info: "When I saw Spencer's trades I realized I've been doing it wrong for years." , 
    },
    {
        author: "Joe Biden",
        job: "Maybe: President",
        img: "./Images/biden.jpg",
        info: "Goats are like mushrooms. Because if you shoot a duck, I'm scared of toasters." , 
    },
    {
        author: "Anthony Fauci",
        job: "Big Science Guy",
        img: "./Images/fauci.jpg",
        info: "Spencer IS science!" , 
    },
];

//select items

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nxtBtn = document.querySelector('.nxt-btn');

// set starting item

let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
   showPerson(currentItem);
});

// show person based on item

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.info;
}

// show next person

nxtBtn.addEventListener("click" , function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    };
    showPerson(currentItem);
});

// show previous person

prevBtn.addEventListener("click" , function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    };
    showPerson(currentItem);
});