
// Capitalizes the first character of a string
function capitalize(str){
    if(str=="" || str == undefined || Number(str)!=NaN){
        return "Invalid Input!";
    }
    return str[0].toUpperCase()+str.slice(1);
}

// Reverses the characters of a string
function reverse(str){
    if(str=="" || str == undefined || Number(str)!=NaN){
        return "Invalid Input!";
    }
    return str.split().reverse().join("");
}

// Checks if a string contains another string
function contains(mystring,substr)
{
    if(mystring=="" || substr == ""){
        return "Invalid Input!";
    }
    result = mystring.includes(substr);
    return result;
}

module.exports = {capitalize,reverse,contains};