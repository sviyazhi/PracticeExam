//Q9
function vowelCount(sentence) {
    let matches = sentence.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(vowelCount("Hello World"));