// Get all sections
var sections = document.querySelectorAll('section');

// Add click event listener to each section
for (var i = 0; i < sections.length; i++) {
  sections[i].addEventListener('click', function() {
    // Toggle hide/show class on clicked section
    this.classList.toggle('hide');
    this.classList.toggle('show');
  });
}
