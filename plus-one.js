/*
  Path patter : /issues/[0-9]+
  Type        : JavaScript
  
  Add the value of the custom field of the specified numerical value.
*/
$(function() {
  count_up_btn();
  
  $(document).ajaxComplete(function(){
    count_up_btn();
  });
});

function count_up_btn() {
  var field = $('#issue_custom_field_values_1');
  field.hide();

  var btn = '<button type="button" class="count_up_btn">+1</button>';
  field.after(btn);
  
  var count = '<span class="issue_custom_field_values_1_label">'+ field.val() +'</span>';
  $('.count_up_btn').after(count)

  $('.count_up_btn').on('click', function () {
    var label = $('.issue_custom_field_values_1_label');
    var num = Number(field.val()) + 1;
    field.val(num)
    label.text(num);
  });
}
