// const dropArea = document.querySelector('.drag-area');
// const filesElements = document.querySelector('.modal__content-purchase-returns-files');

// let file;
// const button = dropArea.querySelector('button');
// const input = dropArea.querySelector('input');

// const showFile = (fileName, fileSize) => {
//   const fileElement = `
//   <div class="modal__content-purchase-returns-files-file load-file">
//     <div class="modal__content-purchase-returns-files-file-desc">
//       <div class="modal__content-purchase-returns-files-file-desc-name">
//         ${fileName}
//         </div>
//         <div class="modal__content-purchase-returns-files-file-desc-size">
//           ${fileSize}
//         </div>
//       </div>
//     <button type="button" class="modal__content-purchase-returns-files-file-del"></button>
//   </div>
//   `;
//   filesElements.innerHTML += fileElement;
// };

// const renderShowFile = () => {
//   let fileSize = file.size;
//   let fileName = file.name;

//   if (fileName.length >= 20) {
//     const splitName = fileName.split('.');
//     fileName = `${splitName[0].substring(0, 20)}... .${splitName[1]}`;
//   }

//   if (fileSize / 1000 < 1024) {
//     fileSize = `${(fileSize / 1000).toFixed(2)} kb`;
//   } else {
//     fileSize = `${(fileSize / (1024 * 1024)).toFixed(2)} mb`;
//   }

//   showFile(fileName, fileSize);
// };

// button.addEventListener('click', () => {
//   input.click();
// });

// input.addEventListener('change', function () {
//   file = this.files[0];
//   renderShowFile(file);
// });

// dropArea.addEventListener('dragover', (event) => {
//   event.preventDefault();
//   dropArea.classList.add('active');
// });

// dropArea.addEventListener('dragleave', () => {
//   dropArea.classList.remove('active');
// });

// dropArea.addEventListener('drop', (event) => {
//   event.preventDefault();
//   dropArea.classList.remove('active');
//   file = event.dataTransfer.files[0];

//   renderShowFile(file);
// });

const button = $('.drag-area').find('button');
const input = $('.drag-area').find('input');

button.on('click', () => input.click());

$('.drag-area').on('dragover', function (event) {
  event.preventDefault();
  $(this).addClass('active');
});

$('.drag-area').on('dragleave', function () {
  $(this).removeClass('active');
});

$('.drag-area').on('drop', function (event) {
  event.preventDefault();
  $(this).removeClass('active');
});
