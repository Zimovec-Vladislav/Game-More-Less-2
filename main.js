const min = 0
const max = 100
const attersNumber = 8
const randomNumber = getRandomNumber(max)

function getRandomNumber(max) {
   const randomNumber = Math.round(Math.random() * max)
   return randomNumber
}

function gamePlay (min, max, attersNumber, randomNumber) {
   alert(`Добро пожаловать на игру Больше Меньше. Я загадал число от ${min} до ${max}.`)

   let playerAnswers = []

   for (let i = 8; i > 0; i--) {
         let playerAnswer = parseFloat(prompt(`Введите число:`, ''))

         while (isNaN(playerAnswer) || playerAnswer > max || playerAnswer < min) {
            playerAnswer = parseFloat(prompt(`Введите число:`, ''))
         }

         if (playerAnswer > randomNumber) {
            alert(`Загаданное число меньше. У тебя осталось ${i} попыток`)
            playerAnswers.push(playerAnswer)
         } else if (playerAnswer < randomNumber) {
            alert(`Загаданное число больше. У тебя осталось ${i} попыток`)
            playerAnswers.push(playerAnswer)
         } else {
               alert(`Ты угадал!!! Использовано ${attersNumber - i} попыток. Загаданное число ${randomNumber}. Твои числа: ${playerAnswers}`)
               return
            }
      }
      alert(`Ты не угадал. Загаданное число ${randomNumber}.`)
   }

gamePlay(min, max, attersNumber, randomNumber)