// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const backspaceString = (string) => {
    let output = [];
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "#") {
            output.pop();
        } else {
            output.push(string[i]);
        }
    }

    return output.join('');
}
var backspaceCompare = function(s, t) {
    return backspaceString(s) === backspaceString(t);
};