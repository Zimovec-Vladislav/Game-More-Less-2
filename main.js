const min = 0
const max = 100

const getRandomNumber = (maxNum) => Math.round(Math.random() * maxNum)

const randomNumber = getRandomNumber(max)

alert(`Игра: Угадай число.\nДОБРО ПОЖАЛОВАТЬ на игру.\nНажмите ОК, чтобы начать.`)

const gamePlay = (minNum, maxNum, ranNum) => {
   alert(`Я загадал число от ${minNum} до ${maxNum}. Тебе нужно угадать это число.${ranNum}`)
   let userNum = prompt( `Введи свое число:` )
   for (let i = 6; i > 0; i--) {
      if ( userNum < ranNum ) {
         userNum = prompt(`Загаданное число больше. У тебя ${i} попыток. Введи свое число:`)
         } else if  (userNum > ranNum) {
            userNum = prompt( `Загаданное число меньше. У тебя ${i} попыток. Введи свое число:` )
            } else {
               alert(`Поздравляю!! Ты УГАДАЛ!!! Загаданное число ${ranNum}. Число попыток `)
               return
            }
   }
   alert(`You lose`)
   return
}

gamePlay(min, max, randomNumber)