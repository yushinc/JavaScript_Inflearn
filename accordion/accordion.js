window.onload = () => { // 코드가 모두 로드된 후 스크립트 코드 실행
    
    // panel-faq-container
    const panelFaqContainer = document.querySelectorAll('.panel-faq-container'); // 해당 클래스 명을 가진 document 들을 모두 선택
    console.log(panelFaqContainer); // panelFaqContainer는 객체 배열 형식

    // panel-faq-answer
    let panelFaqAnswer = document.querySelectorAll('.panel-faq-answer');

    // btn-all-close
    const btnAllClose = document.getElementById('btn-all-close');


    // 반복문 순회하며 해당 FAQ 제목 클릭 시 콜백 처리

    for (let i = 0; i < panelFaqContainer.length; i++) {
        panelFaqContainer[i].addEventListener('click', function() {
            // 클릭 시 처리할 일: 제목 클릭 시 본문 보이게 -> active 클래스 추가
            // this.classList.add('active'); 작성 시 (this = panel-faq-container)
            // panel-faq-answer에 active 클래스를 추가하는 것이 아니라 panel-faq-container에 추가하게됨

            panelFaqAnswer[i].classList.add('active');
        });
    }

    btnAllClose.addEventListener('click', function() {
        // 버튼 클릭 시 처리할 일 : active 클래스가 추가된 panel-faq-answer에서 active 클래스 모두 삭제
        for (let i = 0; i < panelFaqAnswer.length; i++) {
            panelFaqAnswer[i].classList.remove('active');
        }
    });  

    
}
