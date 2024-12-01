let personList = ["1,유재석,2002-10-15","2,강호동,1998-05-06","3,신동엽,2010-07-12","4,김영희,1995-02-02"];
let personScore = ["1,2024,80,90","1,2023,100,20","2,2024,30,70",
    "3,2022,100,100","3,2023,70,50","3,2024,90,100",
    "4,2023,70,80","4,2024,80,90",
];
function newJoin(){ console.log('등록함수 실행')
    let id = document.querySelector('#id').value; //console.log(id);
    let name = document.querySelector('#name').value; //console.log(name);
    let birth = document.querySelector('#birth').value; //console.log(birth);

    let board = `${id},${name},${birth}`

    personList.push(board);
    //console.log(personList);

    print();

}

// 출력함수
function print(){
    let tbody = document.querySelector('table > tbody')
    let html = ''
    for(let index = 0; index <= personList.length -1; index++){
        let board = personList[index];
        let info = board.split(',')
        html += `<tr>
                    <td> ${info[0]} </td>
                    <td> ${info[1]} </td>
                    <td> ${info[2]} </td>
                </tr>`
        }
    tbody.innerHTML = html;
}
function newScore(){
    console.log('newScore()실행')
    let 사번 = document.querySelector('#personid').value;
    let 년도 = document.querySelector('#personyear').value;
    let 상반기점수 = document.querySelector('#person1score').value;
    let 하반기점수 = document.querySelector('#person2score').value;
    
   board = `${사번},${년도},${상반기점수},${하반기점수}`;
   personScore.push(board);

   console.log(personScore)

}
function search() {
    let content = document.querySelector("#scoreBox > table > tbody");
    let id = document.querySelector("#inputIDNumber");
    // console.log(id.value);
    // content.innerHTML = `<thead><tr><th>년도</th><th>상반기</th><th>하반기</th></tr></thead><tbody>`;
    content.innerHTML = ``;
    for(let i = 0; i < personScore.length; i++) {
        let yearScore = personScore[i];
        // console.log(yearScore);
        yearScore = yearScore.split(",");
        // console.log(yearScore);
        if(id.value == yearScore[0]) {
            content.innerHTML += `<tr>
            <td style = "text-align : center;">${yearScore[1]}</td>
            <td style = "text-align : center;">${yearScore[2]}</td>
            <td style = "text-align : center;">${yearScore[3]}</td>
            </tr>`;
        }
    }
    if(content.innerHTML == "") {
        alert("없는 사번입니다.");
    }
 }