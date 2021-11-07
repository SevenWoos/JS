let count = 0
let countBidoof = document.getElementById("count-bidoof")

let saveBidoof = document.getElementById("save-el")

function incrementBidoof() {
    count+=1
    // Update the count on app
    countBidoof.textContent = count
}

function touch(){
    // alert('You touched the Bidoof!');
    count+=+1
    // Update the count on app
    countBidoof.textContent = count
}

function saveRecords() {
    let saveBidoofText = count + " - "
    
    saveBidoof.textContent += saveBidoofText

    // Reset Records
    countBidoof.textContent = 0
    count = 0
}

//Play audio when Bidoof is clicked.
function playAudio(url) {
    new Audio(url).play();
  }

// Creating an Event Listener when you touch Bidoof
document.getElementById('bidoof_box').addEventListener('click', touch, playAudio('BidoofCry.mp3'))

console.log("Touch the Bidoof.")