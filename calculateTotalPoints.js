import calculateDistancePoints from './calculateDistancePoints';
import calculateStylePoints from './calculateStylePoints';

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
    const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
    const stylePoints = calculateStylePoints(styleNotes);
  
    return distancePoints + stylePoints + windFactor + gateFactor;
}

module.exports = calculateTotalPoints;