document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const backToTopButton = document.querySelector('#back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('img').style.transform = 'scale(1.05)';
        card.querySelector('img').style.filter = 'brightness(1.2)';
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('img').style.transform = 'scale(1)';
        card.querySelector('img').style.filter = 'brightness(1)';
    });
});

window.addEventListener('load', () => {
    const nav = document.querySelector('nav');
    setTimeout(() => {
        nav.classList.add('nav-slide-in-active');
    }, 100);
    updateBackground();
});

document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', () => {
        const targetId = link.getAttribute('data-target');
        const details = document.getElementById(targetId);
        const isHidden = details.classList.contains('hidden');
        
        if (isHidden) {
            details.classList.remove('hidden');
            setTimeout(() => {
                details.style.maxHeight = details.scrollHeight + 'px';
            }, 10);
            link.textContent = 'Read Less';
        } else {
            details.style.maxHeight = '0';
            setTimeout(() => {
                details.classList.add('hidden');
            }, 300);
            link.textContent = 'Read More >';
        }
    });
});

function updateBackground() {
    const videoBackground = document.querySelector('.video-background');
    const staticBackground = document.querySelector('.static-background');
    if (window.innerWidth <= 768) {
        videoBackground.style.display = 'none';
        staticBackground.classList.remove('hidden');
    } else {
        videoBackground.style.display = 'block';
        staticBackground.classList.add('hidden');
    }
}

window.addEventListener('resize', () => {
    updateBackground();
    const sidebar = document.querySelector('.nav-sidebar');
    if (window.innerWidth > 768) {
        sidebar.classList.remove('nav-sidebar-open');
    }
});

const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.fa-times');
const sidebar = document.querySelector('.nav-sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('nav-sidebar-open');
    const isOpen = sidebar.classList.contains('nav-sidebar-open');
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.style.display = isOpen ? 'none' : 'block'; // Hide hamburger when sidebar opens
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('nav-sidebar-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.style.display = 'block'; // Show hamburger when sidebar closes
});

document.querySelectorAll('.nav-sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('nav-sidebar-open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.style.display = 'block'; // Show hamburger when sidebar closes
    });
});