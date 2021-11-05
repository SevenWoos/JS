// document.getElementById("count-el").innerText = 5

let count = 0

function increment() {
    console.log("Button was clicked")
    count = count+1
    let countEl = document.getElementById("count-el")
    countEl.innerText = count
    console.log(count)
}

// Create function save() which logs out the count
function save() {
    console.log(count)
}
