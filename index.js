// Code your solution in this file!
// 1️⃣ Returns the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// 2️⃣ Returns the last two drivers from an array
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// 3️⃣ Array containing both functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4️⃣ Higher-order function that returns a function to multiply fare
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

// 5️⃣ Function that doubles the fare
const fareDoubler = createFareMultiplier(2);

// 6️⃣ Function that triples the fare
const fareTripler = createFareMultiplier(3);

// 7️⃣ Function that selects different drivers based on function passed
const selectDifferentDrivers = function(arrayOfDrivers, driverFunction) {
    return driverFunction(arrayOfDrivers);
};
