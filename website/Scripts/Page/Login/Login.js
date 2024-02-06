$(document).ready(function () {
    //page_init();
    page_click_events();
});

function page_init() { }

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

        var headers = { __RequestVerificationToken: $('input[name="__RequestVerificationToken"]').val() };
        $.ajax({
            method: 'POST',
            url: $('#hdfBaseUrl').val() + 'Login/CheckLogin',
            data: frmLogin.serialize() + '&' + 'CaptchaStr=' + $('#txtCaptcha').val(),
            headers: headers,
            async: false,
            success: function (data) {
                if (data['flagCaptcha'].toString().toLowerCase() == 'true') {
                    if (data['flagPasswordChanged'] == false) {
                        window.location.href = $('#hdfBaseUrl').val() + "ChangePassword";
                    }
                    else {
                        if (data['c'] == 'success') {
                            btn.text('Redirecting...');
                            $('#btnRefreshCaptcha').trigger('click');
                            $('#txtCaptcha').val('');
                            window.location.href = $('#hdfBaseUrl').val() + "Admin/Dashboard";
                        }
                        else {
                            ErrorMessage(data['m']);
                            $('#txtPassword').val('');
                            btn.text('Login');
                            btn.removeClass('disabled');
                            $('#btnRefreshCaptcha').trigger('click');
                            $('#txtCaptcha').val('');
                        }
                    }
                }
                else {
                    btn.text('Login');
                    btn.removeClass('disabled');
                    ErrorMessage("Invalid Captcha !!!");
                    $('#btnRefreshCaptcha').trigger('click');
                    $('#txtCaptcha').val('');
                }
            }
        }).fail(function (err) {
            btn.text('Login');
            btn.removeClass('disabled');
            $('#btnRefreshCaptcha').trigger('click');
            $('#txtCaptcha').val('');
            ErrorMessage("Somthing went wrong.Please try again.");
        });
    });
}