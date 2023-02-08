let numberOne = prompt("Digite o primeiro número")
let numberTwo = prompt("Digite o segundo número")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)


const printOperations = (numberOne, numberTwo) => {
  let sumResult = numberOne + numberTwo
  let subritationResult = numberOne - numberTwo
  let multiplicationResult = numberOne * numberTwo
  let divisionResult = (numberOne / numberTwo).toFixed(2)
  let remainderResult = numberOne % numberTwo

  let evenNumber = sumResult % 2 == 0
  let equalNumbers = numberOne == numberTwo

  alert(`A soma dos dois números é: ${sumResult}`)
  alert(`A subtração dos dois números é: ${subritationResult}`)
  alert(`A multiplicação dos dois números é: ${multiplicationResult}`)
  alert(`A divisão dos dois números é: ${divisionResult}`)
  alert(`A resto da divisão dos dois números é: ${remainderResult}`)

  if (evenNumber) {
    alert("A soma dos dois números é par!")
  } else {
    alert("A soma dos dois números é impar!")
  }

  if (equalNumbers) {
    alert("Os números inseridos são iguais")
  } else {
    alert("Os números inseridos são diferentes")
  }
}

printOperations(numberOne, numberTwo)
