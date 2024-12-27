const slider = document.getElementById('slider');
const restoredImage = document.querySelector('.restored');

slider.addEventListener('input', (e) => {
  const sliderValue = e.target.value;
  restoredImage.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`;
});
