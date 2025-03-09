// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  const drivers = ["Sam", "Sarah", "John", "Samantha"];

console.log(findMatching(drivers, "sam")); 

console.log(fuzzyMatch(drivers, "Sa")); 

const driverObjects = [
  { name: "Sam", hometown: "New York" },
  { name: "Sarah", hometown: "Chicago" },
  { name: "John", hometown: "Los Angeles" }
];

console.log(matchName(driverObjects, "Sam"));
