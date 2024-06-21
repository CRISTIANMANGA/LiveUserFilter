document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('searchInput');
    const userList = document.getElementById('userList');

    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        const userItems = userList.getElementsByClassName('userItem');
        
        Array.from(userItems).forEach(function(userItem) {
            const userName = userItem.getElementsByClassName('userName')[0].textContent.toLowerCase();
            const userDescription = userItem.getElementsByClassName('userDescription')[0].textContent.toLowerCase();

            if (userName.includes(filter) || userDescription.includes(filter)) {
                userItem.style.display = '';
            } else {
                userItem.style.display = 'none';
            }
        });
    });
});
