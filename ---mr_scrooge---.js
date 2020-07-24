// Mr. Scrooge has a sum of money 'P' that wants to invest, and he wants to know how many years 'Y' this sum has to be kept in the bank in order for this sum of money to amount to 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, and the new sum is re-invested yearly after paying tax 'T' on the interests that were just gained (and only on the interests part).

const calculateYears = (principal, interest, tax, desired) => {
  let income = principal * interest;
  let taxOut = income * tax;
  let years = 0;
  while (principal < desired) {
    principal = principal + income - taxOut;
    years++;
  }
  return years;
}

// not giving correct answer

console.log(calculateYears(1000,0.01625,0.18,1200));

// expected: 14
