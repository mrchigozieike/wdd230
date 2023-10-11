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
const pegetitle = document.getElementsByClassName('pagetitle')
pegetitle = "my favourite Books in the Book of Mormon"
console.log(input)