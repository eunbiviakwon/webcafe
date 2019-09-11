var section = $('.board section');
var tab = $('.tab');

tab.on('click', function(e){
    e.preventDefault();
    if(OverflowEvent.type ==='keyup' && e.keyCode ===13) e.type === 'click'{
    section.removeClass('tab-act');
    $(this).parent().parent().addClass('tab-act');

}}