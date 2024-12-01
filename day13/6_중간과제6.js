/*
    주제 : 미니 웹페이지 가계부
        1. 가계부 정보(항목) : 1. 날짜 2. 항목명 .3. 금액
        2. 등록된 모든 정보들을 출력
        3. HTML출력 예시

        날짜        항목       금액
        2024-11-26  콜라        2000
        2024-11-27  커피        1200
*/

/*  [생각 1]시각적으로 보이는 목표의 데이터 구성을 어떻게 해야
        변수 = 하나의 자료를 저장하는 메모리 공간,
        배열= 여러개의 자료를 저장하는 하나의 타입,
        1. 날짜 데이터 여러개 저장,
            let 날짜배열 =[ '2024-11-26','2024-11-26','2024-11-26']
        2. 항목 데이터 여러개 저장
            let 항목배열 = ['콜라','커피']
        3. 금액 데이터 여러개 저장
            let 금액배열 = [2000,1500]
        4. 배열 선언 위치 : 전역변수(JS내 1번 선언) vs 지역변수() : 지역이 실행될 때 마다 선언
        5. 서로 다른 배열간의 인덱스가 동일하면 하나의 가계부 정보
            날짜배열[0] = '2024-11-26'
            항목배열[0] = '콜라'
            금액배열[0] = '1000'

    [생각 2] 제작할 기능/함수 몇개 필요한지 구성/처리할 로직
        1. [등록]버튼 클릭시 input으로 입력받은 3개의 값을 각 배열에 저장하는 함수
        2. 등록[배열 push]시 현재 배열의 요소(값)들을 출력하는 함수

    [생각 3] 등록함수에서 실행할 로직???
        1. 입력 / 저장                      pormpt vs *document.querySelector()*
        2. 처리 : 입력된 정보를 배열에 추가   배열명.push()
        3. 출력 : 출력함수 호출로 대체

    [생각 4] 출력함수에서 실행할 로직???
        1. 어디에
        2. 무엇을                           배열순회해서 모든 배열내 요소(값)들 html
        3. 출력



*/
//[1] 전역변수
let 날짜배열 =[ '2024-11-26','2024-11-26','2024-11-26']
let 항목배열 = ['콜라','커피']
let 금액배열 = [2000,1500]

//[2] 등록함수 정의, 실행조건 : [등록]버튼을 클릭했을 때
function 등록함수(){
    console.log('등록함수 실행');
    //1. 입력/저장
    let dateInput = document.querySelector('.dateInput')
    //html에 'dateInput' 이라는 class명을 가진 마크업을 JS DOM객체 호출/반환
    let date = dateInput.value; //DOM객체는 마크업의 value 속성 값을 호출/반환


    let itemInput = document.querySelector('.itemInput')
    let item = itemInput.value; 


    let priceInput = document.querySelector('.priceInput')
    let price = priceInput.value; 

    //2. 처리 , 입력받은 값들을 각 배열에 저장
    날짜배열.push(date);
    항목배열.push(item);
    금액배열.push(price);
    //3. 출력

    출력함수();//등록이후 출력함수 호출
    console.log(날짜배열)


}

//[3] 출력함수 정의, 실행조건 : 배열에(push) 했을 때
function 출력함수(){console.log('출력함수 실행')
    //1.어디에  테이블에<table>
    let table = document.querySelector('table')
    //2.무엇을
    let html =''//출력할 HTML 구성 변수
    for(let index = 0;index<=날짜배열.length-1;index++){
        //index는 0부터 마지막인덱스까지 1씩 증가하면서 반복
        html += ` <tr>
                        <td>${날짜배열[index]}</td>
                        <td>${항목배열[index]}</td>
                        <td>${금액배열[index]}</td>
                    </tr>`//+= 누적합계(기존데이터에 문자열 연결)
    }                   //각 index 번째의 날짜/항목/금액을 각 <td>에 문자열로 구성
    //3.출력, DOM객체의 innerHTML 속성/필드를 이용해 구성한 html 대입해서 출력한다.
    table.innerHTML = html;



    
}