/*
    중간과제9 : 기계식 주차장 시스템 구현
        [요구사항]
        1. 주차할 수 있는 총 차량 대수는 20대입니다.
        2. 차량번호와 주차할 위치를 클릭/입력 받아 [입차] 버튼을 클릭한다.
            단] 해당 위치에 입차된 차량이 존재하면 '입차불가' 안내 출력 아니면 '입차성공'안내 출력
            3. 차량번호를 입력받아 [출차] 버튼 클릭한다.
                단] 출차되는 차량의 위치와 금액(주차료)를 안내 출력
                단] 금액은 1초당 100원 계산, 하루가 지나지 않는 조건
        ======================================================================================
        [개발순서]
        1. 프론트 html 구성
        2. js 메모리 구성 (배열/변수/csv)
        3. 함수 구성 (함수명, 실행조건, 매개변수 판단)
        4. 각 함수별 기능 구현, 코드 작성
        5. 각 함수별 기능 구현 후 HTML (onclick)연동
*/
let carInfo = [];


//function outCar(){

function outCar(index) {
  console.log('outCar 실행'); console.log(index);

  let board = carInfo[index];
  let info = board.split(',')


  document.querySelector('.carLocation').innerHTML = info[0];
  document.querySelector('.carNumber').innerHTML = info[1];
  document.querySelector('.inCarTime').innerHTML = info[2];
  document.querySelector('.deleteBox').innerHTML = `
                                  <button onclick="outCar(${index})" type="button">출차</button> `

}

function inCar() {
  let carLocation = document.querySelector(".carLocation").value;
  let carNum = document.querySelector("#carNumber").value;

  if (carLocation === "none" || carNum === "") {
    alert("주차 자리와 차량 번호를 모두 입력해주세요!");
    return;
  }

  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let time = `${hours}:${minutes}:${seconds}`

  let board = `${carLocation}, ${carNum}, ${time}`;
  carInfo.push(board);
  console.log(carInfo);

}

function searchCar() {

  let tbody = document.querySelector('div');
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let time = `${hours}:${minutes}:${seconds}`

  let html = ''
  let price=''

  for (let index = 0; index <= carInfo.length - 1; index++) {
    let board = carInfo[index];


    let carlist = board.split(',')
    console.log(carInfo)
    html += `<h1>출차</h1>주차 위치 : <span class="carLocation">${carlist[0]}</span> <br />
        차량 번호 : <input type="text" class="carNumber" placeholder='${carlist[1]}'> </span>
        <hr />
        입차 시간 : <span class="inCarTime">${carlist[2]} </span><br/>
        출차 시간 : <span class="outCarTime"> ${time} </span>
        <hr />
        주차료(금액) : <span class="price">${price}</span>
        <div class="deleteBox">
        <button onclick="outCar(${index})" onclick="outCar"type="button">출차</button>
 `;

  }

  tbody.innerHTML = html;
}



