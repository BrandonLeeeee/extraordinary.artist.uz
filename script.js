// Get the modal element
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

// Image upload input
const imageUpload = document.getElementById('imageUpload');
imageUpload.addEventListener('change', (e) => {
    handleImageUpload(e.target.files);
});

// Handle image upload
function handleImageUpload(files) {
    const reader = new FileReader();
    reader.onload = function (e) {
        const image = document.createElement('img');
        image.src = e.target.result;
        image.alt = 'Uploaded Image';
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image');
        imageContainer.appendChild(image);
        document.getElementById('gallery').appendChild(imageContainer);
        image.addEventListener('click', openModal);
    };
    reader.readAsDataURL(files[0]);
}

// Open modal
function openModal() {
    modal.style.display = 'block';
    modalImage.src = this.src;
}

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Click outside the modal to close
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Event listener for images in the gallery
const images = document.querySelectorAll('.image img');
images.forEach((image) => {
    image.addEventListener('click', openModal);
});
