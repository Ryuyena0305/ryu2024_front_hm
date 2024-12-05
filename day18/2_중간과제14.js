let 도서목록 = [
    { 도서번호: 1, 도서명: '소년이 온다', 저자: '한강', 출판사: '창비' },
    { 도서번호: 2, 도서명: '파과', 저자: '구병모', 출판사: '위즈덤하우스' },
    { 도서번호: 3, 도서명: '종의 기원', 저자: '정유정', 출판사: '은행나무' }
]

let 재고목록 = [
    { 도서번호: 1, 도서개수: 1, 입고날짜: '2024-05-12' },
    { 도서번호: 2, 도서개수: 2, 입고날짜: '2024-04-12' },
    { 도서번호: 3, 도서개수: 3, 입고날짜: '2024-03-12' }
]

function 도서출력() {

    //1. 어디에
    let tbody = document.querySelector('.도서테이블');

    //2. 무엇을
    let html = '';
    //사원목록내 모든 사원정보를 HTML로 구성하기
    for (let index = 0; index <= 도서목록.length - 1; index++) {
        let info = 도서목록[index];
        html += `<tr>
                    <td> ${ info.도서명 }</td>
                    <td> ${ info.저자 } </td>
                    <td> ${ info.출판사 } </td>
                    <td> 
                        <button onclick="도서수정(${info.도서번호})" type="button" >수정</button>
                        <button onclick ="도서삭제(${info.도서번호})" type="button">삭제</butoon>
                    </td>
                </tr>`
    }

    //3. 출력
    tbody.innerHTML = html


}

let eno=4;
function 도서등록() {
   let name = document.querySelector('#bookName').value;
   let com = document.querySelector('#bookCom').value;
   let wri = document.querySelector('#bookWri').value;

   let 도서 ={
    도서번호 :eno, 
    도서명 : name,
    저자 : wri,
    출판사 : com,
}
   도서목록.push(도서);
   eno++;
   alert('도서가 등록되었습니다.');
   console.log(도서목록)
   도서출력();

}

function 도서수정(클릭된도서번호) {
    let 검색도서 = null;
    for(let index =0;index<=도서목록.length-1;index++){

        let info=도서목록[index];

        if(info.도서번호 == 클릭된도서번호){
            검색도서 = info;
            break;
        }
       
    }
    if(검색도서==null){
        alert('검색도서가 없습니다.');
    
    }
    
    let div = document.querySelector('#도서수정');
    console.log(div);
  
    let html = `<h3>도서 수정 </h3>
        <form>
            <h5>수정도서번호 : ${검색도서.도서번호}</h5>
            도서명 : <input type="text" class="changeName" value="${검색도서.도서명}" style="margin: 5px;"/><br>
            출판사 : <input type="text" class="changeCom"value="${검색도서.출판사}" style="margin: 5px;"/><br>
            저자 : <input type="text" class ="changeWri"value="${검색도서.저자}" style="margin: 5px;"/></br>
            <button type="button" onclick="도서수정2(${검색도서.도서번호})" style = "  background-color: black;
    color: #ffff;
    border: 3px solid black;
    margin-left : 165px;
    margin-top: 10px;">수정</button>

        </form>`;
    

    div.innerHTML = html
    도서출력();
return;
   

}
function 도서수정2(클릭된도서번호){
    let changeName=document.querySelector('.changeName').value;
    let changeCom=document.querySelector('.changeCom').value;
    let changeWri=document.querySelector('.changeWri').value;

    let 수정도서 ={
        도서번호 :클릭된도서번호, 
        도서명 : changeName,
        저자 : changeWri,
        출판사 : changeCom,
    }
    for(let index =0;index<=도서목록.length-1;index++){
        if(도서목록[index].도서번호==클릭된도서번호){
            도서목록[index]=수정도서;
            break;
        }
    }
    도서출력();

}

function 도서삭제(삭제할도서번호) {
    for(let index = 0; index<=도서목록.length-1;index++){
        if(도서목록[index].도서번호 == 삭제할도서번호){
           
                도서목록.splice(index,1)
                break; 

        }
    }

    도서출력();
    return;
   
}

/**************************************************************************************************** */
  
function 재고출력() {

    let tbody = document.querySelector('.재고테이블');

    let html = '';

    for (let index = 0; index <= 재고목록.length - 1; index++) {
        let info = 재고목록[index];
        html += `<tr>
                    <td> ${ info.도서번호 }</td>
                    <td> ${ info.도서개수 } </td>
                    <td> ${ info.입고날짜 } </td>
                    <td> 
                        <button onclick="재고수정(${info.도서번호})" type="button" >수정</button>
                        <button onclick ="재고삭제(${info.도서번호})" type="button">삭제</butoon>
                    </td>
                </tr>`
    }
    tbody.innerHTML = html

}

function 재고등록() {
    let number = document.querySelector('#bookNum').value;
    let count = document.querySelector('#bookCount').value;
    let day = document.querySelector('#bookDay').value;
 
    let 재고 ={
     도서번호 :number, 
     도서개수 : count,
     입고날짜 : day,
 }
    재고목록.push(재고);
    alert('도서의 재고가 등록되었습니다.');
    console.log(재고목록)
    재고출력();
 
 }
 
 function 재고수정(도서번호) {
    let 재고정보 = null;
    for(let index =0;index<=재고목록.length-1;index++){

        let info=재고목록[index];
        if(info.도서번호 == 도서번호){
            재고정보 = info;
            break;
        }
       
    }
    if(재고정보==null){
        alert('검색도서가 없습니다.');
       
    }
    
    let div = document.querySelector('#재고수정');
    console.log(div);


    let html =  `
    <h3>재고 수정</h3>
    <form>
    <div>
        도서개수 <input id="bookCount" type="text" value="${재고정보.도서개수}" /><br/>
        입고날짜 <input id="bookDay" type="text" value="${재고정보.입고날짜}" /><br/>
        <button onclick="재고수정2(${재고정보.도서번호})" type="button" style="  background-color: black;
    color: #ffff;
    border: 3px solid black;
    margin-left : 165px;
    margin-top: 10px;">재고수정</button>
    </div>
        </form>`;
        console.log(html)

    div.innerHTML = html
    재고출력();

   

}
function 재고수정2(클릭된도서번호){
    let bookNum=document.querySelector('.bookNum').value;
    let bookCount=document.querySelector('.bookCount').value;
    let bookDay=document.querySelector('.bookDay').value;

    let 수정도서 ={
        도서번호 : bookNum,
        도서개수 : bookCount,
        입고날짜 : bookDay
    }
    for(let index =0;index<=도서목록.length-1;index++){
        if(재고목록[index].도서번호==클릭된도서번호){
            재고목록[index]=수정도서;
            break;
        }
    }
    재고출력();

    

}
function 재고삭제(삭제재고목록){
    for( let index = 0; index <= 재고목록.length-1; index++){
        if(재고목록[index].도서번호 == 삭제재고목록){
            재고목록.splice(index, 1);
            break;
        }
    }
    재고출력();
}

