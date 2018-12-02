/**
 * greet(name):
 * - optionally receives a name
 * - logs "Hello" if there is no name
 * - logs "Hello <name>" if there is a name
 */
function greet(name) {
  if (name.type === string) {
    console.log(`Hello ${name}`);
  } else {
    console.log("Hello");
  }
}

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 */
function isOdd(n) {
  if (n % 2 === 0){
    return false
  } else {
    return true
  }
}

//console.log("zero test " + isOdd(0));
//console.log("one test " + isOdd(1));
//console.log("two test " + isOdd(2));

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 *
 * Hint: you can solve this without writing any loops!
 */
function oddsSmallerThan(n) {
  let oddNumber =[];
  for (let i = 0 ; i < n ; i++ ){
    if (isOdd(i) === true){
      //console.log(i)
      //console.log("i is odd")
      oddNumber.push(i);
      //console.log(oddNumber)
    }
  }
  return oddNumber.length
}

//console.log(oddsSmallerThan(5));

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (isOdd(n) === false){
    return n*2;
  } else {
    return n*n;
  }
}

//console.log(squareOrDouble(16));
//console.log(squareOrDouble(9));

/**
 * ageFromCivilID(civilID):
 * - receives a civilID as a STRING of the form <CYYMMDDXXXXX>
 *   where:
 *     - C is the century (1 = 18xx, 2 = 19xx, 3 = 20xx)
 *     - YY is the year (00 - 99)
 *     - MM is the month (01 - 12)
 *     - DD is the date
 * - calculates and returns the age of the civilID holder (rounded down to the nearest year)
 * - assume all civilIDs will be valid
 *
 * Hint: you can use JavaScript's Date() class to make things easier
 *
 * e.g. (if we assume that the date today is September 23 2018):
 *    ageFromCivilID(287050612345) -> 31
 *    ageFromCivilID(297111012345) -> 20
 */
function ageFromCivilID(civilID) {
  var civilID = civilID.toString();
  let cent
  if (civilID[0] === "1"){
    cent = 18
  } 
  if (civilID[0] === "2"){
    cent = 19 
  } 
  if (civilID[0] === "3"){
    cent = 20
  }
  //console.log("century is: " + cent)
  let year = civilID[1]+civilID[2];
  //console.log("year is: " + year + " " + typeof year)
  let fullYear = Number(cent.toString() + year)
  //console.log("year is:" + fullYear);
  let month = civilID[3]+civilID[4];
  //console.log("month is: " + month)
  let date = civilID[5]+civilID[6];
  //console.log("date is: " + date)
 

  var dateID = new Date (fullYear, month, date)
  var dateToday = new Date ()
  //console.log(dateID);
  //console.log(dateToday);
  let age = dateToday.getFullYear() - dateID.getFullYear();
  //console.log("age is " + age);
  return age
}

/**
 * canVoteInKuwait(civilID, isKuwaiti, isRoyal):
 * - receives a civilID as a STRING
 * - receives a boolean isKuwaiti
 * - receives a boolean isRoyal
 * - returns true if the person can vote, false otherwise:
 *   In Kuwait the conditions for voting are as follows:
 *    - Over 21
 *    - Is a Kuwaiti citizen
 *    - Is NOT a member of the royal family
 */
function canVoteInKuwait(civilID, isKuwaiti, isRoyal) {
  if (ageFromCivilID(civilID)>21 && isKuwaiti && isRoyal===false){
    return true
  } else {
    return false
  }
}

//console.log(canVoteInKuwait(291111012345, true, false));

module.exports = {
  greet,
  isOdd,
  oddsSmallerThan,
  squareOrDouble,
  ageFromCivilID,
  canVoteInKuwait
};
