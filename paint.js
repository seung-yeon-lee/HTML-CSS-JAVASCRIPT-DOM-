window.addEventListener('load',()=>{
    const canvas = document.getElementById('jsCanvas');
    const ctx = canvas.getContext('2d');
    const jsColor = document.getElementsByClassName('jsColor')
    const range = document.getElementById('jsRange')
    const mode = document.getElementById('jsMode');
    const saveBtn = document.getElementById('jsSave')
    const reSet = document.querySelector('.reset')

    reSet.addEventListener('click',()=>{
        location.href='picture.html'
    })

    const init_color = '#2c2c2c';

    canvas.width= 700;
    canvas.height= 600;

    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,700,650)
    ctx.strokeStyle = init_color
    ctx.fillStyle = init_color
    ctx.lineWidth= 2.5;
    let filling = false;
    let painting = false;

    function stopPainting(){
        painting = false;
    }
    function startPainting(){
        painting = true;
    }
    function onMouseMove(e){
        const x = e.offsetX;
        const y = e.offsetY;
        if(!painting){
            ctx.beginPath()  //path = line
            ctx.moveTo(x,y)
        }else{
            ctx.lineTo(x,y)
            ctx.stroke()
        }
    }
    function changeColor(e){
        const color = e.target.style.backgroundColor;
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
    };
    Array.from(jsColor).forEach(change => change.addEventListener('click', changeColor))

    function changeRange(e){
        const range = e.target.value;
        ctx.lineWidth = range;
    };

    function changeMode(){
        if(filling === true){
            filling= false;
            mode.innerText = 'BackColor'
        }else{
            filling = true;
            mode.innerText = 'Pen';
           
        }
    }
    if(mode){
        mode.addEventListener('click', changeMode)
    };

    function canvasClick(){
        if(filling){
        ctx.fillRect(0,0,700,650)
     }
    };
    function saveClick(){
        const image = canvas.toDataURL('image/jpeg');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'Paint JavaScript'
        link.click()
    }

    if(canvas){
        canvas.addEventListener('mousemove',onMouseMove); //움직일 시
        canvas.addEventListener('mousedown',startPainting); // 클릭시
        canvas.addEventListener('mouseup', stopPainting); //클릭하지 않을 시
        canvas.addEventListener('mouseleave',stopPainting) //캔버스를 벗어날 시
        canvas.addEventListener('click', canvasClick)
    }
    if(range){
       range.addEventListener('input', changeRange)
    };

    if(saveBtn){
        saveBtn.addEventListener('click', saveClick)
    }

    
   
})
