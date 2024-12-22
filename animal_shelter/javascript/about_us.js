document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.stat-number');
    
    const animateStats = () => {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const count = +stat.innerText;
            const speed = 200; // Lower is faster
            
            if(count < target) {
                stat.innerText = Math.ceil(count + target / speed);
                setTimeout(animateStats, 1);
            } else {
                stat.innerText = target;
            }
        });
    };

    animateStats();
});