// print selected images...

window.addEventListener('load',()=>{
    let section = document.querySelector('#section1');
    let img = section.querySelectorAll('.img');
    let currentImg = section.querySelector('.current-img')

    for(let i = 0; i<img.length;i++)
    img[i].onclick = (e) =>{
        currentImg.src = e.target.src
    // }  쓸대없는 반복문은 필요가없음 메모리적인 측면에서도 바뀐 코드가 밑
    }
})


window.addEventListener('load',()=>{
    let section = document.querySelector('#section1');
    let Img = section.querySelector('.IMG');
    let current= section.querySelector('.current-img');

    Img.onclick = (e) => {
        if(e.target.nodeName != 'IMG') return;
        current.src = e.target.src;
    }
})

window.addEventListener('load',()=>{
    let section = document.querySelector('#section1-1');
    let delClass = section.querySelector('.Delete');

    delClass.onclick = (e) => {
        if(e.target.nodeName != 'INPUT') return;
       let Delete = e.target.parentElement.parentElement;
       Delete.remove()
    }
})

window.addEventListener('load',()=>{
    let section = document.querySelector('#section3');
    let imgList = section.querySelector('.img-list');
    let addBtn = section.querySelector('.add-button')
    let current = section.querySelector('.current-img');

    imgList.onclick =(e) =>{
        if(e.target.nodeName != 'IMG') return;
        current.src = e.target.src;
    };
    addBtn.onclick = (e) =>{
        e.stopPropagation();
        let image = document.createElement('img')
        image.src ="images/img1.jpg"
        current.insertAdjacentElement("afterend",image)
    }
})
window.addEventListener('load',()=>{
    let section = document.querySelector('#section3');
    let imgList = section.querySelector('.img-list');
    let addBtn = section.querySelector('.add-button');
    let current = section.querySelector('.current-img');

    imgList.onclick = (e) => {
        if(e.target.nodeName != 'IMG') return;
        current.src = e.target.src
    };
    
    addBtn.onclick = (e) =>{
        e.stopPropagation()
        let img = document.createElement('img');
        img.src = 'images/img1.jpg';
        current.insertAdjacentElement("afterend", img)
    }
})

window.addEventListener('load',()=>{
    let section = document.querySelector('#section4');
    let tbody = section.querySelector('.notice tbody');

    tbody.onclick = (e) => {
        e.preventDefault()
        let target = e.target;
        if(target.nodeName != 'INPUT')
        return;

        if(target.classList.contains('sel_btn')){
            let tr = target.parentElement;
            for(; tr.nodeName != 'TR'; tr=tr.parentElement);
          if(target.value ==='선택'){
            tr.style.background = 'skyblue';
            target.value = '해제'
          }else{
              target.value = '선택'
              tr.style.background= 'white';
          }
        }
        else if(target.classList.contains('edit_btn')){

        }
        else if(target.classList.contains('del_btn')){

        }
          
    }
})