// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission feedback
document.querySelector('#contact-form')?.addEventListener('submit', function (e) {
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields.');
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        e.preventDefault();
        alert('Please enter a valid email address.');
        return;
    }

    // Formspree handles submission, this is just UX feedback
    setTimeout(() => {
        alert('Message sent successfully! I’ll respond soon.');
        this.reset();
    }, 500);
});

// Back to top button
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