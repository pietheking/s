function generateRandNum(){
    let possibleContents={
        capital:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        small:"abcdefghijklmnopqrstuvwxyz",
        num:[0,1,2,3,4,5,6,7,8,9],
        specialCharc:"!#$%'\"&()*+,-./:;<=>?@[\]^_`{|}~"
    }
     function randoCap(){return Math.floor(Math.random()*26)}
     function randoSma(){return Math.floor(Math.random()*26)}
     function randoNum(){return Math.floor(Math.random()*10)}
   function  randospecialCha(){return Math.floor(Math.random()*31)}
    function randoArr(){return Math.floor(Math.random()*4)}
   function getLength(){
     let length=Math.floor(Math.random()*29)
    if(length<14){
      return length+14
    }
     else {return length}
      }
  let num=getLength()
   let arr=["capital","small","num","specialCharc"]
  let password=" "
  let randoAr=0
  for(let i=0;i<num;i++){
  randoAr=randoArr();
    if (arr[randoAr]==="capital"){
      password+=possibleContents["capital"][randoCap()]
    }
     if (arr[randoAr]==="small"){
      password+=possibleContents["small"][randoSma()]
    }
     if (arr[randoAr]==="num"){
      password+=possibleContents["num"][randoNum()]
    }  
     if (arr[randoAr]==="specialCharc"){
      password+=possibleContents["specialCharc"][randospecialCha()]
    } 
}
return password
} 
  let p1=document.getElementById("p1")
  let p2=document.getElementById("p2")
  let p3=document.getElementById("p3")
  let p4=document.getElementById("p4")

let generatePasswordButt=document.getElementById("Generate-password")
generatePasswordButt.addEventListener("click",
function generatePassword(){
  p1.value=generateRandNum()
  p2.value=generateRandNum()
  p3.value=generateRandNum()
  p4.value=generateRandNum()
})
function copy1() {
  p1.select();
  document.execCommand("copy")
}
function copy2() {
  p2.select();
  document.execCommand("copy")
}
function copy3() {
  p3.select();
  document.execCommand("copy")
}
function copy4() {
  p4.select();
  document.execCommand("copy")
}