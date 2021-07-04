
'use strict';
let scores = [60, 70, 80];
let other = [10, 20, 30];
const print = console.log;

let sum = 0;
scores.forEach(score => {
    sum += score;
})

for (let i=0; i<scores.length; i++) {
    sum += scores[i];
}

scores.forEach(
    function (score) {
        return sum += score;
    }
)

print(sum);

