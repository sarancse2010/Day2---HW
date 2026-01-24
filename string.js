function lengthOfLastWord(s) 
{
    let words = s.split(" ");

     let lastWord = words[words.length - 1];

    return lastWord.length;
}
console.log(lengthOfLastWord("Hello World"));

function lengthOfLastWordTrim(s)
 {
    let trimmedString = s.trim();

    let words = trimmedString.split(" ");

     let lastWord = words[words.length - 1];

    
    return lastWord.length;
}
console.log(lengthOfLastWordTrim(" fly me to the moon ")); 


function isAnagram(str1, str2) {
    
    let sortedStr1 = str1.toLowerCase().split('').sort().join();
    let sortedStr2 = str2.toLowerCase().split('').sort().join();

    return sortedStr1 === sortedStr2;
}

console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world"));
