const calculateDistancePoints =  require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (
        distance,
        hillSize,
        kPoint,
        styleNotes, 
        windFactor, 
        gateFactor) => {
    const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
    const stylePoints = calculateStylePoints(styleNotes);

    if(isNaN(distancePoints)){
        return distancePoints;
    }else if(isNaN(stylePoints)){
        return stylePoints;
    }else if(isNaN(windFactor)){
        console.log('Wind factor should be expressed as a number')
        return null;
    }else if(isNaN(gateFactor)){
        console.log('Gate factor should be expressed as a number')
        return null;
    }else{
        return Math.round( (distancePoints + stylePoints + windFactor + gateFactor) * 10 ) / 10;
    };
};

module.exports = calculateTotalPoints;