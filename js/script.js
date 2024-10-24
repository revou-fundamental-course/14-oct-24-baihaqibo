// Ini Javascript

function submitForm() {
  const name = document.getElementById('name').value.trim();
  const dob = document.getElementById('dob').value;
  const gender = document.getElementById('gender').value;
  const message = document.getElementById('message').value.trim();

  if (!name || !dob || !gender || !message) {
      alert('Harap lengkapi semua field!');
      return;
  }

  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = `
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Tanggal Lahir:</strong> ${dob}</p>
      <p><strong>Jenis Kelamin:</strong> ${gender}</p>
      <p><strong>Pesan:</strong> ${message}</p>
  `;

  // Kosongkan form setelah mengirim
  document.getElementById('inputForm').reset();
}

let indexSlide = 0;
nextSlide(1);

function nextSlide(n) {
  showSlide(indexSlide += n);
}

function showSlide(n) {
  let listImage = document.getElementsByClassName('photo-banner');

  if (n > listImage.length - 1) {
    indexSlide = 0;
  }

  if (n < 0) {
    indexSlide = listImage.length - 1;
  }

  let index = 0;
  while(index < listImage.length) {
    listImage[index].style.display = 'none';
    index++;
  }

  listImage[indexSlide].style.display = 'block';
  console.log(listImage);
  console.log(n);
}

// setInterval(() => nextSlide(1), 2000);