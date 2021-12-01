let points = 0
let boucle = setInterval(timer,1000)

function timer() {
    points++
    if (points === 10) {
        console.log('oui')
        clearInterval(boucle)
    }
}

