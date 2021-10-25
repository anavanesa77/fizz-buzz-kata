import fizzBuzzStage1 from '../src/FizzBuzzStage1'
import fizzBuzzStage2 from '../src/FizzBuzzStage2'

describe('Stage 1: FizzBuzz kata should ', () => {
    it('not print any Fizz or buzz', () => {
        expect(fizzBuzzStage1(1)).toEqual(["1"])
    })
    it('print Fizz when number is divisible by 3', () => {
        expect(fizzBuzzStage1(3)).toEqual(["1", "2", "Fizz"])
    })
    it('print Buzz when number is divisible by 5', () => {
        expect(fizzBuzzStage1(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"])
    })
    it('print Buzz when number is divisible by 3 and 5', () => {
        expect(fizzBuzzStage1(50)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"])
    })
})

describe('Stage 2: FizzBuzz kata should ', () => {
    it('not print any Fizz or buzz', () => {
        expect(fizzBuzzStage2(1)).toEqual(["1"])
    })
    it('print Fizz when number is divisible by 3', () => {
        expect(fizzBuzzStage2(3)).toEqual(["1", "2", "Fizz"])
    })
    it('print Buzz when number is divisible by 5', () => {
        expect(fizzBuzzStage2(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"])
    })
    it('print Buzz when number is divisible by 3 and 5', () => {
        expect(fizzBuzzStage2(50)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "Fizz", "14", "FizzBuzz", "16", "17", "Fizz", "19", "Buzz",
            "Fizz", "22", "Fizz", "Fizz", "Buzz", "26", "Fizz", "28", "29", "FizzBuzz", "Fizz", "Fizz", "Fizz", "Fizz", "FizzBuzz", "Fizz", "Fizz", "Fizz", "Fizz", "Buzz",
            "41", "Fizz", "Fizz", "44", "FizzBuzz", "46", "47", "Fizz", "49", "Buzz"])
    })
    it('print Buzz when number is divisible by 3 and 5', () => {
        expect(fizzBuzzStage2(55)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "Fizz", "14", "FizzBuzz", "16", "17", "Fizz", "19", "Buzz",
            "Fizz", "22", "Fizz", "Fizz", "Buzz", "26", "Fizz", "28", "29", "FizzBuzz", "Fizz", "Fizz", "Fizz", "Fizz", "FizzBuzz", "Fizz", "Fizz", "Fizz", "Fizz", "Buzz",
            "41", "Fizz", "Fizz", "44", "FizzBuzz", "46", "47", "Fizz", "49", "Buzz", "Fizz", "Buzz", "Fizz", "Fizz", "Buzz"])
    })
})
