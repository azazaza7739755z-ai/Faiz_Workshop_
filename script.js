const gallery = {
  doors: [
    'images/door-1.jpg',
    'images/door-2.jpg',
    'images/door-3.jpg',
    'images/door-4.jpg',
    'images/door-5.jpg',
    'images/door-6.jpg',
    'images/door-7.jpg',
    'images/door-8.jpg',
    'images/door-9.jpg',
    'images/door-10.jpg',
    'images/door-11.jpg',
    'images/door-12.jpg',
    'images/door-13.jpg',
    'images/door-14.jpg',
    'images/door-15.jpg',
    'images/door-16.jpg',
    'images/door-17.jpg',
    'images/door-18.jpg', 
    'images/door-19.jpg', 
    'images/door-20.jpg', 
    'images/door-21.jpg',
    'images/door-22.jpg',
    'images/door-23.jpg',
    'images/door-24.jpg',
    'images/door-25.jpg',
    'images/door-26.jpg',
    'images/door-27.jpg',
    'images/door-28.jpg',
    'images/door-29.jpg',
    'images/door-30.jpg',
    'images/door-31.jpg',
    'images/door-32.jpg',
    'images/door-33.jpg',
    'images/door-34.jpg',
    'images/door-35.jpg',
    'images/door-36.jpg',
    'images/door-37.jpg',
    'images/door-38.jpg',
    'images/door-39.jpg',
    'images/door-40.jpg',
    'images/door-41.jpg',
    'images/door-42.jpg',
    'images/door-43.jpg',
    'images/door-44.jpg',
    'images/door-45.jpg',
    'images/door-46.jpg',
    'images/door-47.jpg',
    'images/door-48.jpg',
    'images/door-49.jpg',
    'images/door-50.jpg'
  ],
  bedrooms: [
    'images/door-206.jpg',
    'images/door-207.jpg',
    'images/door-208.jpg',
    'images/door-209.jpg',
    'images/door-210.jpg',
    'images/door-211.jpg',
    'images/door-212.jpg',
    'images/door-200.jpg',
    'images/door-201.jpg',
    'images/door-202.jpg',
    'images/door-203.jpg',
    'images/door-204.jpg',
    'images/door-205.jpg',
    'images/door-213.jpg',
    'images/door-214.jpg',
    'images/door-215.jpg'
  ],
  stairs: [
    'images/door-500.jpg', 
    'images/door-501.jpg', 
    'images/door-502.jpg',
    'images/door-503.jpg', 
    'images/door-504.jpg'
  ]
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
