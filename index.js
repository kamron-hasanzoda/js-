let number = prompt('Введите свое число')
if (number % 2 == 0) {
    prompt('четное')
} else {
    prompt('нечетное')
}
let name = prompt('Введите имя').toLowerCase().trim()
prompt(name[0] === 'b').toUpperCase()
if (name[0] === 'b') {
    prompt('Добро пожаловать ' + name)
} else {
    prompt('Домой ' + name)
}
let UserName = name
if ((UserName.length %2==0)) {
    prompt('четное')
} else {
    prompt('нечетное')
}
let age = prompt('Сколько вам лет?')
prompt(age >= 18)
if (age >= 18) {
    prompt('Добро пожаловать')
} else {
    prompt('Uyga bor')
}