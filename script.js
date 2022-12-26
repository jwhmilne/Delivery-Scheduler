const customerName = "Joe M";
const firstDay = "Monday";
const secondDay = "Friday";
console.log(`Available Days: ${firstDay} and ${secondDay}`);
const deliveryDay = "Friday";
console.log(`Delivery Day: ${deliveryDay}`);
const firstDayCheck = deliveryDay === firstDay;
console.log(`Successful delivery on the first day? ${firstDayCheck}`);
const secondDayCheck = deliveryDay === secondDay;
console.log(`Successful delivery on the second day? ${secondDayCheck}`);
const dayResult = firstDayCheck === true || secondDayCheck === true;
console.log(`Fulfilled ${customerName}'s day preference ${dayResult}`);
const requestAfterTime = 8;
const requestBeforeTime = 10;
console.log(
  `Request delivery day after ${requestAfterTime} but before ${requestBeforeTime}`
  );
const deliveryTime = 9;
console.log(`Delivery Time: ${deliveryTime}`);
const afterTimeCheck = deliveryTime >= requestAfterTime;
console.log(`Delivery is after ${requestAfterTime}? ${afterTimeCheck}`);
const beforeTimeCheck = deliveryTime < requestBeforeTime;
console.log(`Delivery is before ${requestBeforeTime}? ${beforeTimeCheck}`);
const timeResult = beforeTimeCheck === true && afterTimeCheck === true;
console.log(`Fulfilled ${customerName}'s time preference? ${timeResult}`);
const overallCheck = timeResult === true && dayResult === true;
console.log(`Program scheduled well? ${overallCheck}`);
