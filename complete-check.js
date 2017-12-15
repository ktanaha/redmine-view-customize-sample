/*
  Path patter : /issues/[0-9]+
  Type        : JavaScript
  
  Perform input check when completing status
*/

$(function() {
    $('#issue-form input[type="submit"]').on('click', function(event) {
        var status = $('#issue_status_id').val();
        // example 'complete date' id is 1
        var completeDate = $('#issue_custom_field_values_1').val();
        if (status === '5' && !completeDate) {
            aleart('alert message');
            return false;
        }
    });
});