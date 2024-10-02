// modal window

    document.querySelector('.menu-btn').addEventListener('click', function() {
        document.querySelector('.modal-show').classList.toggle('show');
    });

// modal window================================================================


// scroll-up===================================================================

document.getElementById('scrollToTop').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// scroll-up===================================================================