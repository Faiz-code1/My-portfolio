// Typing Effect in Hero Section
const words = ["Frontend Web Interfaces", "Responsive Web Applications", "Modern User Experiences", "Interactive Components"];
let i = 0;
let timer;

function typingEffect() {
    const word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('typing').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000);
            return false;
        }
        timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
}

function deletingEffect() {
    const word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('typing').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            setTimeout(typingEffect, 500);
            return false;
        }
        timer = setTimeout(loopDeleting, 50);
    };
    loopDeleting();
}

typingEffect();

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.querySelector('i').classList.toggle('fa-bars');
    hamburger.querySelector('i').classList.toggle('fa-xmark');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.add('fa-bars');
        hamburger.querySelector('i').classList.remove('fa-xmark');
    });
});

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Project Modal Handling
// const modal = document.getElementById('projectModal');
// const closeModal = document.getElementById('closeModal');
// const openModalBtns = document.querySelectorAll('.open-modal');

// const modalTitle = document.getElementById('modalTitle');
// const modalDesc = document.getElementById('modalDesc');
// const modalTech = document.getElementById('modalTech');

// openModalBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         const title = btn.getAttribute('data-title');
//         const desc = btn.getAttribute('data-desc');
//         const tech = btn.getAttribute('data-tech');

//         modalTitle.textContent = title;
//         modalDesc.textContent = desc;
//         modalTech.textContent = tech;

//         modal.classList.add('active');
//     });
// });

// closeModal.addEventListener('click', () => {
//     modal.classList.remove('active');
// });

// window.addEventListener('click', (e) => {
//     if (e.target === modal) {
//         modal.classList.remove('active');
//     }
// });

// Contact Form Submission Mock
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! Your message has been simulated successfully.');
    contactForm.reset();
});






// document.addEventListener('DOMContentLoaded', () => {
//     const cards = document.querySelectorAll('.projects-grid .project-card');
//     const prevBtn = document.getElementById('prevBtn');
//     const nextBtn = document.getElementById('nextBtn');
    
//     let currentPage = 0;
//     const cardsPerPage = 3;

//     function updatePagination() {
//         const totalPages = Math.ceil(cards.length / cardsPerPage);

//         // Hide all cards first
//         cards.forEach((card) => {
//             card.style.display = 'none';
//         });

//         // Show only 3 cards for current page
//         const start = currentPage * cardsPerPage;
//         const end = start + cardsPerPage;

//         for (let i = start; i < end && i < cards.length; i++) {
//             cards[i].style.display = 'block';
//         }

//         // Handle Prev Button state
//         if (currentPage === 0) {
//             prevBtn.style.opacity = '0.3';
//             prevBtn.style.cursor = 'not-allowed';
//         } else {
//             prevBtn.style.opacity = '1';
//             prevBtn.style.cursor = 'pointer';
//         }

//         // Handle Next Button state
//         if (currentPage >= totalPages - 1) {
//             nextBtn.style.opacity = '0.3';
//             nextBtn.style.cursor = 'not-allowed';
//         } else {
//             nextBtn.style.opacity = '1';
//             nextBtn.style.cursor = 'pointer';
//         }
//     }

//     nextBtn.addEventListener('click', () => {
//         const totalPages = Math.ceil(cards.length / cardsPerPage);
//         if (currentPage < totalPages - 1) {
//             currentPage++;
//             updatePagination();
//         }
//     });

//     prevBtn.addEventListener('click', () => {
//         if (currentPage > 0) {
//             currentPage--;
//             updatePagination();
//         }
//     });

//     // Initial load
//     updatePagination();
// });



document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.projects-grid .project-card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0; // Yeh track karega ki kahan se card shuru ho raha hai
    const visibleCount = 3; // Ek baar mein 3 cards dikhenge

    function updatePagination() {
        const totalCards = cards.length;

        // Sabhi cards ko pehle hide kar do
        cards.forEach((card) => {
            card.style.display = 'none';
        });

        // Current index se lekar agle 3 cards dikhao (1-by-1 shift hote huye)
        for (let i = 0; i < visibleCount; i++) {
            let cardIndex = (currentIndex + i) % totalCards;
            cards[cardIndex].style.display = 'block';
        }

        // Buttons ki styling / state handle karne ke liye (agar loop chalana hai ya rokna hai)
        // Agar aap chahte hain ki aakhri card par jakar button disable ho jaye, toh yeh condition rakhein:
        if (currentIndex === 0) {
            prevBtn.style.opacity = '0.3';
            prevBtn.style.cursor = 'not-allowed';
         } else {
            prevBtn.style.opacity = '1';
            prevBtn.style.cursor = 'pointer';
         }

        if (currentIndex >= totalCards - visibleCount) {
            nextBtn.style.opacity = '0.3';
            nextBtn.style.cursor = 'not-allowed';
        } else {
            nextBtn.style.opacity = '1';
            nextBtn.style.cursor = 'pointer';
        }
    }

    // Next Button Click (Ek-ek karke aage badhega)
    nextBtn.addEventListener('click', () => {
        const totalCards = cards.length;
        if (currentIndex < totalCards - visibleCount) {
            currentIndex++;
            updatePagination();
        }
    });

    // Prev Button Click (Ek-ek karke piche aayega)
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updatePagination();
        }
    });

    // Initial load
    updatePagination();
});