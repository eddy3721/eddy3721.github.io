function checkLogin() {
    let user = JSON.parse(localStorage.getItem("userInfo"))
    if (user == null) {
        location.href = "login.html";
    } else {
        $('#user_name').after(' ' + user['user_name']);
        $('#user_HP').after(' ' + user['user_HP']);
        $('#user_MP').after(' ' + user['user_MP']);
        $('#user_money').after(' ' + user['user_money']);
        $('#user_ATK').after(' ' + user['user_ATK']);
        $('#user_MATK').after(' ' + user['user_MATK']);
        $('#user_DEF').after(' ' + user['user_DEF']);
        $('#user_MDEF').after(' ' + user['user_MDEF']);
        $('#user_HIT').after(' ' + user['user_HIT']);
        $('#user_FLEE').after(' ' + user['user_FLEE']);
        $('#user_ASPD').after(' ' + user['user_ASPD']);
        $('#user_CSPD').after(' ' + user['user_CSPD']);
    }
}

function save_name() {
    let name = $('#login_name').val();
    if (name.length < 2 || name.length > 12) {
        let msg = '<p style="color: red;">名字不符合規定!</p>'
        $('#err_msg').append(msg);
    } else {
        $('#err_msg').html('');
        let obj = {
            "user_name": name,
            "user_HP": 100,
            "user_MP": 100,
            "user_money": 100,
            "user_ATK": 10,
            "user_MATK": 10,
            "user_DEF": 10,
            "user_MDEF": 10,
            "user_HIT": 70,
            "user_FLEE": 20,
            "user_ASPD": 10,
            "user_CSPD": 10
        }
        localStorage.setItem("userInfo", JSON.stringify(obj));
        location.href = "index.html";
    }
}