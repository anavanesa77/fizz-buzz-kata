## Install dependencies

After forking this repository and cloning from your personal repository, in order to be able to work with it, dependencies need to be installed. Go to the root folder and type the next command in your terminal:

`npm install`

Now, you can open the project and start coding.


## Run test

In order to run the test and keep them running while changes are applied, type the next command in your console:

`npm run test:watch`


# KATA FIZZ-BUZZ

## Problem description

Write a program that prints one line for each number from 1 to number X.
Your program will get as an input this number (It must be between 1 and 100).


## Stage 1

Rules:
- For multiples of 3 print "Fizz" instead of the number.
- For the multiples of 5 print "Buzz" instead of the number.
- For numbers which are multiples of both 3 and 5 print "FizzBuzz" instead of the number.


Example:

### **Input**:
number = 15


### **Output**:
["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]



## Stage 2

New requirements:

- A number is fizz if it is divisible by 3 or if it has a 3 in it.
- A number is buzz if it is divisible by 5 or if it has a 5 in it.