window.addEventListener('load', () => {
    let txt1 = document.querySelector('.txt-1')
    let txt2 = document.querySelector('.txt-2')
    let btnAdd = document.querySelector('.btn-add')
    let txtSum = document.querySelector('.txt-sum')

    btnAdd.onclick = () => {
        let one = parseInt(txt1.value);
        let two = parseInt(txt2.value);

        txtSum.value = one + two;
    }

})

window.addEventListener('load', () => {
    let section2 = document.getElementById('example2')
    let inputs = section2.getElementsByTagName('input')
    let txt1 = inputs[0]
    let txt2 = inputs[1]
    let btnAdd = inputs[2]
    let txtSum = inputs[3]

    btnAdd.onclick = () => {
        let one = parseInt(txt1.value);
        let two = parseInt(txt2.value);

        txtSum.value = one - two;
    }

})

window.addEventListener('load', () => {
    let section = document.querySelector('#section4');
    let srcInput = section.querySelector('.src-input')
    let changeBtn = section.querySelector('.change-btn')
    let img = section.querySelector('.img')
    let imageSelect = section.querySelector('.img-select')

    changeBtn.onclick = () => {
        // img.src = "images/"+srcInput.value;
        img.src = "images/" + imageSelect.value
    }
})

window.addEventListener('load', () => {
    let section = document.querySelector('#section4');
    let changeBtn = section.querySelector('.change-btn');
    let img = section.querySelector('.img')
    let chageImg = section.querySelector('.img-select');
    let colorInput = section.querySelector('.color-input')


    changeBtn.onclick = () => {
        img.src = 'images/' + chageImg.value
        img.style.borderColor = colorInput.value
    }
})

window.addEventListener('load', () => {
    let section = document.querySelector('#section5');
    let titleInput = section.querySelector('.title_input');
    let menuUl = section.querySelector('.menu_list');
    let addBtn = section.querySelector('.add_btn');
    let delBtn = section.querySelector('.del_btn')

    addBtn.onclick = () => {
        let title = titleInput.value;
        let info = `<a href="">${title}</a>`;
        let li = document.createElement('li');
        li.innerHTML = info;
        menuUl.append(li)
    };
    delBtn.onclick = () => {
        let list = menuUl.children[0]
        list.remove()
    }
})
window.addEventListener('load', () => {
    const notices = [
        { id: 5, title: 'This is a Copy', regDate: "0000-00-000", wirterId: "torres", hit: 7 }
    ];
    let section = document.querySelector('#section7')
    let noticeList = section.querySelector('.notice_list');
    let tbody = noticeList.querySelector('tbody')
    let cloneBtn = section.querySelector('.clone_btn');
    let tempBtn = section.querySelector('.template_btn');
    let deleteBtn = section.querySelector('.delete_btn')

    cloneBtn.onclick = () => {
        let tr = noticeList.querySelector('tbody tr')
        let cloneNode = tr.cloneNode(true)
        let tds = cloneNode.querySelectorAll("td")
        tds[0].textContent = notices[0].id;
        tds[1].innerHTML = `<a href="">${notices[0].title}</a>`
        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].wirterId;
        tds[4].textContent = notices[0].hit;

        tbody.append(cloneNode)

    };
    tempBtn.onclick = () => {
        let template = section.querySelector('template')
        let cloneNode = document.importNode(template.content, true)
        let tds = cloneNode.querySelectorAll("td")
        tds[0].textContent = notices[0].id;
        tds[1].innerHTML = `<a href="">${notices[0].title}</a>`
        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].wirterId;
        tds[4].textContent = notices[0].hit;

        tbody.append(cloneNode)

    }
    deleteBtn.onclick = () => {
        let Del = tbody.children[0]
        Del.remove()
    }
})
// ex8
window.addEventListener('load', () => {
    let section = document.querySelector('#section8')
    let noticeList = section.querySelector('.notice_list');
    let upBtn = section.querySelector('.up_btn');
    let downBtn = section.querySelector('.down_btn');
    let tbodyNode = noticeList.querySelector('tbody');


    let current = tbodyNode.firstElementChild;

    downBtn.onclick = () => {
        let nextNode = current.nextElementSibling;

        if (nextNode == null) {
            alert('더 이상 이동할 수 없습니다');
            return;
        }
        current.insertAdjacentElement("beforebegin", nextNode)
        console.log(nextNode)
        // tbodyNode.insertBefore(nextNode, current)
    }
    upBtn.onclick = () => {
        let upNode = current.previousElementSibling;

        if (upNode == null) {
            alert('해당 게시물의 위치가 가장 최신입니다')
            return;
        } current.insertAdjacentElement("afterend", upNode)
        //  tbodyNode.insertBefore(current, upNode)

    }
})

window.addEventListener('load', () => {
    let section = document.querySelector('#section9');
    let noticeList = section.querySelector('.notice-list');
    let tbody = noticeList.querySelector('tbody');
    let checkBox = section.querySelector('.check_box');
    let delBtn = section.querySelector('.del_btn');
    let swapBtn = section.querySelector('.swap_btn');

    checkBox.onchange = () => {
        let inputs = tbody.querySelectorAll("input[type='checkbox']");
        for (let i = 0; i < inputs.length; i++)
            inputs[i].checked = checkBox.checked;
    };
    delBtn.onclick = () => {
        let selected = tbody.querySelectorAll("input[type='checkbox']:checked")
        for (let i = 0; i < selected.length; i++)
            selected[i].parentElement.parentElement.remove()

    }

    swapBtn.onclick = () => {
        let selected = tbody.querySelectorAll("input[type='checkbox']:checked")

        if (selected.length != 2) {
            alert('최대 2개까지만 선택 가능합니다')
            return
        }
        let trs = [];
        for (let i = 0; i < selected.length; i++)
            trs.push(selected[i].parentElement.parentElement)

        let cloneNode = trs[0].cloneNode(true)
        trs[1].replaceWith(cloneNode);
        trs[0].replaceWith(trs[1]);

    }
})


window.addEventListener('load', () => {

    const notices = [
        { id: 5, title: 'This is a Copy11', regDate: "0000-00-000", wirterId: "torres", hit: 7 },
        { id: 5, title: 'This is a Copy22', regDate: "0000-00-000", wirterId: "torres", hit: 7 },
        { id: 5, title: 'This is a Copy33', regDate: "0000-00-000", wirterId: "torres", hit: 7 },
    ];


    let section = document.querySelector('#section10');
    let noticeList = section.querySelector('.notice-list');
    let titleId = section.querySelector('.title');
    let tbody = noticeList.querySelector('tbody');

    let bindData = () => {
        let template = section.querySelector('template')

        for (let i = 0; i < notices.length; i++) {
            let cloneNode = document.importNode(template.content, true)
            let tds = cloneNode.querySelectorAll("td")
            tds[0].textContent = notices[0].id;
            tds[1].innerHTML = `<a href="">${notices[0].title}</a>`
            tds[2].textContent = notices[0].regDate;
            tds[3].textContent = notices[0].wirterId;
            tds[4].textContent = notices[0].hit;
        }

        tbody.append(cloneNode)
    }

    titleId.onclick = () => {

    }
})