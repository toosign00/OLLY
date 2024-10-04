// 섹션 07의 페르소나 이미지 변경
let personaIcon01 = document.querySelector('#persona-icon-01'); // 페르소나 아이콘 01 요소
let personaIcon02 = document.querySelector('#persona-icon-02'); // 페르소나 아이콘 02 요소
let section07Img = document.querySelector('.section-07-img'); // 섹션 07 이미지 요소

// 초기 상태에서 personaIcon01에 active 클래스 추가
personaIcon01.classList.add('active');

const toggleActive = (target, other) => { // active 클래스를 토글하는 함수
    target.classList.add('active'); // target 요소에 active 클래스 추가
    other.classList.remove('active'); // other 요소에 active 클래스 제거
};

personaIcon01.addEventListener('click', () => { // personaIcon01을 클릭했을 때
    section07Img.src = '../image/persona-01.svg'; // 섹션 07 이미지를 페르소나 01 이미지로 변경
    toggleActive(personaIcon01, personaIcon02); // active 클래스 토글
});

personaIcon02.addEventListener('click', () => { // personaIcon02을 클릭했을 때
    section07Img.src = '../image/persona-02.svg'; // 섹션 07 이미지를 페르소나 02 이미지로 변경
    toggleActive(personaIcon02, personaIcon01); // active 클래스 토글
});




document.addEventListener('DOMContentLoaded', () => { // DOMContentLoaded 이벤트 리스너
    const loopWrapper = document.querySelector('.loop-wrapper'); // 루프 래퍼 요소
    const loopImgs = Array.from(loopWrapper.children); // 루프 래퍼의 자식 요소들을 배열로 변환

    // 이미지들을 두 번 반복해서 붙여서 끊김 없이 루프가 되도록 함
    loopImgs.forEach(img => loopWrapper.appendChild(img.cloneNode(true))); 

    let currentPosition = 0; // 현재 위치
    const speed = 2; // 속도 조절

    function animateLoop() { // 루프 애니메이션 함수
        currentPosition -= speed; // currentPosition을 speed만큼 감소
        if (currentPosition <= -loopWrapper.scrollWidth / 2) { 
            currentPosition = 0;
        }
        loopWrapper.style.transform = `translateX(${currentPosition}px)`; // currentPosition만큼 이동
        requestAnimationFrame(animateLoop); // 다음 프레임에서 animateLoop 함수 실행
    }

    animateLoop(); // animateLoop 함수 실행
});




let sliderImgContainer = document.querySelector('.slider-img-container');
let sliderBtns = document.querySelectorAll('.slider-btn');
let currentIndex = 0;


// 초기 상태에서 첫 번째 버튼에 active 클래스 추가
sliderBtns[0].classList.add('active');

// 4초마다 다음 이미지로 이동하는 함수
const moveToNextImage = () => { 
    currentIndex = (currentIndex + 1) % sliderBtns.length; // 다음 이미지의 인덱스 계산
    sliderImgContainer.style.transform = `translateX(-${currentIndex * 152}%)`; // 이미지 이동
    sliderBtns.forEach(btn => btn.classList.remove('active')); // 모든 버튼에서 active 클래스 제거
    sliderBtns[currentIndex].classList.add('active'); // 현재 이미지에 해당하는 버튼에 active 클래스 추가
}

// setInterval 반환 값을 저장할 변수
let intervalId; 

// 4초마다 moveToNextImage 함수 실행 
const startSlideInterval = () => { 
    intervalId = setInterval(moveToNextImage, 4000); 
}

// 초기 실행
startSlideInterval();

sliderBtns.forEach((btn, index) => { 
    btn.addEventListener('click', () => {
        // 기존의 setInterval 취소
        clearInterval(intervalId);

        currentIndex = index;
        sliderImgContainer.style.transform = `translateX(-${index * 152}%)`;
        sliderBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');

        // 새로운 setInterval 설정
        startSlideInterval();
    });
});

// 상남자는 슬라이더 플러그인 안쓰고 직접 만듬 반박시 상남자 아님
