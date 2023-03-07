//랜덤숫자 만들기
//1부터100까지
//유저번호 > 정답번호 UP
//유저번호 < 정답번호 DOWN
//유저번호 == 정답번호 맞춤
//도전버튼 누를떄마다 기회한번씩 없어짐
//리셋버튼 누르면 기회5번 정답번호 리셋
//1보다 작거나 100이상시 다시 입력, 기회는 안깍짐
//같은번호 시 안깍짐

let computernum;
let usernumber=document.getElementById("user-number")
let gobut=document.getElementById("goButton")
let resetbut=document.getElementById("reset-Button")
let resultte=document.getElementById("result")
let chancesarea = document.getElementById("chances")
let historyarea = document.getElementById("history-area")
let chance=5;
let gameover=false;
let history=[];


gobut.addEventListener("click",play)
resetbut.addEventListener("click",reset)
usernumber.addEventListener("focus",function(){usernumber.value=""})


function random(){
    computernum=Math.floor(Math.random()*100)+1
    console.log("conputer",computernum)
}
random()



function play() {    
    if(usernumber.value < computernum){
        resultte.textContent="정답숫자보다 작습니다."
    } else if(usernumber.value > computernum){
        resultte.textContent="정답숫자보다 큽니다."
    } else {
        resultte.textContent="정답입니다."
        gameover=true;
    }3
3
    if(usernumber.value <1 || usernumber.value >100){
        resultte.textContent="1과 100사이로 입력해주세요"
        return;
    }

    
    console.log("usernumber",usernumber.value)
    if(history.includes(usernumber.value)){
        resultte.textContent="입력했던 숫자입니다 다시 입력해주세요."
        return;
    }
    history.push(usernumber.value)
  
    console.log("history",history)


    chance --;
    
    if(chance<1){
        gameover=true;
    }
    if(gameover== true){
        gobut.disabled=true
    }

    chancesarea.textContent=`남은기회:${chance}`
    historyarea.textContent=`${history}`

}

function reset(){
    gameover=false;
    chance=5;
    gobut.disabled=false;
    random()
    resultte.textContent="결과값입니다."
    chancesarea.textContent=`남은기회:${chance}`
    historyarea.textContent="했던 숫자들"
    history=[];
}







