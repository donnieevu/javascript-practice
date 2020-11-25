//RANDOM INTERVIEW PRACTICE

function consecutiveOne(arr) {
    let currentConsec = 0;
    let maxConsec = 0;
    for (let i = 0; i < arr.length; i++) {
        currentConsec = arr[i] === 1 ? currentConsec += 1 : 0; //ternary operator
        maxConsec = maxConsec < currentConsec ? currentConsec : maxConsec; //ternary operator
        if (arr[i] === 1) {
            currentConsec++
        } else {
            currentConsec = 0;
        }

        if (maxConsec < currentConsec) {
            maxConsec = currentConsec;
        }
    }
    return maxConsec;
}
console.log(consecutiveOne([1, 1, 0, 1, 1, 1]));

//first i will create counter to keep track of consectives

//then i will compare the numbers within the array 
//to eachother to see if they are the same

//if they are the same, i will add it to the counter
//if they are different i will go to the next number until 
//it hits consecutively again


//RANDOM INTERVIEW PRACTICE #2

// given a set of stairs with x amt of steps, able to go up 1 or 2.
//find how many ways there are to go up these set of stairs 

// make arr with first 2 steps of fibonacci
// after that you take # of steps and finish the fibonnacci sequence and grab the last element to return solution
// 3 steps
// [1,1,2,3]

function upStairs(steps) {
    let fibArr = [1, 1];
    for (let i = 0; i < steps - 1; i++) {
        let prev = fibArr[i]
        let current = fibArr[i + 1]
        let next = prev + current;
        console.log('prev: ', prev);
        console.log('curr:', current);
        console.log('next: ', next);
        fibArr.push(next)
    }
    return fibArr[steps]
}
console.log(upStairs(6));

//6
//1 1 1 1 1 1 1
//2, 1, 1, 1, 1
//1, 2, 1, 1, 1
//1, 1, 2, 1, 1 
//1, 1, 1, 2, 1
//1, 1, 1, 1, 2
//1, 2, 2, 1
//1, 2, 1, 2
//1, 1, 2, 2
//2, 2, 1, 1
//2, 1, 2, 1
//2, 1, 1, 2
//2, 2, 2
// n=1 sol=1
// n=2 sol= n+prev = 2 (prev)
// n=3 sol= n+prev = 5
// 1+1 = 2+1 = 3+2 = 5+3 = 8+5 = 13

// [1,1,n[0]+n[1], n[1]+ n[2], n[2] + n[3]]
//assume n[0]= 1
//to get current element, you add previous element with the previous previous element.
//[1,1,2,3,5,8,13,21]
//how would you store the fibonacci numbers to find solution..

// 3
// 1,1,1
// 1,2
//2,1


// INTERVIEW Q3
//find unique
// given an array integers, every element appears twice except 1.
// return element that appears once.
// i.e i:[2,2,1] o:1

//go through array and get the first element.
//take first element and continute comparing each element to whole array.
//if first element doesnt match with any other element, return first element,
//else, return odd element.

function unique(arr) {
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                continue;
            }
            if (arr[i] === arr[j]) {
                break;
            } else {
                if (j === arr.length - 1) {
                    return `FOUND UNIQUE: ${arr[i]}`;
                }
            }
        }
    }
}
console.log(unique([1, 2, 3, 1, 3]));

