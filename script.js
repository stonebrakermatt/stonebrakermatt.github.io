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
        newCheck.style.animation = 'check ' + (1 + Math.random() * 3) + 's infinite'
        screen.appendChild(newCheck)
    }
}
const setLines = () => {
    mode = 2
    removeAllChildNodes(screen)
}
const setStars = () => {
    mode = 3
    removeAllChildNodes(screen)
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