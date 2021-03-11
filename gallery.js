import pictures from './gallery-items.js';

const createGalleryMarkup = images => {
    const markup = images.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join('');
    return markup;
};
const galleryMarkup = createGalleryMarkup(pictures);
const galleryList = document.querySelector('.js-gallery');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = document.querySelector('.js-lightbox');

const onImageClick = (evt) => {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    else {
        lightbox.classList.add('is-open');
        lightboxImage.src = evt.target.dataset.source;
    }
};

const closeButton = document.querySelector('button[data-action="close-lightbox"]');
const lightboxImage = document.querySelector('img.lightbox__image');
const onCloseButtonClick = (evt) => {
    console.log(evt.target);
     lightboxImage.src = ''; 
    lightbox.classList.remove('is-open');
     
}

closeButton.addEventListener('click', onCloseButtonClick);

galleryList.addEventListener('click', onImageClick);