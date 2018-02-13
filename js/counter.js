$('#plus').click(function () {
    $(this).prev().val(+$(this).prev().val() + 1);
});
$('#minus').click(function () {
    if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
});