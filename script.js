let currentIndex = 0;

function moveToSlide(index) {
  const items = document.querySelectorAll('.carousel-item');
  const carousel = document.querySelector('.carousel');
  const totalItems = items.length;

  if (index < 0 || index >= totalItems) return;

  items[currentIndex].classList.remove('active');
  currentIndex = index;
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}vw)`;
  items[currentIndex].classList.add('active');
  updateActiveDot();
}

function updateActiveDot() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

function autoSlide() {
  const items = document.querySelectorAll('.carousel-item');
  currentIndex = (currentIndex + 1) % items.length;
  moveToSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.carousel-item');
  if (items.length > 0) items[0].classList.add('active');
  updateActiveDot();
  setInterval(autoSlide, 5000);
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your message has been sent. Thank you!');
    this.reset();
  });
  
  function subscribe() {
    const email = document.getElementById('subscribe-email').value;
    if (email) {
      alert(`Subscribed with ${email}`);
      document.getElementById('subscribe-email').value = '';
    } else {
      alert('Please enter an email address to subscribe.');
    }
  }
  
