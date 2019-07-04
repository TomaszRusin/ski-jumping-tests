
const calculateStylePoints = (styleNotes) => {
    styleNotes.splice(styleNotes.indexOf(Math.max(...styleNotes)), 1);
    styleNotes.splice(styleNotes.indexOf(Math.min(...styleNotes)), 1)
    return styleNotes.reduce((a, b) => a + b)
}

console.log(calculateStylePoints([2,3,4,5,6]))


module.exports = calculateStylePoints