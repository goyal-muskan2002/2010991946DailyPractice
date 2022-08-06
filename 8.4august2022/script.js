function f2click(){
    let n1=document.getElementById("text1").value;
    var sum=0;
    for(var i =0; i<=n1; i++){
        if(i%2==0){
          sum =sum+i;
        }
    }
    document.getElementById("p1").innerHTML=sum;
}
function f3click(){
    let l1=document.getElementById("l1").value;
    let r1=document.getElementById("r1").value;
    let k1=document.getElementById("k1").value;
    l1=Number(l1);
    r1=Number(r1);
    k1=Number(k1);
    if(r1<l1){
        alert("enter the no. in r1 which is greater than l1");
    }
    var count=0;
    for(var i=l1; i<=r1; i++){
        if(i%k1==0){
            count++;
         
        }
    }
    document.getElementById("p2").innerHTML=count;
}
function f4click(){
    let day;
    switch(new Date().getDay()){
        case 0:
        day="sunday";
        break;
        case 1:
        day="monday";
        break;
        case 2:
        day="tuesday";
        break;
        case 3:
        day="wednesday";
        break'
        case 4:
        day="thursday";
        break;
        case 5:
            day="friday";
    }
    document.getElementById("p3").innerHTML=day;
    
}