function findLongestWord(str) {
    const stringArray = str.split(" ");
    const orderedArray = stringArray.sort((a, b) => {
      return a.length < b.length;
    });
    return orderedArray[0];
  }
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));