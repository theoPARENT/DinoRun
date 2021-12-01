/**
 * When an event is triggered, the function is called to auto-increment the score with the parameters of speed
 * @param actualScore Integer
 * @param speed Boolean
 * @returns newScore Retourne l'int du score après incrémentation
 */
function incrementScore(actualScore, speed = null) {

    function float2int (value) {
        return value | 0;
    }

    switch (speed) {
        case 1 :
            actualScore = actualScore * 1
            break
        case 1.2 :
            actualScore = actualScore * 1.2
            break
        case 1.4 :
            actualScore = actualScore * 1.4
            break
        case 1.6 :
            actualScore = actualScore * 1.6
            break
        case 1.8 :
            actualScore = actualScore * 1.8
            break
        case 2 :
            actualScore = actualScore * 2
            break
        case 2.2 :
            actualScore = actualScore * 2.2
            break
        case 2.4 :
            actualScore = actualScore * 2.4
            break
        case 2.6 :
            actualScore = actualScore * 2.6
            break
        case 2.8 :
            actualScore = actualScore * 2.8
            break
        case 3 :
            actualScore = actualScore * 3
            break
        default :
            actualScore = actualScore * (actualScore / 65)
            break

    }

    return float2int(actualScore)


}


