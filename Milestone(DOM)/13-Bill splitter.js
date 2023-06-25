function calculateBill(dishes, numberOfPeople) {
    var totalBill = 0;
    var billPerPerson = {};
  
    
    for (var dish in dishes) {
      if (dishes.hasOwnProperty(dish)) {
        totalBill += dishes[dish];
      }
    }
  
    
    var perPerson = totalBill / numberOfPeople;
    for (var i = 1; i <= numberOfPeople; i++) {
      billPerPerson['Person ' + i] = perPerson;
    }
  
    return {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
  }
  

  var dishes = {
    "Pizza": 360,
    "Salad": 540,
    "Drink": 285
  };
  var numberOfPeople = 4;
  
  var bill = calculateBill(dishes, numberOfPeople);
  console.log("Total Bill: $" + bill.totalBill);
  console.log("Bill per Person:");
  for (var person in bill.billPerPerson) {
    console.log(person + ": $" + bill.billPerPerson[person]);
  }
  