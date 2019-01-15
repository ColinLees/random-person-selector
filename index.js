const choosePerson = async () => {
  let people = ['Colin', 'Josh H', 'David', 'Elliott', 'Jon C', 'Jon H']

  while (people.length) {
    const number = Math.floor(Math.random() * people.length)

    console.log(people[number])
    people.splice(number, 1)
    
    if (people.length) {
      await keypress()
    }
  }
}

const keypress = async () => {
  process.stdin.setRawMode(true)
  return new Promise(resolve =>
    process.stdin.once('data', () => {
      process.stdin.setRawMode(false)
      resolve()
    })
  )
}

choosePerson().then(process.exit)
