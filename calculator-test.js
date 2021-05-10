// TYLER GETTEL TESTING WITH JASMINE EXERCISE //

it('should calculate the monthly rate correctly', function () {
  var values = { amount: 20000, years: 10, rate: 4.3};
  expect(calculateMonthlyPayment(values)).toEqual("205.35")

  var values = { amount: 50000, years: 5, rate: 6};
  expect(calculateMonthlyPayment(values)).toEqual("966.64")
});


it("should return a result with 2 decimal places", function() {
  var values = { amount: 35000, years: 5, rate: 6.3};
  expect(calculateMonthlyPayment(values)).toEqual("681.54")

  var values = { amount: 250000, years: 10, rate: 4};
  expect(calculateMonthlyPayment(values)).toEqual("2531.13")
});



it("should return NaN for non number inputs", function() {
  var values = { amount: "string", years: 10, rate: 5};
  expect(calculateMonthlyPayment(values)).toEqual("NaN")

  var values = { amount: 10000, years: "string", rate: 5};
  expect(calculateMonthlyPayment(values)).toEqual("NaN")

  var values = { amount: 10000, years: 10, rate: "string"};
  expect(calculateMonthlyPayment(values)).toEqual("NaN")
});