// Select all elements with the class .pro
const pros = document.querySelectorAll('.pro');

// Function to add event listeners to each .pro element
pros.forEach((pro) => {
  const overlay = pro.querySelector('.overlay');
  // Select the cart element
  const cart = pro.querySelector('.cart');

  pro.addEventListener('mousemove', function (e) {
    // Check if the mousemove event is triggered by the cart element
    if (e.target === cart || cart.contains(e.target)) {
      // If the event is triggered by the cart element, reset the styles
      overlay.style.opacity = '0';
      pro.style.transform = 'perspective(2000px) rotateY(0deg) rotateX(0deg)';
    } else {
      // Otherwise, apply the animation
      const { offsetX, offsetY } = e;

      const rotateY = calculateRotateY(offsetX);
      const rotateX = calculateRotateX(offsetY);

      overlay.style.backgroundPosition = `${calculateBackgroundPosition(offsetX, offsetY)}%`;
      overlay.style.opacity = calculateOpacity(offsetX);

      pro.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  });

  pro.addEventListener('mouseout', function () {
    overlay.style.opacity = '0';
    pro.style.transform = 'perspective(2000px) rotateY(0deg) rotateX(0deg)';
  });
});

function calculateRotateY(x) {
  return (-1 / 5) * x + 40;
}

function calculateRotateX(y) {
  return (4 / 30) * y - 40;
}

function calculateBackgroundPosition(x, y) {
  return x / 5 + y / 5;
}

function calculateOpacity(x) {
  return x / 500;
}
