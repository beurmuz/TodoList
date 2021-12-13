const addInput = document.querySelector('.add-input');
const addBtn= document.querySelector('.add-button');
const lists = document.querySelector('.lists');

// 추가기능
// 입력란에 네임을 입력하고 +버튼을 누르면 리스트가 추가된다.
addBtn.addEventListener('click', () => {
    // 사용자가 입력한 값 가져오기
    const text = addInput.value;
    // 빈칸 처리하기
    if(text === '') {
        alert('해야할 일을 입력하세요.');
        addInput.focus();
        return;
    }
    // 새로운 list하나 만들기
    const list = createList(text);

    // lists안에 넣어주기
    lists.appendChild(list);

    addInput.value = '';
    addInput.focus();
});

let id = 0;
function createList(text) {
    const listBundle = document.createElement('li');
    listBundle.setAttribute('class', 'list-bundle');
    listBundle.setAttribute('data-id', id);
    listBundle.innerHTML = `
            <li class="list-bundle">
                <div class="list-content">
                    <span class="list-name">${text}</span>
                <span class="list-button">
                    <button class="listin-button list-do">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="listin-button list-delete">
                        <i class="far fa-minus-square" data-id=${id}></i>
                    </button>
                </span>
                </div>   
            </li>`;
    id++;
    return listBundle;
}

// 삭제기능
// delete 버튼 클릭 시 리스트 자체를 삭제한다.
lists.addEventListener('click', (e) => {
    const targetTag = e.target;
    if(targetTag.className === 'fas fa-heart') {
        const doneList = document.querySelector(`.list-do`);
        doneList.style.color = 'red';
        // console.log(doneList);
    } else if(targetTag.className === 'far fa-minus-square'){
        if(targetTag.dataset.id) {
            const deletedList = document.querySelector(`.list-bundle[data-id="${targetTag.dataset.id}"]`);
            deletedList.remove();
        }
    }
});

