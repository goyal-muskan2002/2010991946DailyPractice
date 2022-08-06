function enter( ){
    var n= document.getElementById("number").value;
    n=Number(n);
    if(n.value>5){
       alert("enter a number which is of only 5 digits");
    }
    else{
        return true;
    }

}