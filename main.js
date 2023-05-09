const min = 0
const max = 100
const attCounter = 5

function getUserName () {
    const userName = prompt("Добрый день или вечер. Введите свое имя:")
    return userName
}

const userName = getUserName() 

const getRandomNumber = (maxLimit) => Math.round(Math.random() * maxLimit)
const randomNumber = getRandomNumber(max)

const playGame = (minLimit, maxLimit, attsNumber, number, name) => {
    alert(`Добро пожаловать в игру "Больше или Меньше", ${name}!!! Я загадал число от ${minLimit} до ${maxLimit}. Тебе нужно угадать это число. У тебя есть ${attsNumber} попыток.`)

    for (let i = 1; i <= attCounter; i++) {
        const answer = prompt("Введи число в поле")

        if (answer > number) {
            alert(`Загаданное число меньше. У тебя осталось ${attsNumber - i} попыток.`)
        } else if (answer < number) {
            alert(`Загаданное число больше. У тебя осталось ${attsNumber - i} попыток.`)
        } else { alert(`${name}, ты победил с ${i}-й попытки. Загаданное число ${number}.`)
        return}
        
    }
    alert(`${name}, ты проиграл. Загаданное число ${number}`)
}

playGame(min, max, attCounter, randomNumber, userName)