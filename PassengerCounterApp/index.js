// document.getElementById("count-el").innerText = 5

let count = 0
let countEl = document.getElementById("count-el")

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEL = document.getElementById("save-el")


function increment() {
    console.log("Button was clicked")
    count = count+1
    // countEl.innerText = count
    countEl.textContent = count
    console.log(count)
}

// Create function save() which logs out the count
function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let saveElText = count + " - "

    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    // saveEL.innerText += saveElText

    //To fix the spacng since innerText can struggle with reading in hidden text
    saveEL.textContent += saveElText

    console.log(count)

    //Reset count to 0
    countEl.textContent = 0
    count = 0
}

console.log("Let's count people on the subway!")