// timer
let stopTimerByWin = false
let timer
let timerShowing = true
let timerResumeShowing = false
let boardColor
function timerStart(){
    draw()
    console.log(stopTimerByWin)
    if (stopTimerByWin == false) {timer = setInterval(draw, 3000)} 
    // take away the timer and resume button
    if (timerShowing == true) {
        document.getElementById('timer').remove()
    }
    if (timerResumeShowing == true) {
        document.getElementById('timerResume').remove()
    }
    // make and add the pause button
    let controlButtons = document.getElementById('controlButtons')
    let pauseButton = document.createElement('button')
    controlButtons.appendChild(pauseButton)
    pauseButton.setAttribute('id', 'timerPause')
    pauseButton.setAttribute('class', 'colorChangeButtons')
    pauseButton.setAttribute('onClick', 'timerPause()')
    pauseButton.innerHTML = 'Pause'
    pauseButton.style.backgroundColor = boardColor
    timerShowing = false
}

// timer pause button
function timerPause() {
    clearInterval(timer)
    // take away the timer button
    document.getElementById('timerPause').remove()
    // make and add resume button
    let controlButtons = document.getElementById('controlButtons')
    let resumeButton = document.createElement('button')
    controlButtons.appendChild(resumeButton)
    resumeButton.setAttribute('id', 'timerResume')
    resumeButton.setAttribute('class', 'colorChangeButtons')
    resumeButton.setAttribute('onClick', 'timerStart()')
    resumeButton.innerHTML = 'Resume'
    resumeButton.style.backgroundColor = boardColor
    timerResumeShowing = true
}

// pick a valid number for the squares BINGO
function draw() {
let B = Math.floor(Math.random()*15)+1
let I = Math.floor(Math.random()*15)+16
let N = Math.floor(Math.random()*15)+31
let G = Math.floor(Math.random()*15)+46
let O = Math.floor(Math.random()*15)+61

// Pick a column of BINGO
let number = Math.floor(Math.random()*5)
let letter = ['B', 'I', 'N', 'G', 'O']

// if the number has already been called, then pick another one
let alreadyCalled = []
if (alreadyCalled.includes(letter[number] + B) || alreadyCalled.includes(letter[number] + I) || alreadyCalled.includes(letter[number] + N) || alreadyCalled.includes(letter[number] + G) || alreadyCalled.includes(letter[number] + O)) {
    draw()
    return
}
// Combine the letter with it's random number
let result
switch (letter[number]) {
    case 'B':
        result = letter[number] + B
        break
    case 'I':
        result = letter[number] + I
        break
    case 'N':
        result = letter[number] + N
        break
    case 'G':
        result = letter[number] + G
        break
    case 'O':
        result = letter[number] + O
        break

} 
// put into alreadyCalled arr
alreadyCalled.push(result) 
// put on the display
document.getElementById('number').innerHTML = '<h2>The Number is: ' + result + '</h2>'
}

//set the board color from the buttons
function color(color) {
    switch (color) {
        // red
        case 'red':
            boardColor = '#F2C7CC'
            document.getElementById('backgroundColor').style.backgroundColor = '#FF6663'
            document.querySelectorAll('.colorChangeButtons').forEach(button => document.getElementById(button.id).style.backgroundColor = boardColor)
            for (i=0; i<6; i++) {
                document.getElementById('B'+i).style.backgroundColor = boardColor
                document.getElementById('I'+i).style.backgroundColor = boardColor
                document.getElementById('N'+i).style.backgroundColor = boardColor
                document.getElementById('G'+i).style.backgroundColor = boardColor
                document.getElementById('O'+i).style.backgroundColor = boardColor
            }
            break
        // orange
        case 'orange':
            boardColor = '#FCDABE'
            document.getElementById('backgroundColor').style.backgroundColor = '#FEB144'
            document.querySelectorAll('.colorChangeButtons').forEach(button => document.getElementById(button.id).style.backgroundColor = boardColor)
            for (i=0; i<6; i++) {
                document.getElementById('B'+i).style.backgroundColor = boardColor
                document.getElementById('I'+i).style.backgroundColor = boardColor
                document.getElementById('N'+i).style.backgroundColor = boardColor
                document.getElementById('G'+i).style.backgroundColor = boardColor
                document.getElementById('O'+i).style.backgroundColor = boardColor
            }
            break
        // yellow
        case 'yellow':
            boardColor = '#F3FBD2'
            document.getElementById('backgroundColor').style.backgroundColor = '#FDFD97'
            document.querySelectorAll('.colorChangeButtons').forEach(button => document.getElementById(button.id).style.backgroundColor = boardColor)
            for (i=0; i<6; i++) {
                document.getElementById('B'+i).style.backgroundColor = b
                document.getElementById('I'+i).style.backgroundColor = b
                document.getElementById('N'+i).style.backgroundColor = b
                document.getElementById('G'+i).style.backgroundColor = b
                document.getElementById('O'+i).style.backgroundColor = b
            }
            break
        // green
        case 'green':
            boardColor = '#D7F2CE'
            document.getElementById('backgroundColor').style.backgroundColor = '#9EE09E'
            document.querySelectorAll('.colorChangeButtons').forEach(button => document.getElementById(button.id).style.backgroundColor = boardColor)
            for (i=0; i<6; i++) {
                document.getElementById('B'+i).style.backgroundColor = boardColor
                document.getElementById('I'+i).style.backgroundColor = boardColor
                document.getElementById('N'+i).style.backgroundColor = boardColor
                document.getElementById('G'+i).style.backgroundColor = boardColor
                document.getElementById('O'+i).style.backgroundColor = boardColor
            }
            break
        // blue
        case 'blue':
            boardColor = '#9EC1CF'
            document.getElementById('backgroundColor').style.backgroundColor = '#C2E7F1'
            document.querySelectorAll('.colorChangeButtons').forEach(button => document.getElementById(button.id).style.backgroundColor = boardColor)
            for (i=0; i<6; i++) {
                document.getElementById('B'+i).style.backgroundColor = boardColor
                document.getElementById('I'+i).style.backgroundColor = boardColor
                document.getElementById('N'+i).style.backgroundColor = boardColor
                document.getElementById('G'+i).style.backgroundColor = boardColor
                document.getElementById('O'+i).style.backgroundColor = boardColor
            } 
            break
        // purple
        case 'purple':
            boardColor = '#cfc0e2'
            document.getElementById('backgroundColor').style.backgroundColor = '#C0C2E2'
            document.querySelectorAll('.colorChangeButtons').forEach(button => document.getElementById(button.id).style.backgroundColor = boardColor)
            for (i=0; i<6; i++) {
                document.getElementById('B'+i).style.backgroundColor = boardColor
                document.getElementById('I'+i).style.backgroundColor = boardColor
                document.getElementById('N'+i).style.backgroundColor = boardColor
                document.getElementById('G'+i).style.backgroundColor = boardColor
                document.getElementById('O'+i).style.backgroundColor = boardColor
            }
            break
        // custom color choice for user
        case 'customColor':
            let colorsDiv = document.getElementById('colors')
            // display question and boxes
            colorsDiv.innerHTML = '<h2 id="outsideQuestion">Outside<br>Color?</h2>\n<input id="outsideInput">\n<span id="span"></span>\n<h2 id="gridQuestion">Board<br>Color?</h2>\n<input id="gridInput">\n<div id="submitColors" style="width: 100px; height: 60px; margin: auto">\n<button id="colorButton" onclick="colorButtonClicked()">Enter</button>\n<button id="cancelColorButton" onclick="cancelColorButtonClicked()">Cancel</button>\n<div>'
            // make pretty
            colorsDiv.style.fontSize = '20px'
            colorsDiv.style.display = 'flex'
            colorsDiv.style.justifyContent = 'space-evenly'
            colorsDiv.style.alignItems = 'center'
            colorsDiv.style.height = '100px'
            colorsDiv.style.marginTop = '-30px'
            // colorsDiv.style.backgroundColor = '#f2f2f2'
            // grab input box
            let outsideInput = document.getElementById('outsideInput')
            let gridInput = document.getElementById('gridInput')
            let colorButton = document.getElementById('colorButton')
            let cancelColorButton = document.getElementById('cancelColorButton')
            // box settings
            outsideInput.setAttribute('placeholder', '#000000');         gridInput.setAttribute('placeholder', '#000000')
            // make inputs look pretty
            document.getElementById('colorButton').style.marginBottom = '2px'
            document.getElementById('outsideQuestion').style.marginLeft = '20px'
            outsideInput.style.width = '100px'
            outsideInput.style.height = '50px'
            outsideInput.style.margin = 'auto'
            outsideInput.style.fontSize = '20px'
            outsideInput.style.border = '2px solid gray'
            gridInput.style.width = '100px'
            gridInput.style.height = '50px'
            gridInput.style.margin = 'auto'
            gridInput.style.fontSize = '20px'
            gridInput.style.border = '2px solid gray'
            colorButton.style.width = '100px'
            colorButton.style.height = '28px'
            colorButton.style.fontSize = '20px'
            colorButton.style.backgroundColor = '#ffffff'
            cancelColorButton.style.width = '100px'
            cancelColorButton.style.height = '28px'
            cancelColorButton.style.fontSize = '20px'
            cancelColorButton.style.backgroundColor = '#ffffff'
                    break
                }
}

// use color input data
function colorButtonClicked() {
    // grab input values
    let colorValueArray = document.querySelectorAll('input')
    outsideValue = colorValueArray[0].value
    gridValue = colorValueArray[1].value
    // change color
    document.getElementById('backgroundColor').style.backgroundColor = outsideValue
    document.getElementById('new').style.backgroundColor = gridValue
    for (i=0; i<6; i++) {
        document.getElementById('B'+i).style.backgroundColor = gridValue
        document.getElementById('I'+i).style.backgroundColor = gridValue
        document.getElementById('N'+i).style.backgroundColor = gridValue
        document.getElementById('G'+i).style.backgroundColor = gridValue
        document.getElementById('O'+i).style.backgroundColor = gridValue
    }
    // reset color buttons
    document.getElementById('colors').style.marginTop = '0px'
    document.getElementById('colors').innerHTML = '<button class=\'colors\' id="red" onclick="color(\'red\')" style="background-color: #FF6663;">Red</button>\n<button class=\'colors\' id="orange" onclick="color(\'orange\')" style="background-color: #FEB144;">Orange</button>\n<button class=\'colors\' id="yellow" onclick="color(\'yellow\')" style="background-color: #FDFD97;">Yellow</button>\n<button class=\'colors\' id="green" onclick="color(\'green\')" style="background-color: #9EE09E;">Green</button>\n<button class=\'colors\' id="blue" onclick="color(\'blue\')" style="background-color: #9EC1CF;">Blue</button>\n<button class=\'colors\' id="purple" onclick="color(\'purple\')" style="background-color: #C0C2E2;">Purple</button>\n<button class=\'colors\' id="customColor" onclick="color(\'customColor\')" style="background-color: #ffffff;">Custom..</button>'
}

// cancel button
function cancelColorButtonClicked() {
    // reset color buttons
    document.getElementById('colors').style.marginTop = '0px'
    document.getElementById('colors').innerHTML = '<button class=\'colors\' id="red" onclick="color(\'red\')" style="background-color: #FF6663;">Red</button>\n<button class=\'colors\' id="orange" onclick="color(\'orange\')" style="background-color: #FEB144;">Orange</button>\n<button class=\'colors\' id="yellow" onclick="color(\'yellow\')" style="background-color: #FDFD97;">Yellow</button>\n<button class=\'colors\' id="green" onclick="color(\'green\')" style="background-color: #9EE09E;">Green</button>\n<button class=\'colors\' id="blue" onclick="color(\'blue\')" style="background-color: #9EC1CF;">Blue</button>\n<button class=\'colors\' id="purple" onclick="color(\'purple\')" style="background-color: #C0C2E2;">Purple</button>\n<button class=\'colors\' id="customColor" onclick="color(\'customColor\')" style="background-color: #ffffff;">Custom..</button>'
}

// making the user's board
let incremental = 0
for (letter=0; letter<5; letter++) {
    let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    let BINGO = ['B', 'I', 'N', 'G', 'O']
    for (i=1; i<6; i++) {
        if (i == 3 && BINGO[letter] == 'N') {} else {
            let randomNumber = Math.floor(Math.random()*numberList.length-1)+1
            document.getElementById(BINGO[letter]+i).innerHTML = numberList[randomNumber] + incremental
            numberList.splice(randomNumber, 1)
        }
    }
    incremental += 15
}

let winningArray = []
//place circles
let checkedArray = []
function placeCircle(square) {
    let spot = document.getElementById(square)
    if (checkedArray.includes(spot)) {
        spot.style.backgroundImage = ''
        spot.style.color = 'black'
        checkedArray.splice(checkedArray.indexOf(spot), 1)
    } else {
        checkedArray.push(spot)
        spot.style.backgroundImage = 'url(redCircle.png)'
        spot.style.backgroundSize = 'contain'
        spot.style.color = 'white'
    }
    // all possible wins    
    winningArray.push(square)
    // diagonals 
    if (winningArray.includes('B1') && winningArray.includes('I2') && winningArray.includes('N3') && winningArray.includes('G4') && winningArray.includes('O5')) {
        document.getElementById('number').innerHTML = '<h2>BINGO! It took you ' + winningArray.length + ' moves to complete!</h2>'
        stopTimerByWin = true
    }
    if (winningArray.includes('B5') && winningArray.includes('I4') && winningArray.includes('N3') && winningArray.includes('G2') && winningArray.includes('O1')) {
        document.getElementById('number').innerHTML = '<h2>BINGO! It took you ' + winningArray.length + ' moves to complete!</h2>'
        stopTimerByWin = true
    }
    for (i=1; i<6; i++) {
        // all horizontal wins
        if (winningArray.includes('B' + i) && winningArray.includes('I' + i) && winningArray.includes('N' + i) && winningArray.includes('G' + i) && winningArray.includes('O' + i)) {
            document.getElementById('number').innerHTML = '<h2>BINGO! It took you ' + winningArray.length + ' moves to complete!</h2>'
            stopTimerByWin = true
        }
        // vertical wins
        let BINGO = ['B', 'I', 'N', 'G', 'O']
        if (winningArray.includes(BINGO[i-1] + 1) && winningArray.includes(BINGO[i-1] + 2) && winningArray.includes(BINGO[i-1] + 3) && winningArray.includes(BINGO[i-1] + 4) && winningArray.includes(BINGO[i-1] + 5)) {
            document.getElementById('number').innerHTML = '<h2>BINGO! It took you ' + winningArray.length + ' moves to complete!</h2>'
            stopTimerByWin = true
        }
    }
}