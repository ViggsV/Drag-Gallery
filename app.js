// Get references to the DOM elements we will be working with
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

// Initialize a flag to track dragging state
let isDragging = false;

// Set the isDragging flag to false when the mouse button is pressed down on the gallery
gallery.addEventListener('mousedown', () => {
  isDragging = false;
});

// Set the isDragging flag to true when the mouse is moved over the gallery
gallery.addEventListener('mousemove', () => {
  isDragging = true;
});

// Set the isDragging flag to false when the mouse button is released on the gallery, after a small delay
gallery.addEventListener('mouseup', () => {
  setTimeout(() => {
    isDragging = false;
  }, 50);
});

// Handle click events on the gallery
gallery.addEventListener('click', (e) => {
  // If the clicked element is an image and the user is not dragging
  if (e.target.tagName === 'IMG' && !isDragging) {
    // Show the modal
    modal.style.display = 'block';
    // Set the modal image source to the clicked image source
    modalImage.src = e.target.src;
  }
});

// Handle click events on the close button
closeBtn.addEventListener('click', () => {
  // Hide the modal
  modal.style.display = 'none';
});

// Handle click events on the modal
modal.addEventListener('click', (e) => {
  // If the clicked element is the modal or the close button
  if (e.target === modal || e.target === closeBtn) {
    // Hide the modal
    modal.style.display = 'none';
  }
});
