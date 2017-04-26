//******************** fix equal width grid ********************
var number = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'
];
function loadEqualWidthGrid() {
    var el = $('.ui.equal.width.grid');
    var count = el.children().length;
    var width = 100/count;

    el.find('>.column').css('width', width+'%');
}


loadEqualWidthGrid();
