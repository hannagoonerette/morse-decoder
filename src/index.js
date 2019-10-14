const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    arr = expr.split('');
    let arrLetter = [];
    let j = 0;
    for (let i = 0; i < arr.length; i = i+10){
        arrLetter[j] = arr.slice(i , i+10); 
        j++;
    }
    let charCode;
    let result = [];
    for (j = 0; j < arrLetter.length; j++){
        charCode = arrLetter[j].join('');
        let tmp = 0;
        let comp;
        let charMorse = [];
        do {
            if (charCode[0] == '*'){
                comp=' ';
                tmp = charCode.length+1;
            }
            else    
            {
                let currentSymbol = charCode.slice(tmp, tmp+2); 
                switch (currentSymbol){
                    case '10': 
                        comp = '.';
                        break;
                    case '11': 
                        comp = '-';
                        break;
                    case '00': 
                        comp = '';
                        break;
                }
                tmp+=2;
            }
        charMorse.push(comp);
        }
        while (tmp < charCode.length);
        charMorse = charMorse.join('');
        if (MORSE_TABLE[charMorse] == undefined){
            result.push(' ');
        }
        else{
            result.push(MORSE_TABLE[charMorse]);    
        }
    }
    return(result.join(""));
}

module.exports = {
    decode
}