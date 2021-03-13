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
const onModalIsClosed = (evt) => {
     lightboxImage.src = ''; 
    lightbox.classList.remove('is-open');
     
}

closeButton.addEventListener('click', onModalIsClosed);

galleryList.addEventListener('click', onImageClick);

const onByEscButtonClose = (evt) => {
    evt.preventDefault();
    if (evt.keyCode == 27) {
        lightboxImage.src = '';
        lightbox.classList.remove('is-open');
    }
}

window.addEventListener('keydown', onByEscButtonClose);

const onSlideToLeft = (evt) => {
    evt.preventDefault();
    if (evt.keyCode == 37) {
        const currentImageIndex = pictures
            .findIndex((image) => image.original === lightboxImage.src);
        console.log(currentImageIndex);
        if (currentImageIndex > 0) {
                lightboxImage.src = pictures[currentImageIndex - 1].original;
        console.log('left');  
        }
  
    }
};

const onSlideToRight = (evt) => {
    evt.preventDefault();
    if (evt.keyCode == 39) {
        const currentImageIndex = pictures
            .findIndex((image) => image.original === lightboxImage.src);
        console.log(currentImageIndex);
        if (currentImageIndex < pictures.length - 1) {
            lightboxImage.src = pictures[currentImageIndex + 1].original;
        console.log('right');
        }        
    } 
};

// const onSlideToLeft = (evt) => {
//     evt.preventDefault();
//     if (evt.keyCode === 37) {
//         pictures.map((image, idx) => {            
//             if (image.original === lightboxImage.src && idx !== 0) {
//                 console.log(idx);
//                 lightboxImage.src = pictures[idx - 1].original;
//             }
//         });
//     }
// };

// const onSlideToRight = (evt) => {
//     evt.preventDefault();
//     if (evt.keyCode === 39) {
//         pictures.map((image, idx) => {
//             if (image.original === lightboxImage.src && idx !== pictures.length - 1) {
//                 console.log(idx);
//                 lightboxImage.src = pictures[idx + 1].original;
//             }
//         });
//     }
// };

window.addEventListener('keydown', onSlideToRight);
window.addEventListener('keydown', onSlideToLeft);

//37 - Left 39 - rigth