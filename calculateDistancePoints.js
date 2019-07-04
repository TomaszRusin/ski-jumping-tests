
const calculateDistancePoints = (distance, hillsize, kPoint) => {
    if(!distance || !hillsize || !kPoint){
        return 'Insert all values'
    }else if(isNaN(parseInt(distance))){
        return 'Write correct distance'
    }else if(isNaN(parseInt(kPoint))){
        return 'Write correct kPoint'
    }else{
        const meterDiff = (distance - kPoint)
        switch (hillsize) {
            case 'normal':
                return 60 + (meterDiff * 2)
            case 'large':
                return 60 + (meterDiff * 1.8)
            case 'flying':
                return 120 + (meterDiff * 1.2)
            default:
                return 'Insert valid hill size'
        }
    }
}

module.exports = calculateDistancePoints;