window.addEventListener('load', ()=>{
    let news = document.querySelector('#main-newsstand')
    let list = news.querySelectorAll('ul li')

    for(let i = 0; i<list.length; i++){
        list[i].onclick = (e) =>{
            console.log(e.target.src)
        }
    }
})