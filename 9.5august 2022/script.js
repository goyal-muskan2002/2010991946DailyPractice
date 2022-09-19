function fnclick(){
    document.getElementById("teen").style.borderRadius = "300px";
}
function myFunction(p1,p2){
    var a=p1*p2;
    document.getElementById("demo").innerHTML=a;
}
console.log(q);
var q=3;
console.log(q);
console.log(f1(3));
function f1(q){
return q*q*q;
}

function totalCount() {
    var count = 0;
    function increaseCount() {
    count++;
    }
    increaseCount();
    increaseCount();
    increaseCount();
    return count;
   }
   console.log(totalCount()); 
  var arr=[1,2,3,4,5];
//    var arr=new arr(1,2,3,4,5,6,7,8);
  
    console.log(arr[1]);
    var object={
        key1:"muskan",
        key2:1234,
        key3:"goyal",
        key4:2345
    }
    // var i=0;
    // for ( i in object){
    //    console.log(object[i]);
    // }
    object.key1="tashu";
    for ( i in object){
        console.log(object[i]);
     }
     function greet(name){
        console.log("hello world"+name);
     }
//    clearTimeout(greet,  1000, "muskan");
   setInterval(greet, 5000, "muskan");