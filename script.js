/* Способ получить элементе по id */
// const box = document.getElementById('box')
// console.log(box);


/* Получает элемент по названию тега */
// const btns = document.getElementsByTagName('button')
// console.log(btns);
// btns.forEach(btn => {
//     console.log(btn);     /* Их за того что Foreach вышло после etElementsByTagName оно не рабоате с ним (можно for или for of) */
// });

// for (let i = 0; i < btns.length; i++) {
//     console.log(btns[1]);
// }


/* Получает элемент по названию класса */
// const circle = document.getElementsByClassName('circle')      /* Их за того что Foreach вышло после getElementsByClassName оно не рабоате с ним (можно for или for of) */
// console.log(circle);

/* Новый метод получения элементов со страниц */
const circle = document.querySelectorAll('.circle')

circle.forEach(item => {
    item.addEventListener('click', () => {
        // if (item.style.background == 'blue') {
        //     item.style.background = 'red'
        // }else{
        //     item.style.background = 'blue'
        // }
        
        // item.classList.add('yellow')
        
        // contains() - проверяет есть ли такой класс
        
        // if (item.classList.contains('yellow')) {
        //     item.classList.remove('yellow')
        // }else{
        //     item.classList.add('yellow')
        // }
        
        item.classList.toggle('yellow')
        
        item.style.marginLeft = 'left'
    })
})
