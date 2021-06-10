var a=prompt("enter first number")
var b=prompt("enter second number")

function setup() {
var button=createButton("click here to swap")
button.mousePressed(Swap)
}
function draw() {

}
function Swap (){
[a,b]=[b,a]
console.log("a="+a)
console.log("b="+b)
}