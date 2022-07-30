class MyStringFunctions {


    toAbbreviation (sentence) {
        let abbr = '';
        const sentenceWords = sentence.toUpperCase().split(' ');
        for (let i=0 ; i <= sentenceWords.length-1 ; i++ ) {
            abbr = abbr + sentenceWords[i].substring(0,1);
        }
        return abbr;
    }


    /**
     * to convert String into TitleCase
     */
    toTitleCase (sentence) {
        let converted = '';
        const sentenceWords = sentence.toLowerCase().split(' ');
        for (let i=0 ; i <= sentenceWords.length-1 ; i++ ) {
            converted = converted + sentenceWords[i].substring(0,1).toUpperCase() + sentenceWords[i].substring(1) + " ";
        }
        return converted.trim();
    }


}
module.exports = MyStringFunctions;

/**
 * module.exports -> exports the entire class
 * 
 * require line -> imports the entire class
 * 
 * use object to access a function in the class
 */