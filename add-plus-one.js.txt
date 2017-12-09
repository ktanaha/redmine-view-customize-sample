/*
  Path patter : /issues/[0-9]+
  Type        : JavaScript
  
  Add the value of the custom field of the specified numerical value.
*/

$(function() {
  var label = $('#attributes > div:nth-child(2) > div.splitcontentleft > p > label');
  var btn = '<button type="button" class="add-btn">+1</button>';
  label.append(btn);

  $('.add-btn').on('click', function () {
    var field = $('#issue_custom_field_values_1');
    field.val(Number(field.val()) + 1);
  });
});