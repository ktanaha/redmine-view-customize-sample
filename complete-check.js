/*
  Path patter : /issues/[0-9]+
  Type        : JavaScript
  
  Perform input check when completing status
*/
$(function() {
    $('#issue_status_id').change(function() {
        var status = $('#issue_status_id').val();
        if (status === '5') {
            $('#issue_custom_field_values_1').css('background-coloe','#FF0000');
        }
    });
});

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