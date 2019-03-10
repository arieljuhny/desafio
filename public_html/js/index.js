/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', function DemoController($scope) {
    $scope.searchMode = "contains";
    
    $scope.treeViewOptions = {
        bindingOptions: {
            searchMode: "searchMode",
        },
        items: products,
        width: 500,
        searchEnabled: true
    };

    $scope.searchModeOptions = {
        bindingOptions: {
            value: "searchMode"
        },
    	dataSource: ["contains", "startsWith"]
    };
});

