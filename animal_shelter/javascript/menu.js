document.addEventListener('DOMContentLoaded', function() {
    const sidenavToggle = document.getElementById('sidenavToggle');
    const sidenav = document.getElementById('sidenav');
    const closeBtn = document.querySelector('.closebtn');
    const body = document.body;

    function openNav() {
        sidenav.style.right = '0';
        body.classList.add('sidenav-open');
    }

    function closeNav() {
        sidenav.style.right = '-250px';
        body.classList.remove('sidenav-open');
    }

    if (sidenavToggle) {
        sidenavToggle.addEventListener('click', openNav);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeNav);
    }

    // Handle dropdown menus
    const dropdowns = document.querySelectorAll('.sidenav .dropdown > a');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            e.preventDefault();
            this.parentElement.classList.toggle('active');
        });
    });

    // Close sidenav when clicking outside
    document.addEventListener('click', function(e) {
        if (body.classList.contains('sidenav-open') && !sidenav.contains(e.target) && e.target !== sidenavToggle) {
            closeNav();
        }
    });

    // Close sidenav when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && body.classList.contains('sidenav-open')) {
            closeNav();
        }
    });
});