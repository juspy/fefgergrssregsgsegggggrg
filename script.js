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




// $ Методы массивов


// $ push() - добавить элемент в конец массива
// let arr = [1,2,3,4,5,6,7,8,9,10]
// arr.push(11)
// // console.log(arr);
// for(let i = 0; i <= 10; i++){
//     arr.push(i)
// }
// console.log(arr);


// $ pop() - удаляет элемент с конца массива
// let arr = [1,2,3,4,5,6,7,8,9,10]
// arr.pop()
// console.log(arr);


// $ unshift() - добавляет элемент в начало массива
// let arr = [1,2,3,4,5,6,7,8,9,10]
// arr.unshift(100)
// console.log(arr);


// $ shift() - удаляет элемен с начало массива
// let arr = [1,2,3,4,5,6,7,8,9,10]
// arr.shift()
// console.log(arr);


// $ splice() - удаляет элемент под определенным индексом
// let names = ['alex', 'John', 'Ivan', 'Marina',]
// names.splice(1, 2)
// console.log(names);


// $ slice() - создает новый массив (копию) и изменяет
// let fruits = ['apple','bannana','plum','orange','pineapple',]
// let result = fruits.slice(2, 5)
// console.log(result);


// $ reverse() - переварачивает массив наоборот
// let fruits = ['apple','bannana','plum','orange','pineapple',]
// fruits.reverse()
// console.log(fruits);

// $ split() - деалет из строки массив
// let str = 'hello, world'
// let res = str.split(' ')
// console.log(res);


// $ join() - из массива делает строку
// let names = ['Ivan', 'Alex', 'John']
// let res = names.join(' - ')
// console.log(res);


// $ forEach() - метод для пребора массива
// let fruits = ['apple','bannana','plum','orange','pineapple',]
// fruits.forEach(element => {
//     console.log(element);
// })

// $ sort() - сортирует массив
// let num = [2,1,3,5,4,10,6]
// num.sort(function (a,b) {
//     return a - b 
// })
// console.log(num);
// let arr = ['арбуз','Вишня','бананы',]
// arr.sort()
// console.log(arr);


// $ map() - создает новый массив (копию) и изменяет

// $ toLowerCase() - переводит строку в нижный регистр
// $ toUpperCase() - преводит строку в верхний регистр

// let names = ['IVan', 'jOhn', 'ALEX', 'marinA']
// let res = names.map(name => name.toUpperCase())
// console.log(res);
// console.log(names);


// filter() - фильтрует элементы массива
// let arr = [
//     {
//         name: 'Alex',
//         age:20
//     },
//     {
//         name: 'John',
//         age:50
//     },
//     {
//         name: 'Ivan',
//         age:25
//     },
//     {
//         name: 'Alex',
//         age:40
//     },
// ]

// arr.forEach(element => {
//     if (element.age < 30) {
//         console.log(element.name, element.age);
//     }
// });

// let res = arr.filter(item => item.age < 30) 
// console.log(res);

// every/some 

let arr = [4, 'aqwe', 'asfsad']
console.log(arr.some(item => typeof(item) === 'number'));/* выводит true если хоть один элемент массива подходит под условие */
console.log(arr.every(item => typeof(item) === 'number'));/* выводит true только в том случае когда каждый элемент массива подходит под условие */

const sum = (a,b) => {
    return a + b
}

sum(a,b)
