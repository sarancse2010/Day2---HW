function reversestring(Inputparameter)
{
     let temp= "" ;
    for (let i=Inputparameter.length-1;i>=0;i--)
    {

     temp=temp+Inputparameter[i]
   

    }
    console.log(temp)
}
reversestring("saranya");

function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length ; i++)
         {
        if (str[i] != str[j]) 
        {
     
            return false;
        }
    j--;
         }
    return true;
}
console.log(isPalindrome("ramar"));
