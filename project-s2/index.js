function fnClick(){
           
    var  n=document.getElementById('number').value;
    n=(Number)(n);
    var sum=0;
    var count=0;
    while(n>0){
        rem=n%10;
        sum=sum+rem;
        n=Math.floor(n/10);
        count++;
    }
    if(count>5 || count<5){
        alert("Please enter only 5 numbers");
    }
    else{
        var radius=(Math.floor(sum/5));
    }

    document.getElementById('p').style.height=sum+"px";
    document.getElementById('p').style.width=sum+"px";
    document.getElementById('p').style.backgroundColor="red";
    document.getElementById('p').style.transition="all 4s";
    document.getElementById('p').style.animation="my 4s";
    document.getElementById('p').style.borderRadius=radius+"px";

}