//Q11
function countVowels(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const result = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (let char of sentence.toLowerCase()) {
        if (vowels.includes(char)) {
            result[char]++;
        }
    }
    return result;
}

console.log(countVowels("Beautiful day at the zoo"));