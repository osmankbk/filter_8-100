( () => {
const buttons = document.querySelectorAll('.filter-btn');
const searchBox = document.querySelector('#search-item');
const storeItems = document.querySelectorAll('.store-item');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = e.target.dataset.filter.toLowerCase();
        storeItems.forEach(item => {
            if(filter === 'all'){
                item.style.display = 'block'
            } else {
                if(item.classList.contains(filter)){
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        })
    })
});

searchBox.addEventListener('keydown', (e) => {
    const filterSearch = e.target.value.toLowerCase();
    storeItems.forEach(item => {
        if(item.textContent.includes(filterSearch)){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
})
})();