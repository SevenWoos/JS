let hasCompletedCourse = true
let givesCertificate = true


function generateCertificate() {
    console.log("Generating certificate....")
}

//Method 1 (Nested if statements)
// if (hasCompletedCourse === true) {
//     if (givesCertificate === true) {
//         generateCertificate()
//     }
// }

//Method 2
if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate()
}


let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function

if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}

function showSolution() {
    console.log("Showing the solution....")
}
