﻿function listen() {
    window.onload = function() {
        window.addEventListener('storage', (e) => {
            alert('gg');
            localStorage.setItem(e.key, e.oldValue)
        });
    }
}

var key = 'noodles';

function checkLogin() {
    let user = localStorage.getItem("userInfo");
    if (user == null) {
        location.href = "login.html";
    } else {
        user = JSON.parse(decode((user), key));

        $('#user_name').html($('#user_name').html() + user['name']);
        $('#user_LV').html($('#user_LV').html() + user['LV']);
        $('#user_EXP').html($('#user_EXP').html() + user['user_EXP'] + ' / ' + getNeedEXP());
        $('#user_HP').html($('#user_HP').html() + user['HP']);
        $('#user_MP').html($('#user_MP').html() + user['MP']);
        $('#user_money').html($('#user_money').html() + user['user_money']);
        $('#user_ATK').html($('#user_ATK').html() + user['ATK']);
        $('#user_MATK').html($('#user_MATK').html() + user['MATK']);
        $('#user_DEF').html($('#user_DEF').html() + user['DEF']);
        $('#user_MDEF').html($('#user_MDEF').html() + user['MDEF']);
        $('#user_HIT').html($('#user_HIT').html() + user['HIT']);
        $('#user_FLEE').html($('#user_FLEE').html() + user['FLEE']);
        $('#user_ASPD').html($('#user_ASPD').html() + user['ASPD']);
        $('#user_STB').html($('#user_STB').html() + user['STB'] + '%');
        $('#user_skillPoint').html($('#user_skillPoint').html() + user['user_skillPoint']);

        $('#user_place').html('你現在的位置: ' + localStorage.getItem("user_place"));
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
            "name": name,
            "LV": 1,
            "user_EXP": 0,
            "HP": 100,
            "MP": 100,
            "user_money": 100,
            "ATK": 10,
            "MATK": 10,
            "DEF": 10,
            "MDEF": 10,
            "HIT": 70,
            "FLEE": 20,
            "ASPD": 10,
            "STB": 50,
            "user_skillPoint": 0,
            'skills': [12, 13]
        }
        let place = "青青草原";
        localStorage.setItem("userInfo", encode(JSON.stringify(obj), key));
        localStorage.setItem("user_place", place);
        location.href = "index.html";
    }
}

function delay(n) {
    return new Promise(function(resolve) {
        setTimeout(resolve, n * 1000); //n*1000為毫秒
    });
}

function clear_all() {
    localStorage.clear();
    location.href = "login.html";
}

function encode(f, j) {
    f = btoa(escape(f));
    var l = "";
    for (var c = 0; c < j.length; c++) { l += j.charCodeAt(c).toString() }
    var g = Math.floor(l.length / 5);
    var b = parseInt(l.charAt(g) + l.charAt(g * 2) + l.charAt(g * 3) + l.charAt(g * 4) + l.charAt(g * 5));
    var a = Math.ceil(j.length / 2);
    var h = Math.pow(2, 31) - 1;
    var d = Math.round(Math.random() * 1000000000) % 100000000;
    l += d;
    while (l.length > 10) { l = (parseInt(l.substring(0, 10)) + parseInt(l.substring(10, l.length))).toString() }
    l = (b * l + a) % h;
    var e = "";
    var k = "";
    for (c = 0; c < f.length; c++) {
        e = parseInt(f.charCodeAt(c) ^ Math.floor((l / h) * 255));
        if (e < 16) { k += "0" + e.toString(16) } else { k += e.toString(16) }
        l = (b * l + a) % h
    }
    d = d.toString(16);
    while (d.length < 8) { d = "0" + d }
    k += d;
    return k
};

function decode(f, j) {
    var l = "";
    for (var c = 0; c < j.length; c++) { l += j.charCodeAt(c).toString() }
    var g = Math.floor(l.length / 5);
    var b = parseInt(l.charAt(g) + l.charAt(g * 2) + l.charAt(g * 3) + l.charAt(g * 4) + l.charAt(g * 5));
    var a = Math.round(j.length / 2);
    var h = Math.pow(2, 31) - 1;
    var d = parseInt(f.substring(f.length - 8, f.length), 16);
    f = f.substring(0, f.length - 8);
    l += d;
    while (l.length > 10) { l = (parseInt(l.substring(0, 10)) + parseInt(l.substring(10, l.length))).toString() }
    l = (b * l + a) % h;
    var e = "";
    var k = "";
    for (c = 0; c < f.length; c += 2) {
        e = parseInt(parseInt(f.substring(c, c + 2), 16) ^ Math.floor((l / h) * 255));
        k += String.fromCharCode(e);
        l = (b * l + a) % h
    }
    return unescape(atob(k))
};

function skill_btn_reduce(n) {
    let point = Number($('#user_skillPoint').html().substring(10));
    let old = Number($('#SP_' + n).html());
    if (!old) {
        $('#SP_' + n).html(0);
    } else {
        $('#user_skillPoint').html('你擁有的能力點 : ' + (point + 1));
        $('#SP_' + n).html(old - 1);
    }
}

function skill_btn_add(n) {
    let point = Number($('#user_skillPoint').html().substring(10));
    let old = Number($('#SP_' + n).html());
    if (point) {
        $('#user_skillPoint').html('你擁有的能力點 : ' + (point - 1));
        $('#SP_' + n).html(old + 1);
    }
}

function skill_confirm() {
    let user = JSON.parse(decode(localStorage.getItem("userInfo"), key));
    let str = Number($('#SP_0').html());
    let int = Number($('#SP_1').html());
    let vit = Number($('#SP_2').html());
    let agi = Number($('#SP_3').html());
    let dex = Number($('#SP_4').html());
    let total = str + int + vit + agi + dex;
    if (total == 0) {
        $('#err_msg').html('請分配點數!');
    } else if (total <= user['user_skillPoint']) {
        user['HP'] += (vit * 2) * 10;
        user['MP'] += (int * 1) * 5;
        user['ATK'] += str * 2;
        user['MATK'] += int * 2;
        user['DEF'] += vit * 1;
        user['MDEF'] += vit * 1;
        user['HIT'] += dex * 2;
        user['FLEE'] += agi * 2 + dex * 1;
        user['ASPD'] += agi * 1;

        user['user_skillPoint'] -= total;

        localStorage.setItem("userInfo", encode(JSON.stringify(user), key));

        for (let i = 0; i < 5; i++) {
            $('#SP_' + i).html(0);
        }

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: '強化成功!'
        });
    } else {
        $('#err_msg').html('存在異常，請重新整理再試試');
    }
}