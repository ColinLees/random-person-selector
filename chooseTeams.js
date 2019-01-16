let people = require('./people.json').people;

const chooseTeams = noOfTeams => {
  const noOfPeople = people.length;
  let team = 0;
  let result = [];

  for (var i = 0; i < noOfTeams; i++) {
    result.push([]);
  }

  for (let i = 0; i < noOfPeople; i++) {
    result[team].push(choosePerson());

    if (team === noOfTeams - 1) {
      team = 0;
    } else {
      team++;
    }
  }

  for (let i = 0; i < result.length; i++) {
    console.log(`Team ${i + 1}: ${result[i]}`);
  }
}

const choosePerson = () => {
  while (people.length) {
    const number = Math.floor(Math.random() * people.length);
    const person = people[number];
    people.splice(number, 1);

    return person;
  }
}

chooseTeams(2)
