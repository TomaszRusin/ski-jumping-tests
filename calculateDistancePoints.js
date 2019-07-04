
const calculateDistancePoints = (distance, hillsize, kPoint) => {
    const meterDiff = (distance - kPoint)
    switch (hillsize) {
        case 'normalna':
            return 60 + (meterDiff * 2)
        case 'duża':
            return 60 + (meterDiff * 1.8)
        case 'mamucia':
            return 120 + (meterDiff * 1.2)
        default:
            console.log('wpisz poprawną wielkość skoczni')
            break;
    }
}

// console.log(calculateDistancePoints(91.5, 'normalna', 98))

module.exports = calculateDistancePoints;