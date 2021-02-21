import items from "./gallery-items.js"

const refs = {
    gallery: document.querySelector('.js-gallery'),
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

