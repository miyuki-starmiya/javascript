
angular.module('myapp', [])
    .controller('mainCtrl', ['$scope', function($scope) {
    }])

let input = document.querySelector('input');

input.addEventListener('keydown', () => {
    console.log(input.value);
});

