/*
  Path patter : /issues/[0-9]+
  Type        : JavaScript
  
  Add the value of the custom field of the specified numerical value.
*/
$(function() {
  change_field();
  add_btn();
  
  $(document).ajaxComplete(function(){
    change_field();
    add_btn();
  });
});

function add_btn() {
  var label = $('#issue_custom_field_values_1_label');
  var btn = '<button type="button" class="add-btn">+1</button>';
  label.append(btn);

  $('.add-btn').on('click', function () {
    var field = $('#issue_custom_field_values_1_label');
    field.val(Number(field.val()) + 1);
  });
}

function change_field() {
  var field = $('#issue_custom_field_values_1');
  field.hide();

  var label = '<div id="issue_custom_field_values_1_label">'+ field.val() +'</div>';
  field.append(label)
}
