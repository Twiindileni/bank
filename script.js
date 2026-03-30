document.addEventListener('DOMContentLoaded', () => {
    // Update time in status bar
    const timeElement = document.querySelector('.time');
    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}`;
    }
    
    // Initial update and set interval
    updateTime();
    setInterval(updateTime, 60000);

    // Add ripple effect or active state to nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Redirect for Private Client account
    const privateClientCard = document.getElementById('private-client-account');
    if (privateClientCard) {
        privateClientCard.addEventListener('click', () => {
            window.location.href = 'account_details.html';
        });
    }

    // Simple interaction for other account cards
    const accountCards = document.querySelectorAll('.account-card:not(#private-client-account)');
    accountCards.forEach(card => {
        card.addEventListener('mousedown', () => {
            card.style.transform = 'scale(0.98)';
            card.style.transition = 'transform 0.1s ease';
        });
        card.addEventListener('mouseup', () => {
            card.style.transform = 'scale(1)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
        
        card.addEventListener('click', () => {
            const name = card.querySelector('.account-name').textContent;
            console.log(`Navigating to ${name}...`);
            // Here you could mock a navigation transition
        });
    });

    // Add Account button interaction
    const addAccountBtn = document.querySelector('.add-account');
    if (addAccountBtn) {
        addAccountBtn.addEventListener('click', () => {
            alert('This is a demo interface. Creating new accounts is disabled.');
        });
    }

    // Refresh button animation
    const refreshBtn = document.getElementById('refresh-btn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            refreshBtn.style.transform = 'rotate(360deg)';
            refreshBtn.style.transition = 'transform 0.5s ease-in-out';
            setTimeout(() => {
                refreshBtn.style.transform = 'rotate(0deg)';
                refreshBtn.style.transition = 'none';
            }, 500);
        });
    }
});
