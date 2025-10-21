const gallery = {
  doors: [
    'images/door-19.jpg',
    'images/door-20.jpg',
    'images/door-40.jpg',
    'images/door-48.jpg',
    'images/door-57.jpg',
    'images/door-61.jpg',
    'images/door-63.jpg',
    'images/door-64.jpg',
    'images/door-66.jpg',
    'images/door-60.jpg',
    'images/door-52.jpg',
    'images/door-53.jpg',
    'images/door-54.jpg',
    'images/door-49.jpg',
    'images/door-7.jpg',
    'images/door-37.jpg',
    'images/door-38.jpg'
  ],
  bedrooms: [
    'images/door-13.jpg',
    'images/door-15.jpg',
    'images/door-27.jpg',
    'images/door-56.jpg',
    'images/door-51.jpg',
    'images/door-67.jpg',
    'images/door-68.jpg'
  ],
  stairs: ['images/door-9.jpg', 'images/door-12.jpg', 'images/door-26.jpg']
}

function showImages (category) {
  const container = document.getElementById('galleryContainer')
  container.innerHTML = ''
  gallery[category].forEach(src => {
    const img = document.createElement('img')
    img.src = src + '?w=600'
    img.alt = category
    container.appendChild(img)
  })
  activateImageClick()
}

function activateImageClick () {
  document.querySelectorAll('#galleryContainer img').forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'block'
      modalImg.src = img.src
    })
  })
}

const modal = document.getElementById('imageModal')
const modalImg = document.getElementById('modalImg')
const span = document.getElementsByClassName('close')[0]

document.getElementById('categorySelect').addEventListener('change', e => {
  showImages(e.target.value)
})

showImages('doors')

span.onclick = () => (modal.style.display = 'none')
modal.onclick = e => {
  if (e.target === modal) modal.style.display = 'none'
}
