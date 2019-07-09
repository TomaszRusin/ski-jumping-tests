
const calculateDistancePoints = (sourceDistance, hillsize, sourcekPoint) => {
    const distance = parseInt(sourceDistance);
    const kPoint = parseInt(sourcekPoint);

    if(!distance || !hillsize || !kPoint){
        console.log('Insert all values') 
    }else if(isNaN(distance)){
        console.log('Write correct distance') 
        return null;
    }else if(isNaN(kPoint)){
        console.log('Write correct kPoint') 
        return null;
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
                console.log('Insert valid hill size') 
                return null;
        }
    }
}

module.exports = calculateDistancePoints;