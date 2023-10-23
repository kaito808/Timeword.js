function timeWord(time) {
  const hours = parseInt(time.slice(0, 2));
  const minutes = parseInt(time.slice(3));

  const hoursWords = [
    "twelve",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
  ];

  const minutesWords = [
    "oh",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
  ];

  const tensWords = ["", "", "twenty", "thirty", "forty", "fifty"];

  const period = hours < 12 ? "am" : "pm";

  if (minutes === 0) {
    if (hours === 0) {
      return "midnight";
    }
    if (hours === 12) {
      return "noon";
    }
    return hoursWords[hours] + " o'clock " + period;
  }

  let minutesText = "";
  if (minutes < 10) {
    minutesText = "oh " + minutesWords[minutes];
  } else if (minutes < 20) {
    minutesText = minutesWords[minutes];
  } else {
    const ten = Math.floor(minutes / 10);
    const one = minutes % 10;
    minutesText = tensWords[ten] + (one !== 0 ? " " + minutesWords[one] : "");
  }

  const hoursText = hours === 0 ? "twelve" : hoursWords[hours % 12];

  return hoursText + " " + minutesText + " " + period;
}

console.log(timeWord("00:00"));
console.log(timeWord("00:12"));
console.log(timeWord("01:00"));
console.log(timeWord("06:01"));
console.log(timeWord("06:10"));
console.log(timeWord("06:18"));
console.log(timeWord("06:30"));
console.log(timeWord("10:34"));
console.log(timeWord("12:00"));
console.log(timeWord("12:09"));
console.log(timeWord("23:23"));
