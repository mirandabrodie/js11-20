// Javascript problems 11-20!

// This is First Last 6, javascript problem #11.
function firstLast6(array){
    if(array[0] === 6 || array[array.length - 1] === 6){
        return true;
    }else{
        return false;
    }
}


// This is Has 23, javascript problem #12.
function has23(array){
    if(array.includes(2) || array.includes(3)){
        return true;
    }else{
        return false;
    }
}


// This is Fix 23, javascript problem #13.
function fix23(nums){
    array = [nums[0], nums[1], nums[2]];
    if(nums[0] === 2 && nums[1] === 3){
        array[1] = 0;
    }
    if(nums[1] === 2 && nums[2] === 3){
        array[2] = 0;
    }
    return array;
}


// This is Count Y Z, javascript problem #14.
function countYZ(string){
    var count = 0;
    string = string.toLowerCase();
    if(string.charAt(string.length - 1) === 'y' || string.charAt
        (string.length - 1) === 'z'){
        count ++;
    }
    for(var i = 0; i < string.length; i++){
        if(string[i] === ' ' && string[i - 1] === 'y'){
            count++;
        }
        if(string[i] === ' ' && string[i - 1] === 'z'){
            count++;
        }
    }
    return count;
}


// This is End Other, javascript problem #15.
function endOther(string1, string2){
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    if(string1.endsWith(string2) || string2.endsWith(string1)){
        return true;
    }else{
        return false;
    }
}


// This is Star Out, javascript problem #16.
function starOut(string){
    var answer = '';
    for(var i = 0; i < string.length; i++){
        if(string[i + 1] !== '*' && string[i - 1] !== '*' &&
            string[i] !== '*'){
            answer = answer + string.charAt(i);
        }
    }
    return answer;
}


// This is Get Sandwich, javascript problem #17.
function getSandwich(string){
    var a = string.indexOf("bread");
    var b = string.lastIndexOf("bread");
    if(string.includes("bread") && a !== b){
        string = string.substring(a + 5, b);
    }else {
        return '';
    }
    return string;
}


// This is Can Balance, javascript problem #18.
function canBalance(array){
    var sum1 = 0;
    var sum2 = 0;
    for(var i = 0; i < array.length; i++){
        sum1 = sum1 + array[i];
        if(array.length > 1){
            for(var j = i + 1; j < array.length; j++){
                sum2 = sum2 + array[j];
            }
            if(sum1 === sum2){
                return true;
            }else{
                sum2 = 0
            }
        }
    }
    if(sum1 !== sum2){
        return false;
    }
}


// This is Count Clumps, javascript problem #19.
function countClumps(array){
    var clump = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] === array [i+1]){
            for(var j = i +1; j < array.length; j++){
                if(array[j] !== array[j + 1]){
                    i = j;
                    break;
                }
            }
            clump = clump + 1;
        }
    }
    return clump;
}


// This is Evenly Spaced, javascript problem #20.
function evenlySpaced(a,b,c){
    var arr = [a, b, c];
    var max = Math.max(a, b, c);
    var min = Math.min(a, b, c);
    if(arr.includes((min + max)/2)){
        return true;
    }else{
        return false;
    }
}




