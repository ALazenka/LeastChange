const AMOUNTS = [
  {
    type: "one hundred dollar bill",
    value: 10000,
  },
  {
    type: "fifty dollar bill",
    value: 5000,
  },
  {
    type: "twenty dollar bill",
    value: 2000,
  },
  {
    type: "ten dollar bill",
    value: 1000,
  },
  {
    type: "five dollar bill",
    value: 500,
  },
  {
    type: "toonie",
    value: 200,
  },
  {
    type: "loonie",
    value: 100,
  },
  {
    type: "quarter",
    value: 25,
  },
  {
    type: "dime",
    value: 10,
  },
  {
    type: "nickel",
    value: 5,
  },
  {
    type: "penny",
    value: 1,
  },
]

function calculateChange(amount) {
  let placeInArray = 0
  let numberOfCurrentValue = 0
  let changeStrings = []
  while (amount > 0 && AMOUNTS.length > placeInArray) {
    if (amount < AMOUNTS[placeInArray].value) {
      placeInArray = placeInArray + 1
    } else {
      while (amount - AMOUNTS[placeInArray].value >= 0) {
        amount = amount - AMOUNTS[placeInArray].value
        numberOfCurrentValue = numberOfCurrentValue + 1
      }
      const string_returned = changeAsString(placeInArray, numberOfCurrentValue)
      numberOfCurrentValue = 0
      changeStrings.push(string_returned)
    }
  }

  outputChangeResult(changeStrings)
}

function outputChangeResult(changeStrings) {
  let changeStringsCount = 0
  let totalChangeRequired = ""
  if (changeStrings.length == 1) {
    console.log(changeStrings[0])
  } else {
    changeStrings.forEach(string => {
      changeStringsCount = changeStringsCount + 1
      if (changeStrings.length != changeStringsCount) {
        totalChangeRequired += string + ", "
      } else {
        totalChangeRequired += string
      }
    })
  }

  console.log(`\nChange required - ${totalChangeRequired}\n`)
}

function changeAsString(placeInArray, numberOfCurrentValue) {
  const currentString = numberOfCurrentValue + " " + AMOUNTS[placeInArray].type
  if (numberOfCurrentValue > 1) {
    return currentString + "s"
  }
  return currentString
}

if (!isNaN(Number(process.argv[2]))) {
  calculateChange(Number(process.argv[2]))
} else {
  console.log("Input must be an integer, the number of cents required in change.\n")
}
