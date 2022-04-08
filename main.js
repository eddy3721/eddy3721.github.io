function listen() {
    window.onload = function() {
        window.addEventListener('storage', (e) => {
            alert('gg');
            localStorage.setItem(e.key, e.oldValue)
        });
    }
}

var key = 'noodles';

function checkLogin() {
    let user = decode(localStorage.getItem("userInfo"), key);
    user = JSON.parse(user);
    if (user == null) {
        location.href = "login.html";
    } else {
        $('#user_name').html($('#user_name').html() + user['user_name']);
        $('#user_LV').html($('#user_LV').html() + user['user_LV']);
        $('#user_EXP').html($('#user_EXP').html() + user['user_EXP']);
        $('#user_HP').html($('#user_HP').html() + user['user_HP']);
        $('#user_MP').html($('#user_MP').html() + user['user_MP']);
        $('#user_money').html($('#user_money').html() + user['user_money']);
        $('#user_ATK').html($('#user_ATK').html() + user['user_ATK']);
        $('#user_MATK').html($('#user_MATK').html() + user['user_MATK']);
        $('#user_DEF').html($('#user_DEF').html() + user['user_DEF']);
        $('#user_MDEF').html($('#user_MDEF').html() + user['user_MDEF']);
        $('#user_HIT').html($('#user_HIT').html() + user['user_HIT']);
        $('#user_FLEE').html($('#user_FLEE').html() + user['user_FLEE']);
        $('#user_ASPD').html($('#user_ASPD').html() + user['user_ASPD']);
        $('#user_CSPD').html($('#user_CSPD').html() + user['user_CSPD']);

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
            "user_name": name,
            "user_LV": 1,
            "user_EXP": 0,
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

var monster = [
    ['史萊姆', 20, 10, 10, 0, 0, 1],
    ['野豬', 35, 13, 0, 4, 4, 2],
    ['黃金史萊姆', 45, 15, 15, 5, 5, 5],
    ['史萊姆王', 120, 20, 20, 9, 9, 10]
]

async function fighting(n) {
    $('#fight_1').attr('disabled', true);
    $('.report').empty();
    let content = '<p class="subtitle" id="report_title">行動報告</p>';
    let CD = [10, 30, 60];
    let user = JSON.parse(decode(localStorage.getItem("userInfo"), key));
    let m = monster[Math.floor(Math.random() * monster.length)].concat();
    let attacker = 0;
    let i = 2;
    let getEXP = 0;
    let getMoney = 0;

    content += '<div class="flex"><div class="numberReportLine">1</div>';
    content += user['user_name'] + ' 遇到了 ' + m[0] + '(lv.' + m[6] + ') !</div>';

    while (user['user_HP'] > 0 && m[1] > 0) {
        if (attacker == 0) {
            dmg = user['user_ATK'] - m[4];
            m[1] -= dmg;
            attacker = 1;
            content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
            content += user['user_name'] + ' 對 ' + m[0] + ' 造成了' + dmg + '點傷害</div>';
        } else {
            dmg = m[2] - user['user_DEF'];
            user['user_HP'] -= dmg;
            attacker = 0;
            content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
            content += m[0] + ' 對 ' + user['user_name'] + ' 造成了' + dmg + '點傷害</div>';
        }
        i++;
    }

    if (m[1] <= 0) {
        content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
        content += m[0] + ' 倒下了，' + user['user_name'] + ' 還有 ' + user['user_HP'] + ' 點血量</div>';
        i++;
        //經驗值計算
        getEXP = (10 - (Math.abs(m[6] - user['user_LV']))) * m[6];
        if (getEXP < 0) {
            getEXP = 0;
        }
        content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
        content += '你獲得了 ' + getEXP + ' 點經驗值</div>';
        EXP_update(getEXP);
    } else {
        content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
        content += user['user_name'] + ' 戰敗了! ' + m[0] + '還有 ' + m[1] + ' 點血量</div>';
        i++;

        //戰敗懲罰
        getMoney = (Math.abs(m[6] - user['user_LV'])) * m[6] * -0.2;
        content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
        content += '你損失了 ' + (getMoney * -1) + ' 眾神幣</div>';
        money_update(getMoney);
    }

    $('.report').append(content);
    await delay(CD[n]);
    $('#fight_1').attr('disabled', false);
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

function EXP_update(n) {
    let user = JSON.parse(decode(localStorage.getItem("userInfo"), key));
    let new_EXP = user['user_EXP'] + n;
    let need_EXP = user['user_LV'] * 100;
    if (new_EXP >= need_EXP) {
        new_EXP -= need_EXP;
        user['user_EXP'] = new_EXP;
        user['user_LV']++;
    } else {
        user['user_EXP'] = new_EXP;
    }

    localStorage.setItem("userInfo", encode(JSON.stringify(user), key));
    $('#user_EXP').html('經驗值 : ' + user['user_EXP']);
    $('#user_LV').html('等級 : ' + user['user_LV']);
}

function money_update(n) {
    let user = JSON.parse(decode(localStorage.getItem("userInfo"), key));
    user['user_money'] += n;
    localStorage.setItem("userInfo", encode(JSON.stringify(user), key));
    $('#user_money').html('眾神幣 : ' + user['user_money']);
}