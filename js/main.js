$(".login-btn").click(function (e) {
    e.preventDefault();
    $(`input`).removeClass("error");
    let login = $('input[name="login"]').val();
    let pass = $('input[name="password"]').val();
    $.ajax({
        url: "vendor/signin.php",
        type: "POST",
        dataType: "json",
        data: {
            login: login,
            password: pass,
        },
        success: function (data) {
            if (data.status) {
                document.location.href = "/profile.php";
            } else {
                if (data.type === 1) {
                    data.fields.forEach(function (field) {
                        $(`input[name="${field}"]`).addClass("error");
                    });
                }
                $(".msg").removeClass("none").text(data.message);
            }
        },
    });
});

$(".register-btn").click(function (e) {
    e.preventDefault();
    $(`input`).removeClass("error");
    let login = $('input[name="login"]').val();
    let pass = $('input[name="password"]').val();
    let pass_confirm = $('input[name="password_confirm"]').val();
    $.ajax({
        url: "vendor/signup.php",
        type: "POST",
        dataType: "json",
        data: {
            login: login,
            password: pass,
            password_confirm: pass_confirm,
        },
        success: function (data) {
            if (data.status) {
                $(".msg").removeClass("none").text(data.message);
                setTimeout(function() {
                    document.location.href = "/index.php";
                }, 2000);
                           }
            else {
                if (data.type === 1) {
                    data.fields.forEach(function (field) {
                        $(`input[name="${field}"]`).addClass("error");
                    });
                }
                $(".msg").removeClass("none").text(data.message);
            }
        },
    });
});
