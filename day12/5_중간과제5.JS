/*
[ 문제1 ] 아래 배열을 이용한 아래 출력 형식으로 구현하기
    1. 영화이름 목록 , 영화이름과 영화평점은 같은 인덱스 사용한다.
        -  movieNames = ['히든페이스' , '위키드' , '글래디에이터2' , '청설' ]
    2. 영화 평점 목록 , 각 영화별 평점은 10점 만점
    - movieRating = [8,4,7,6]
    3. HTML 예시
    히든페이스            ★★★★★★★★☆☆
    위키드               ★★★★☆☆☆☆☆☆
    글래디에이터2         ★★★★★★★☆☆☆
    청설                 ★★★★★★☆☆☆☆

    */
let movieNames = ['히든페이스' , '위키드' , '글래디에이터2' , '청설' ]
let movieRating = [8,4,7,6]


let outHTML = '';

for (let index = 0; index <= movieNames.length - 1; index++) {


    outHTML += `<div>${movieNames[index]}`  
    let pointHTML = `       ` 
    for (let point = 1; point <= 10; point++) {
        if (point <= movieRating[index]) { pointHTML += `★` } 
        else { pointHTML += `☆` } 
    }

    outHTML += `${pointHTML}</div>`;
    console.log(outHTML);
} 
document.write(outHTML)

/*
[ 문제2 ] 6개 시트/좌석 이 존재하는 좌석 상태 출력하시오.
1. 좌석은 총 6개 , 빈좌석인지 예약석인지는 임의로 배열 구성
2. 아래와 같이 좌석을 출력한다.
3. 빈좌석이면 blue 색상 표기, 예약석이면 red색상 표기
4. HTML예시
    빈좌석 예약석
    예약석 빈좌석
    예약석 빈좌석
*/
let html = `<div>`;
let seet = [0, 1, 1, 0, 1, 0];

for (let index = 0; index <= seet.length - 1; index++) {
    if (index % 2 == 0) {
        html += `<br>`

    }

    if (seet[index] == 0) {
        html += `<span class="seet0" style="color:blue">빈좌석 </span>`
    
    }
    else {
        html += `<span class="seet1" style="color:red">예약석 </span>`
    }

}



html += `</div>`
document.write(html)



