const min = 0
const max = 100
const attCount = 6

const getRandomNumber = maxLimit => Math.round(Math.random() * maxLimit)
const randomNumber = getRandomNumber(max)

const playGame = (minLimit, maxLimit, attsNumber, number) => {
    alert(`Я загадал число от ${minLimit} до ${maxLimit}. У тебя есть ${attsNumber} попыток`)

    for (i = 1; i <= attCount; i++) {
        const answer = prompt("Введите свой ответ ниже")

        if (answer > number) {
            alert("Загаданное число меньше.")
        } else if (answer < number) {
            alert("Загаданное число больше.")
        } else {
            alert(`Поздравляю . Ты победил с ${i}-й попытки.`)
            return
        } 
    }
    alert(`У меня для тебя плохие новости. Ты все проиграл. Загаданное число: ${number}. Иди домой неудачник.`)
}

playGame(min, max, attCount, randomNumber)