const components = ["BUTTON", "DISCRETE_SLIDER", "NUMBER_INPUT", "RADIO_INPUT", "SELECT_INPUT", "TEXT_INPUT"]
const words = ["fate", "dog", "oatmeal", "santa", "disc", "curls", "basket", "grate", "spin", "ball", "deal", "mark", "tie", "hair", "trial", "year", "sentence", "eye", "star", "win", "thing", "cross"]
let usedLinks = ['myFirstMockNode']

function newLinks(nextLink) {
  let value = [{ source: usedLinks[Math.floor(Math.random() * usedLinks.length)], target: nextLink }]
  usedLinks.push(nextLink)
  return value
}

function getRandomName() {
  const names = ["Alex", "Jack", "Ben", "Sawyer", "Locke", "Kate", "Hurley", "Juliette", "Sayid", "Sun", "Jin", "Claire", "Desmond", "Charlie", "Michael", "Miles", "Dan"]
  return names[Math.floor(Math.random() * names.length)]
}

function getRandomWord() {
  const first = Math.floor(Math.random() * words.length)
  const second = Math.floor(Math.random() * words.length)
  const third = Math.floor(Math.random() * words.length)
  return [words[first], words[second], words[third]].join('-')
}

module.exports.resetData = function() {
  usedLinks = ['myFirstMockNode']
}

module.exports.generateNewData = function() {
  let newComponents = []
  const numberOfComponents = Math.floor(Math.random() * 6) + 2
  const randomWord = getRandomWord()
  for(let i = 0; i < numberOfComponents; i++) {
    let newComponent = {
        type: components[Math.floor(Math.random() * components.length)],
        id: getRandomWord(),
        text: getRandomWord()
      }
    switch(newComponent.type) {
      case components[0]:
        newComponent.buttonType = "submit"
        newComponents.push(newComponent)
      break;
      case components[1]:
        newComponent.min = 0
        newComponent.max = Math.ceil(Math.random() * 35)
        newComponent.value = (newComponent.min + newComponent.max) / 2
        step = 0.5
        newComponents.push(newComponent)
      break;
      case components[2]:
        newComponent.min = 0
        newComponent.max = Math.ceil(Math.random() * 35)
        newComponent.value = (newComponent.min + newComponent.max) / 2
        newComponents.push(newComponent)
      break;
      case components[3]:
        let newNames = Math.ceil(Math.random() * 6)
        let options = []
        newComponent.value = getRandomName()
        for(let i = 0; i < newNames; i++) {
          options.push({ label: getRandomName() })
        }
        newComponent.radioOptions = options
        newComponents.push(newComponent)
      break;
      case components[4]:
        let newOptions = Math.ceil(Math.random() * 6)
        let selects = []
        newComponent.value = getRandomName()
        for(let i = 0; i < newOptions; i++) {
          selects.push(getRandomName())
        }
        newComponent.selectOptions = selects
        newComponents.push(newComponent)
      break;
      case components[5]:
        newComponent.value = getRandomWord()
        newComponents.push(newComponent)
      break;
    }
  }
  let nextLinks = newLinks(randomWord)
  console.log(nextLinks)
  return JSON.stringify({ nodes: [ { id: randomWord, componentList: newComponents } ], links: nextLinks })
}