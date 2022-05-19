// A E I O U
// U == UU
// E = EE

const phrase = "turpentine and turtles";
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

let translatedToWhale = function (input) {
    for (let i = 0; i < input.length; i++) {
        let character = input[i];
        // debugger;
        // console.log(character, '--Original');
        
        if (character === 'e') { 
            resultArray.push(input[i]);
        } else if (character === 'u') {
            resultArray.push(input[i]);}
            
            for (let j = 0; j < vowels.length; j++) {
                let whaleCharacter = vowels[j];
                // console.log(whaleCharacter, '--Whale');
                
                if (character === whaleCharacter) {
                    resultArray.push(whaleCharacter)};
                }
            };
        };
        
translatedToWhale(phrase);
// console.log(resultArray);
// debugger;
const resultString = resultArray.join("").toUpperCase();
console.log(resultString);
