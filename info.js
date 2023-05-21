const profileImg = document.getElementById('profileImg');
const textElement = document.querySelector('.profile_img p');

profileImg.addEventListener('dragover', (event) => {
  event.preventDefault();
  profileImg.classList.add('dragover');
});

profileImg.addEventListener('dragleave', () => {
  profileImg.classList.remove('dragover');
});

profileImg.addEventListener('drop', (event) => {
  event.preventDefault();
  profileImg.classList.remove('dragover');

  const file = event.dataTransfer.files[0];

  if (file.type.startsWith('image/')) {
    console.log('Dropped image:', file);
    displayDroppedImage(file);
    // clearText();
  } else {
    alert('Invalid file type.');
  }
});

function displayDroppedImage(file) {
  const reader = new FileReader();

  reader.onload = function (event) {
    const fileContent = event.target.result;
    const image = new Image();

    image.onload = function () {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const profileImgSize = Math.min(profileImg.offsetWidth, profileImg.offsetHeight);

      canvas.width = profileImgSize;
      canvas.height = profileImgSize;

      context.drawImage(image, 0, 0, profileImgSize, profileImgSize);

      profileImg.innerHTML = '';
      profileImg.appendChild(canvas);
    };

    image.src = fileContent;
  };

  reader.readAsDataURL(file);
}

// function clearText() {
//   textElement.textContent = '';
// }


document.getElementById('myForm').addEventListener('submit', function (event) {
  
    // Get all input elements
    const inputs = document.querySelectorAll('#myForm input');
  
    // Validate and process each input value
    let isFormValid = true;
    inputs.forEach((input) => {
      const inputValue = input.value.trim();
  
      if (inputValue === '') {
        isFormValid = false;
        input.classList.add('error');
        showAlert(input.placeholder);
      } else {
        input.classList.remove('error');
        console.log('Input value:', inputValue);
      }
  
      // Clear the input value
      input.value = '';
    });
  
    // Submit the form if all inputs are valid
    if (isFormValid) {
      this.submit();
    }
  });
  
  function showAlert(inputName) {
    alert(`Please enter a value for ${inputName}.`);
  }
  