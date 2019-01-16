let people = require('./people.json').people;

const choosePerson = async () => {
  while (people.length) {
    const number = Math.floor(Math.random() * people.length);

    console.log(people[number]);
    people.splice(number, 1);
    
    if (people.length) {
      await keypress();
    }
  }
}

const keypress = async () => {
  process.stdin.setRawMode(true);
  return new Promise(resolve =>
    process.stdin.once('data', () => {
      process.stdin.setRawMode(false);
      resolve();
    })
  )
}

choosePerson().then(process.exit);
