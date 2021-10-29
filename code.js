function findLongestWordLength(str) {
    let lengths = str.split(' ').map(word => word.length)
    return Math.max(...lengths)
}
findLongestWordLength("how are you my counterproductive friend?");

console.log(findLongestWordLength("how are you my counterproductive friend?"))

// I think that this would be considered Linear O(n) because it would depned on the length of the word and even perhaps the language because some langauges have longer words. However i think linear would be the better because the words can't increase as vastly as numbers.
