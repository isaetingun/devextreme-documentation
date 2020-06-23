﻿//<!--@jQuery-->
$(function () {
    $("#pivotGridContainer").dxPivotGrid({
        dataSource: {
            store: sales,
            fields: [{
                dataField: "region",
                width: 120,
                area: "row"
            }, {
                dataField: "city",
                width: 150,
                area: "row",
                selector: function (data) {
                    return data.city + " (" + data.country + ")";
                }
            }, {
                dataField: "date",
                dataType: "date",
                area: "column"
            }, {
                dataField: "amount",
                summaryType: "sum",
                format: "currency",
                area: "data"
            }]
        },
        fieldChooser: { enabled: false },
        export: { enabled: true }
    });
    
    $("#textBoxContainer").dxTextBox({
        placeholder: "Type in a Text for the `Export to Excel file` Menu Item...",
        value: 'Export to Excel file',
        onValueChanged: function (e) {
            var pivotGrid = $('#pivotGridContainer').dxPivotGrid('instance');
            pivotGrid.option('texts.exportToExcel', e.value);
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    exportToExcelText: ko.observable('Export to Excel file')
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('pivotGridController', function ($scope) {
        $scope.exportToExcelText = "Export to Excel file";
        $scope.cityText = function (data) {
            return data.city + ' (' + data.country + ')';
        };
        $scope.sales = sales;
    });
    
angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->