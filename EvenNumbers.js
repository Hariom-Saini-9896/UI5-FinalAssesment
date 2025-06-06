function getDoubledEvens(numbers) {
  return numbers
    .filter(num => num % 2 === 0)  
    .map(num => num * 2);         
}
