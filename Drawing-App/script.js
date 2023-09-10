
var canvas= document.getElementById('canvas');
var plus= document.getElementById('increase');
var minus= document.getElementById('decrease');
var size = document.getElementById('size');
var colorVal = document.getElementById('colorVal');
var ctx = canvas.getContext('2d');
var blushColor = 'black';
var blushSize =5;
//Update Size while clikc button 
function UpdateSize(){
    size.textContent = 'size :'+ blushSize;  
}

//increase size event
plus.addEventListener('click',(e)=>{
    blushSize += 1;
    UpdateSize()
})

    //decrease size event
minus.addEventListener('click',(e)=>{
    if(blushSize > 1){
        blushSize -= 1;
    }
    UpdateSize()
})
//Update Color

colorVal.addEventListener('input',function(){
    blushColor = this.value;
    console.log(blushColor)
})
var isPressing = false;

//Make canvas Event
canvas.addEventListener('mousedown',function(e){
    isPressing=true;
    ctx.strokeStyle=blushColor;
    ctx.lineWidth = blushSize;
    ctx.beginPath();
    ctx.moveTo(e.clientX/1.8 - canvas.getBoundingClientRect().left,e.clientY/1.8 - canvas.getBoundingClientRect().top);   
})

canvas.addEventListener('mousemove',(e)=>{
    if(isPressing){
        ctx.lineTo(e.clientX/1.8 - canvas.getBoundingClientRect().left,e.clientY/1.8 - canvas.getBoundingClientRect().top);
        ctx.stroke();   
    }
})

//remove path

canvas.addEventListener('mouseup',function(){
    isPressing= false;
    ctx.closePath();

})
//leave event

canvas.addEventListener('mouseleave',function(){
    ctx.closePath();
    isPressing= false;
})

document.getElementById('remove').addEventListener('click',function(){
   
    ctx.clearRect(0,0,canvas.width,canvas.height);
})