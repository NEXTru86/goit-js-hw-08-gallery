import items from "./gallery-items.js"

const refs = {
    gallery: document.querySelector('.js-gallery'),
    background: document.querySelector('.js-lightbox'),
    backgroundImg: document.querySelector('.lightbox__image'),
    closeLightBoxBtn: document.querySelector('button[data-action="close-lightbox"]'),
    lightBoxOverlay: document.querySelector('.lightbox__overlay'),
};

const createImegeItem = item => {
    const itemRef = document.createElement('li');
    itemRef.classList.add('gallery__item');

    const linkRef = document.createElement('a');
    linkRef.classList.add('gallery__link');
    linkRef.href = item.original;

    const imgRef = document.createElement('img');
    imgRef.classList.add('gallery__image');
    imgRef.src = item.preview;
    imgRef.alt = item.description;
    imgRef.setAttribute('data-source', item.original);


    itemRef.appendChild(linkRef);
    linkRef.appendChild(imgRef);
    
    return itemRef;
}

const createGallery = items.map(item => createImegeItem(item));
refs.gallery.append(...createGallery);

refs.gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();

    const imageRef = event.target;
  
    if (imageRef.nodeName !== 'IMG') {
        return;
    };

    refs.background.classList.add('is-open');
    refs.backgroundImg.src = imageRef.dataset.source;
    refs.backgroundImg.alt = imageRef.alt;
};

refs.closeLightBoxBtn.addEventListener('click', onCloseLightBox);
refs.lightBoxOverlay.addEventListener('click', onCloseLightBox);
window.addEventListener('keydown', onCloseLightBox);

function onCloseLightBox(event) {
    refs.background.classList.remove('is-open');
    refs.backgroundImg.src = '';
    refs.backgroundImg.alt = '';

    if (event.code === 'Escape') {
        refs.background.classList.remove('is-open');
        refs.backgroundImg.src = '';
        refs.backgroundImg.alt = '';
    };
};

