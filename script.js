// buttons
const checksButton = document.getElementById('checks')
const linesButton = document.getElementById('lines')
const starsButton = document.getElementById('stars')

// screen container
const screen = document.getElementById('screen')



// constant
const checksNum = 100
const linesNum = 100
const starsNum = 200

let mode = 0
let height = window.innerHeight
let width = window.innerWidth



// helper function to remove all child nodes
const removeAllChildNodes = parent => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



// functions to set up various scenes
const setChecks = () => {
    mode = 1
    removeAllChildNodes(screen)
    let checkSize = Math.min(height / 10, width / 10);
    for (let i = 0; i < checksNum; i++) {
        const newCheck = document.createElement('div')
        newCheck.className = 'check'
        newCheck.style.height = Math.floor(checkSize) + 'px'
        newCheck.style.width = Math.floor(checkSize) + 'px'
        newCheck.style.top = Math.floor(Math.random() * height) + 'px'
        newCheck.style.left = Math.floor(Math.random() * width) + 'px'
        newCheck.style.animation = 'common ' + (1 + Math.random() * 3) + 's infinite'
        screen.appendChild(newCheck)
    }
}
const setLines = () => {
    mode = 2
    removeAllChildNodes(screen)
    let lineSize = width
    for (let i = 0; i < linesNum; i++) {
        const newLine = document.createElement('div')
        newLine.className = 'line'
        newLine.style.height = '2px'
        newLine.style.width = Math.floor(lineSize) + 'px'
        newLine.style.top = Math.floor(Math.random() * height) + 'px'
        if (Math.floor(Math.random() * 2)) {
            newLine.style.right = -Math.floor(Math.random() * width) + 'px'
        } else {
            newLine.style.left = -Math.floor(Math.random() * width) + 'px'
        }
        newLine.style.animation = 'common ' + (1 + Math.random() * 3) + 's infinite'
        screen.appendChild(newLine)
    }
}
const setStars = () => {
    mode = 3
    removeAllChildNodes(screen)
    let starSize = 5
    for (let i = 0; i < starsNum; i++) {
        const newStar = document.createElement('div')
        newStar.className = 'star'
        newStar.style.height = Math.floor(starSize) + 'px'
        newStar.style.width = Math.floor(starSize) + 'px'
        newStar.style.top = Math.floor(Math.random() * height) + 'px'
        newStar.style.left = Math.floor(Math.random() * width) + 'px'
        newStar.style.animation = 'common ' + (1 + Math.random() * 3) + 's infinite'
        screen.appendChild(newStar)
    }
}

// attach event listeners to buttons
checksButton.addEventListener('click', setChecks)
linesButton.addEventListener('click', setLines)
starsButton.addEventListener('click', setStars)

// window resize event
window.addEventListener('resize', () => {
    
    // store height and width in state
    height = window.innerHeight
    width = window.innerWidth
    
    // reset animations
    switch (mode) {
        case 0:
            break
        case 1:
            setChecks()
            break
        case 2:
            setLines()
            break
        default:
            setStars()
    } 
})