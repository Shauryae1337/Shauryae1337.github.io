$(document).ready(function () {
    page_click_events();
});

function page_click_events() {

    $('#btnLogin').on('click', function (e) {
        e.preventDefault();
        var frmLogin = $('#frmLogin');
        var frmLoginParsley = frmLogin.parsley();
        frmLoginParsley.validate();
        if (!frmLogin.parsley().isValid()) {
            return false;
        }
        var btn = $(this);
        btn.text('Processing...');
        btn.addClass('disabled');

        $.ajax({
            method: 'POST',
            url: $('#hdfBaseUrl').val() + 'ForgotPassword/CheckForgotPassword',
            data: frmLogin.serialize() + '&' + 'CaptchaStr=' + $('#txtCaptcha').val(),
            async: false
        }).done(function (data) {
            if (data['flagCaptcha'].toString().toLowerCase() == 'true') {
                if (data['c'] == 'success') {
                    SuccessCallBackMedium(data['m']);
                    setTimeout(function () { window.location.href = $('#hdfBaseUrl').val() + "Login"; }, 5000);
                    //btn.text('Redirecting...');
                    //window.location.href = $('#hdfBaseUrl').val() + "Login";
                }
                else if (data['c'] == 'InvalidEmail') {
                    ErrorMessage(data['m']);
                    $('#txtPassword').val('');
                    btn.text('Send Email');
                    btn.removeClass('disabled');
                }
                else {
                    ErrorMessage(data['m']);
                    $('#txtPassword').val('');
                    btn.text('Send Email');
                    btn.removeClass('disabled');
                }
            }
            else {
                btn.text('Login');
                btn.removeClass('disabled');
                ErrorMessage("Invalid Captcha !!!");
                $('#btnRefreshCaptcha').trigger('click');
                $('#txtCaptcha').val('');
            }

        }).error(function () {
            btn.text('Send Email');
            btn.removeClass('disabled');
            ErrorMessage("Somthing went wrong.Please try again.");
        });
    });
}