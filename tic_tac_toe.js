    //    Conditions for win :- 123,456,789,147,159,258,357,369 
var flag =true;

window.addEventListener('load',aman);

function aman(){
    document.getElementById('btn1').addEventListener('click',AandP);
    document.getElementById('btn2').addEventListener('click',AandP);
    document.getElementById('btn3').addEventListener('click',AandP);
    document.getElementById('btn4').addEventListener('click',AandP);
    document.getElementById('btn5').addEventListener('click',AandP);
    document.getElementById('btn6').addEventListener('click',AandP);
    document.getElementById('btn7').addEventListener('click',AandP);
    document.getElementById('btn8').addEventListener('click',AandP);
    document.getElementById('btn9').addEventListener('click',AandP);
}

function AandP(){
    if(this.innerText==''){
        if(flag==true){
            this.innerText='A';
        }else{
            this.innerText='P';
        }
        checkWinOrLoose();
        flag = !flag;
    }
}

function checkWinOrLoose(){
    winOrLoose('btn1','btn2','btn3');
    winOrLoose('btn4','btn5','btn6');
    winOrLoose('btn7','btn8','btn9');
    winOrLoose('btn1','btn4','btn7');
    winOrLoose('btn2','btn5','btn8');
    winOrLoose('btn3','btn6','btn9');
    winOrLoose('btn1','btn5','btn9');
    winOrLoose('btn3','btn5','btn7');
}

function winOrLoose(first,second,third){

    console.log('check');
    if(document.getElementById(first).innerText!= ''
    && document.getElementById(second).innerText!= '' 
    && document.getElementById(third).innerText !=''){

        if(document.getElementById(first).innerText==document.getElementById(second).innerText 
        && document.getElementById(first).innerText==document.getElementById(third).innerText){
            setTimeout(function(){
                alert("Congratulation the Game is Over and "+document.getElementById(first).innerText+' player is Winner');
                clearAll();
            },20); 
        }
    }
}

function clearAll(){
    document.getElementById('btn1').innerText = '';
    document.getElementById('btn2').innerText = '';
    document.getElementById('btn3').innerText = '';
    document.getElementById('btn4').innerText = '';
    document.getElementById('btn5').innerText = '';
    document.getElementById('btn6').innerText = '';
    document.getElementById('btn7').innerText = '';
    document.getElementById('btn8').innerText = '';
    document.getElementById('btn9').innerText = '';
}

reset.addEventListener('click',() =>{
       clearAll();
    })