function SuccessMessageCallBack(msg, callBack) {
    $.confirm({
        title: 'Alert!',
        content: msg,
        type: 'green',
        useBootstrap: false,
        boxWidth: '400px',
        backgroundDismiss: false,
        backgroundDismissAnimation: 'shake',
        buttons: {
            ok: {
                btnClass: 'btn-primary',
                action: callBack
            }
        }
    });
}

function SuccessMessage(msg) {
    $.alert({
        title: 'Alert!',
        content: msg,
        useBootstrap: false,
        boxWidth: '400px',
        type: 'green',
        backgroundDismiss: false,
        backgroundDismissAnimation: 'shake',
        buttons: {
            ok: {
                btnClass: 'btn-primary'
            }
        }
    });
}

function ErrorMessage(msg) {
    $.alert({
        title: 'Error!',
        content: msg,
        type: 'red',
        useBootstrap: false,
        boxWidth: '400px',
        backgroundDismiss: false,
        backgroundDismissAnimation: 'shake',
        buttons: {
            ok: {
                btnClass: 'btn-primary'
            }
        }
    });
}

function ErrorMessageCallBack(msg, callBack) {
    $.confirm({
        title: 'Error!',
        content: msg,
        type: 'red',
        useBootstrap: false,
        boxWidth: '500px',
        backgroundDismiss: false,
        backgroundDismissAnimation: 'shake',
        buttons: {
            ok: {
                btnClass: 'btn-primary',
                action: callBack
            }
        }
    });
}

function ConfirmCallBack(msg, callBack) {
    $.confirm({
        title: 'Confirm!',
        content: msg,
        backgroundDismiss: false,
        boxWidth: '500px',
        useBootstrap: false,
        backgroundDismissAnimation: 'shake',
        type: 'gray',
        buttons: {
            yes: {
                btnClass: 'btn-primary',
                action: callBack
            },
            cancel: {
                btnClass: 'btn-primary',
            }
        }
    });
}

function SuccessCallBackMedium(msg, callBack) {
    $.confirm({
        title: 'Success!',
        content: msg,
        autoClose: 'ok|8000',
        boxWidth: '500px',
        useBootstrap: false,

        type: 'green',
        backgroundDismiss: false,
        backgroundDismissAnimation: 'shake',
        buttons: {
            ok: {
                btnClass: 'btn-primary',
                action: callBack
            }
        }
    });
}

function AlertMessage(msg) {
    $.alert({
        title: 'Alert!',
        content: msg,
        type: 'blue',
        useBootstrap: false,
        boxWidth: '400px',
        backgroundDismiss: false,
        backgroundDismissAnimation: 'shake',
        buttons: {
            ok: {
                btnClass: 'btn-primary'
            }
        }
    });
}