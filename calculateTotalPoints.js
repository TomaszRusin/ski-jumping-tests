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
        return 'Wind factor should be expressed as a number';
    }else if(isNaN(gateFactor)){
        return 'Gate factor should be expressed as a number';
    }else{
        return Math.round( (distancePoints + stylePoints + windFactor + gateFactor) * 10 ) / 10;
    };
};

module.exports = calculateTotalPoints;