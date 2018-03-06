"use strict";

$(function(){
    var rows = [];
    var $min =$('#min');
    var $max=$('#max');
    var $table=$('#rates');

    var people = [ {
        name:'Casey',
        rate: 60},{
        name:'Camille',
        rate:80},{
        name:'Gordon',
        rate:75},{
        name:'Nigel',
        rate:120}];

    function makeRows(){
        people.forEach(function(currentRecord){
            var $row = $('<tr></tr>');
            $row.append($('<td></td>').text(currentRecord.name));
            $row.append($('<td></td>').text(currentRecord.rate));
            rows.push({
                person:currentRecord,
                $element:$row
            });
        });
    }
    function appendRows(){
        var $tbody=$('<tbody></tbody>');
        rows.forEach(function(row) {
            $tbody.append(row.$element);
        });
        $table.append($tbody);
    }

    function update(min,max){
        rows.forEach(function(row){
            if(row.person.rate>=min&&row.person.rate<=max){
                row.$element.show();
            } else{
                row.$element.hide();
            }
        });
    }
    function init() {
        $('#slider').noUiSlider({
            range: [0,150],start:[65,90],handles:2, margin:20, connect:true,serialization:{to:[$min,$max],resolution:1}
        }).change(function(){update($min.val(),$max.val());});
        makeRows();
        appendRows();
        update($min.val(),$max.val());
    }
    $(init);
}());