function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

function addButtonPressAnimation(button) {
    button.classList.add('button-press');
    setTimeout(() => {
        button.classList.remove('button-press');
    }, 200);
}

document.getElementById('homeButton').addEventListener('click', function() {
    showSection('homepage');
});

document.getElementById('aboutButton').addEventListener('click', function() {
    showSection('about');
});

document.getElementById('projectsButton').addEventListener('click', function() {
    showSection('projects');
});

document.getElementById('contactButton').addEventListener('click', function() {
    showSection('contact');
});

document.getElementById('cvButton').addEventListener('click', function() {
    showSection('cv');
});

document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
            alert('Message sent successfully!');
        } else {
            alert('Failed to send message.');
        }
    } catch (error) {
        alert('Error sending message.');
    }
});