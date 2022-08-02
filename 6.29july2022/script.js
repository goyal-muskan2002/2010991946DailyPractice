var a="abss";
var b;
var c= a*b;
document.write(c);
document.write(typeof(c));
if(""){
    document.write("true");
}
else{
    document.write("false");
}
function printall(){
    for(var i =0; i<arguments.length; i++){
        document.write(arguments[i]);
    }
    

}
printall("mango", 10);
printall("mango" , "10", 10);
 function print(p,q,r){
  document.write(p*q*r/100);
 }
 print(10,20);