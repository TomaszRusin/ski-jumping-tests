
const calculateStylePoints = (styleNotes) => {
    if(styleNotes.length != 5){
        console.log('There should be five notes')
        return null
    }else if(isNaN(styleNotes.filter((el) => isNaN(parseInt(el))))){
        console.log('Notes should be numbers only')
        return null
    }else {   
        styleNotes.splice(styleNotes.indexOf(Math.max(...styleNotes)), 1);
        styleNotes.splice(styleNotes.indexOf(Math.min(...styleNotes)), 1)
        return styleNotes.reduce((a, b) => a + b)
    }
}

module.exports = calculateStylePoints