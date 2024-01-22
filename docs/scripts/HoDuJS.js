// 이미지 목록
const images = [
    '../docs/media/images/image1.JPG',
    '../docs/media/images/image2.JPG',
    '../docs/media/images/image3.JPG',
    '../docs/media/images/image4.JPG',
    '../docs/media/images/image5.JPG',
    '../docs/media/images/image6.JPG',
    '../docs/media/images/image7.JPG',
    '../docs/media/images/image8.JPG',
    '../docs/media/images/image9.JPG',
    '../docs/media/images/image10.PNG',
    '../docs/media/images/image11.JPG',
    '../docs/media/images/image12.JPG',
    '../docs/media/images/image13.JPG',
    '../docs/media/images/image14.JPG',
    '../docs/media/images/image15.JPG',
    '../docs/media/images/image16.JPG',
    '../docs/media/images/image17.PNG',
    '../docs/media/images/image18.JPG',
    '../docs/media/images/image19.JPG',
    '../docs/media/images/image20.JPG',
    '../docs/media/images/image21.JPG',
    '../docs/media/images/image22.JPG',
    '../docs/media/images/image23.JPG',
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

let mapContainer = document.getElementById('map');
let mapOption = {
    center: new kakao.maps.LatLng(37.212968837804944, 126.97307994037904),
    level: 3
};
let map = new kakao.maps.Map(mapContainer, mapOption);

const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("subscribepleaseeeeee");
const closeModalBtn = document.getElementById("close-modal");

// 모달창 열기
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // 스크롤바 제거
});

// 모달창 닫기
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // 스크롤바 보이기
});


const toTopButton = document.getElementById("to-top-button");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}

toTopButton.addEventListener("click", function () {
    document.body.scrollTop = 0; // Safari 브라우저를 위함
    document.documentElement.scrollTop = 0; // 기타 브라우저를 위함
});

