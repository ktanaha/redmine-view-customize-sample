/*
  Path patter : /issues/[0-9]+
  Type        : JavaScript
  
  Add the value of the custom field of the specified numerical value.
*/
$(function() {
  count_up_down();
  
  $(document).ajaxComplete(function(){
    count_up_down();
  });
});

function count_up_down() {
  var field = $('#issue_custom_field_values_1');
  field.hide();

  var minus_btn = '<button type="button" class="count_down_btn">-1</button>';
  field.after(minus_btn);

  var plus_btn = '<button type="button" class="count_up_down">+1</button>';
  $('.count_down_btn').after(plus_btn);
  
  var count = '<span class="issue_custom_field_values_1_label">'+ field.val() +'</span>';
  $('.count_up_down').after(count)

  $('.count_up_down').on('click', function () {
    var label = $('.issue_custom_field_values_1_label');
    var num = Number(field.val()) + 1;
    field.val(num);
    label.text(num);
  });

  $('.count_down_btn').on('click', function () {
    var label = $('.issue_custom_field_values_1_label');
    var num = Number(field.val()) - 1;
    field.val(num);
    label.text(num);
  });
}
