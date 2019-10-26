//Function using loop
let decimalToBinary = function (integer) {                      //Function that we call to convert dec to binary
        let binFormat = "";                                     //Stores the values of remainders
        for(let i = integer; i>=1; i = Math.trunc(i/2)) {    //Loop to break down number completely
            binFormat = (i%2) + binFormat;
    }
        return binFormat;                                       //Returns the binary value
}

//Function using recursion
let decimalToBinaryRecursion = function (num) {
    if (num == 0) {
        return '';                          //When the number has been depleted to zero, prints out a space to signify end of that number
    }
    else {
        return decimalToBinaryRecursion(Math.trunc(num/2)) + (num%2).toString();    //Stores and calculates remainder values + divides integer
    }

}

//Loop that prints out the values of both functions from 0-20.
for(let i = 0; i<=20; i++) {
    console.log('The binary value of ' + i + ' Looping is: ' + decimalToBinary(i)
        + '. The binary value of ' + i + ' Recursively is: ' + decimalToBinaryRecursion(i));
}

//End