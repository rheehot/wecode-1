function evenNum() {
  let evenNumber = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      evenNumber.push(i);
    }
  }
  return evenNumber;
}

console.log(evenNum());
