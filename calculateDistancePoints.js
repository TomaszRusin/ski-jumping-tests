
const calculateDistancePoints = (distance, hillsize, kPoint) => {
    if(!distance || !hillsize || !kPoint){
        return 'Insert all values';
    }else if(isNaN(parseInt(distance))){
        return 'Write correct distance';
    }else if(isNaN(parseInt(kPoint))){
        return 'Write correct kPoint';
    }else{
        const meterDiff = (distance - kPoint)
        switch (hillsize) {
            case 'normal':
                return Math.round( (60 + (meterDiff * 2)) * 10 ) / 10;
            case 'large':
                return Math.round( (60 + (meterDiff * 1.8)) * 10 ) / 10; 
            case 'flying':
                return Math.round( (120 + (meterDiff * 1.2)) * 10 ) / 10;
                
            default:
                return 'Insert valid hill size';
        }
    }
}

module.exports = calculateDistancePoints;