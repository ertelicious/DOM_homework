const btn1 = document.querySelector('.btn-1');
const colorInput = document.querySelector('#color');

// для reset
const originalBackgroundColor = window.getComputedStyle(document.body).backgroundColor;
const resetButton = document.querySelector('.btn-reset')

// для работы с placeholder
const originalPlaceholder = 'Insert RGB, HEX, HSL and more';



// функции
function changeBackgroundColor () {
  document.body.style.backgroundColor = colorInput.value;
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = originalBackgroundColor;
  colorInput.value = '';
  colorInput.setAttribute('placeholder', originalPlaceholder);
}



//слушатели событий
btn1.addEventListener('click', changeBackgroundColor);

colorInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') changeBackgroundColor();
}); 

colorInput.addEventListener('focus', () => {
  colorInput.removeAttribute('placeholder');
}); // очистка поля для placeholder'a в фокусе

colorInput.addEventListener('blur', () => {
  if (!colorInput.value) {
    colorInput.setAttribute('placeholder', originalPlaceholder);
  }
}); // когда инпут не в фокусе

resetButton.addEventListener('click', resetBackgroundColor); // reset




