// 이미지 목록
const images = [
  '../images/image1.JPG',
  '../images/image2.JPG',
  '../images/image3.JPG',
  '../images/image4.JPG',
  '../images/image5.JPG',
  '../images/image6.JPG',
  '../images/image7.JPG',
  '../images/image8.JPG',
  '../images/image9.JPG',
  '../images/image10.PNG',
  '../images/image11.JPG',
  '../images/image12.JPG',
  '../images/image13.JPG',
  '../images/image14.JPG',
  '../images/image15.JPG',
  '../images/image16.JPG',
  '../images/image17.PNG',
  '../images/image18.JPG',
  '../images/image19.JPG',
  '../images/image20.JPG',
  '../images/image21.JPG',
  '../images/image22.JPG',
  '../images/image23.JPG',

];

// 한 행에 보여줄 이미지 수
const imagesPerRow = 3;

// 한 번에 보여줄 이미지 수
const imagesPerLoad = imagesPerRow * 2;

// 현재까지 보여진 이미지 수
let visibleImages = imagesPerLoad;

// 페이지 로드 시 실행
window.onload = function () {
  showImages();

  // Show more 버튼 클릭 시 추가 이미지 보여주기
  document.getElementById('showMoreBtn').addEventListener('click', function () {
    visibleImages += imagesPerLoad;
    showImages();
  });
};

// 이미지 보여주는 함수
function showImages() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  // 각 행에 이미지 배치
  const rows = Math.ceil(visibleImages / imagesPerRow);
  for (let i = 0; i < rows; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'gallery-row';

    for (let j = 0; j < imagesPerRow; j++) {
      const index = i * imagesPerRow + j;
      if (index < visibleImages && index < images.length) {
        const img = document.createElement('img');
        img.src = images[index];
        img.alt = 'Image ' + (index + 1);

        const div = document.createElement('div');
        div.className = 'gallery-item';

        // 새로운 이미지 컨테이너에 이미지를 추가
        const imgContainer = document.createElement('div');
        imgContainer.appendChild(img);
        div.appendChild(imgContainer);

        rowDiv.appendChild(div);
      }
    }

    gallery.appendChild(rowDiv);
  }

  // Show more 버튼 보여주기 여부 결정
  const showMoreBtn = document.getElementById('showMoreBtn');
  if (visibleImages < images.length) {
    showMoreBtn.style.display = 'block';
  } else {
    showMoreBtn.style.display = 'none';
  }
}
