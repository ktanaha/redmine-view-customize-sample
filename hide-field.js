/*
  Path patter : /issues/[0-9]+
  Type        : JavaScript
  
  hide custome field.
*/
$(function() {
  remove();
  
  $(document).ajaxComplete(function(){
    remove();
  });
});

function remove() {
  $(function() {
    $("p:has(label[for=issue_custom_field_values_1])").empty();
  });
}
