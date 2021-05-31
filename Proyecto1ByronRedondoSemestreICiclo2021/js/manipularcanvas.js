var canvas=null, ctx=null, x=0, y=60, minY=5, maxY=60, speedY=1, direction=1, img;     

window.requestAnimationFrame=(
        function(){
            return window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationRame ||
            function(callback){
                window.setTimeout(callback,17);
            }
        }()
);

function paint(ctx){
    ctx.fillStyle='#FFF';
    ctx.fillRect(0,0,canvas.width, canvas.height);

     ctx.drawImage(img,x,y);

} // paint

function update(){
    // update
    y += speedY * direction;
    // keep "x" inside min & max
    if(y<minY){ y=minY; direction*=-1; }
    if(y>maxY){ y=maxY; direction*=-1; }
}

function run(){
    window.requestAnimationFrame(run);
    update();
    paint(ctx);
}

function init(){
    canvas=document.getElementById('canvas');
    ctx=canvas.getContext('2d');
    img=new Image();
    img.src="img/sol1.png";
    run();
}

window.addEventListener('load', init, false);