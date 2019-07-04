
const calculateStylePoints = (styleNotes) => {
    if(styleNotes.length != 5){
        return 'There should be five notes'
    }else if(isNaN(styleNotes.filter((el) => isNaN(parseInt(el))))){
        return 'Notes should be numbers only'
    }else {   
        styleNotes.splice(styleNotes.indexOf(Math.max(...styleNotes)), 1);
        styleNotes.splice(styleNotes.indexOf(Math.min(...styleNotes)), 1)
        return styleNotes.reduce((a, b) => a + b)
    }
}

module.exports = calculateStylePoints