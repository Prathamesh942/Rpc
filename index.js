const bot = document.getElementById('scoreb');
const you = document.getElementById('scorey');
const butn = document.querySelectorAll('button');
const res = document.getElementById('res');
const cont = document.getElementById('svg');
const reset = document.getElementById('reset');
const bchoice = document.getElementById('bchoice')
let userChoice; 
const lottiePlayer = document.getElementById('lottiePlayer');

const animItem = bodymovin.loadAnimation({
    wrapper: cont,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://lottie.host/2693cf92-baa7-471a-97c4-51399096b0e3/pEBSIc2mv3.json'
})

butn.forEach(btn => btn.addEventListener('click', (e) => {
    userChoice = e.target.id;
    runbot(userChoice);
    lottiePlayer.play();
}));

reset.addEventListener('click',()=>{
    you.innerHTML=0;
    bot.innerHTML=0;
    bchoice.innerHTML="";
    res.innerHTML="Let's go";
})

function runbot(ops){
    let yourscore = parseInt(you.innerHTML);
    let botscore = parseInt(bot.innerHTML);
    let result;
    let choice = Math.floor(Math.random()*3)+1;
    if(choice==1){
        bchoice.innerHTML="Computer chose Rock";
        if(ops=="Rock"){
            result="Draw";
        }else if(ops=="Paper"){
            result="You won";
            yourscore+=1;
        }else{
            result="You lose";
            botscore+=1;
        }
    }else if(choice==2){
        bchoice.innerHTML="Computer chose Paper";
        if(ops=="Paper"){
            result="Draw";
        }else if(ops=="Rock"){
            result="You lose";
            botscore+=1;
        }else{
            result="You won";
            yourscore+=1;
        }
    }else{
        bchoice.innerHTML="Computer chose Scissor";
        if(ops=="Rock"){
            result="You won";
            yourscore+=1;
        }else if(ops=="Paper"){
            result="You lose";
            botscore+=1;
        }else{
            result="Draw";
        }
    }
    if(result=="You won"){
        animItem.goToAndPlay(0,true);
    }
    you.innerHTML=yourscore;
    bot.innerHTML=botscore;
    res.innerHTML=result;
}
