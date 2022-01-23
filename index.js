let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
dogContent.append()
content.append(dogContent)

let image = document.createElement('img')
image.setAttribute('src', './assets/rizzo.jpg')
image.setAttribute('class', 'dog-image')
dogContent.append(image)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogDetails.append()
dogContent.append(dogDetails)

let description = document.createElement('h3')
description.textContent = "Description:"
description.append()
dogDetails.append(description)

let para = document.createElement('p')
para.textContent = 'This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.'
para.append()
dogDetails.append(para)

let feedTimes = document.createElement('h3')
feedTimes.textContent = 'Feeding Times:'
feedTimes.append()
dogDetails.append(feedTimes)

let ul = document.createElement('ul')
let li1 = document.createElement('li')
let li2 = document.createElement('li')
let li3 = document.createElement('li')

li1.textContent = '9:00 am'
li2.textContent = '12:00 pm'
li3.textContent = '5:00 pm'

ul.append(li1)
ul.append(li2)
ul.append(li3)

dogDetails.append(ul)


// let list = document.createElement('li')
// list.textContent = '9:00 am'
// let list2 = document.createElement('li')


// list





















// let header = document.createElement('h1')
// header.innerText

// let dogContent = document.createElement('div')
// dogContent.setAttribute('class', 'dog-content')
// content.append(dogContent)

// let header = document.createElement('h1')
// header.setAttribute('class', 'dog-name')
// header.append('Rizzo')
// content.append(header)

// let image = document.createElement('img')
// image.setAttribute('src', './assets/rizzo.jpg')
// image.setAttribute('class', 'dog-image')
// dogContent.append(image)




// let dogDetails = document.createElement('div')
// dogDetails.setAttribute('class', 'dog-details')
// DogContent.append(dogDetails)

// let dogDescription = document.createElement('h3')
// dogDescription.innerText = 'Description'
// dogDescription.append()