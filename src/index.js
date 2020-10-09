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
    let str = '';
    let newStr = '';
    let arr = [];
    while(expr.length>0){
        str = expr.slice(0,10);
        expr = expr.slice(10,expr.length);
        for (let i = 0; i < str.length; i++) {
            if(str[i]=='*'){
                arr.push(' ');
                break;
            }
            if(str[i]==1){
                if(str[i+1]==0){
                    newStr+='.'
                    i++;
                }else if(str[i+1]==1){
                    newStr+='-'
                    i++;
                }
            }
        }
        if(newStr.length) arr.push(newStr);
        newStr = '';
    }
    let result = '';
    arr.forEach(item =>{
        for (const [key, value] of Object.entries(MORSE_TABLE)) {
            if(item === key) {
                result+=value;
            }else if(item === ' '){
                result+=' ';
                break;
            }
        }
    });
    return result;
}


module.exports = {
    decode
}