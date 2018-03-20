angular.module('app').controller('mainCtrl', function($scope) {
    $scope.friends = [
        {
            name: 'Zach',
            age: 23

        },
        {
            name: 'Nakaash',
            age: 24
        },
        {
            name: 'Joey',
            age: 28
        }
    ];
    $scope.opts = [
        'name',
        'age'
    ];
    $scope.directions = [
        {
            name: 'Asc',
            value: '+'
        },
        {
            name: 'Desc',
            value: '-'
        }
    ];
});