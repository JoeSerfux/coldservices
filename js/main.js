  // Function to check screen width and toggle HTML structure
  function toggleHTMLStructure() {
    var largeSection = document.getElementById('store-large');
    var smallSection = document.getElementById('store-small');
    
    // Check if screen width is less than 965px
    if (window.innerWidth < 965) {
        largeSection.style.display = 'none';
        smallSection.style.display = 'block';
    } else {
        largeSection.style.display = 'block';
        smallSection.style.display = 'none';
    }
}

// Initial call to toggle HTML structure based on initial screen width
toggleHTMLStructure();

// Event listener to toggle HTML structure on window resize
window.addEventListener('resize', toggleHTMLStructure);


// MENU BAR

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('open');
        menuBtn.querySelector('i').classList.toggle('bx-menu');
        menuBtn.querySelector('i').classList.toggle('bx-x');
    });
});

// HEADER BACKGROUND

window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollPosition = window.scrollY;
  
    // Add scrolled class to header when scrolled down, remove it when at the top
    if (scrollPosition > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
