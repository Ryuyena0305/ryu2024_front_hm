/*
    중간과제7 : 회원가입 과 로그인 구현 페이지 구현하기
    [요구사항] 
    1. (회원가입 구역 에서 ) 아이디 와 비밀번호를 입력받아 회원가입 처리 해주세요.
    2. (로그인 구역 에서 ) 아이디 와 비밀번호가 회원가입에 등록된 데이터정보와 일치하면 '로그인 성공' 아니면 '로그인실패' 출력해주세요.
    [제출]
    강의 카카오톡방에 ip 링크 제출
 */

let login_list = ["bear0305,1234"]

let html = ''



function 등록함수() {
    console.log('등록함수 실행');
    let idInput = document.querySelector('.input_id');
    let id = idInput.value;
    let pwInput = document.querySelector('.input_pw');
    let pw = pwInput.value;


    let board = `${id},${pw}`

    login_list.push(board);
    console.log(login_list)


}
function 출력함수() {
    let idlogInput = document.querySelector('.log_id');
    let checkLogId = idlogInput.value;
    let pwlogInput = document.querySelector('.log_pw');
    let checkLogPw = pwlogInput.value;

 let logSuccess = false;

    for (let index = 0; index < login_list.length; index++) {

        let [id, pw] = login_list[index].split(",");
        
        if (checkLogId === id && checkLogPw === pw) {
            logSuccess = true;
            break;  
        }
    }


    if (logSuccess) {
        document.write("<h1>로그인 성공</h1>");
    } else {
        document.write("<h1>로그인 실패</h1>");
    }

} 