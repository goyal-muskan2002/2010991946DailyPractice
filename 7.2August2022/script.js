
function fnclick(){
    // alert("hi, how are you");
    // document.getElementById("p1").innerHtml="Hello";
    // var n1="5";
    // var n2="6";
    var n1=document.getElementById("n1").value;
    var n2= document.getElementById("n2").value;
    if(!isNaN(n1) && !isNaN(n2)){
        n1=Number(n1);
        n2=Number(n2);
        document.getElementById("p1").innerHTML=n1+n2;
    
    }
    else{
        document.getElementById("p1").innerHTML="<span style='color:red'>Please enter numeric value.</span>"
      }
    
  
}
function f2click(){
    let n1=document.getElementById("n1").value;
    if(n1 % 2 == 0){
        document.getElementById("p2").innerHTML="even number";

    }
    else{
        document.getElementById("p2").innerHTML="odd number";
    }
    // document.getElementById("p2").innerHTML=Boolean(10>9);
}
function f3click(){
    var flag=true;
    let n3= document.getElementById("n3").value;
    for(var i=2; i<n3; i++ ){
        if(n3 % i == 0){
            flag=false;
            break;
           
        }
    }
    if(flag==true)
    {
        document.getElementById("p3").innerHTML=" prime number" ;
    }

 else{
    document.getElementById("p3").innerHTML="not a prime number" ;
 }
      
    }
    
function team(){
    let totalballs= document.getElementById("balls").value;


}