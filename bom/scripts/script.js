const input = document.querySelector('#favchap');
const btn = document.querySelector('button');
const list = document.querySelector('#list');

btn.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        const delbtn = document.createElement('button');

        li.textContent = input.value;
        delbtn.textContent = '❌';

        li.append(delbtn);
        list.append(li);

        delbtn.addEventListener('click', () => {
            li.remove();
            input.focus();
        }
        )
    }
    else {
        input.focus();
    }

    input.value = '';
    input.focus();
});

let chapters_arr = get_chapters_list() || [];

chapters_arr.array.forEach(chapter => {
    display_list(chapter);
});

btn.addEventListener('click', () => {
  if (input.value != '') {  
    display_list(input.value);
    chapters_arr.push(input.value); 
    setChapterList(); 
    input.value = '';
    input.focus();
  }
});

function display_list(item) {
    const li = document.createElement('li');
        const delbtn = document.createElement('button');

        li.textContent = input.value;
        delbtn.textContent = '❌';

        li.append(delbtn);
        list.append(li);

        delbtn.addEventListener('click', () => {
            li.remove();
            deleteChapter(li.textContent)
            input.focus();
        }
        )

    input.value = '';
    input.focus();
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}