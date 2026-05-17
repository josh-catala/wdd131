const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImg = modal.querySelector('img');
const closeButton = modal.querySelector('.close-modal');
const menu = document.querySelector('.hide')
const btn = document.querySelector('.menu-btn')

btn.addEventListener('click', () => {
    menu.classList.toggle('show');
});


gallery.addEventListener('click', openModal);

function openModal(e) {
    console.log(e.target);
    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    
    modalImg.src = src
    modalImg.alt = alt;

    modal.showModal();
}

closeButton.addEventListener('click', () => {
    modal.close();
})

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});