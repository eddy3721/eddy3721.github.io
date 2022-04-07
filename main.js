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
        localStorage.setItem("userInfo", JSON.stringify(obj));
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
    ['史萊姆', 20, 10, 10, 0, 0],
    ['野豬', 35, 13, 0, 4, 4],
    ['黃金史萊姆', 45, 15, 15, 5, 5],
    ['史萊姆王', 120, 20, 20, 9, 9]
]

async function fighting(n) {
    $('#fight_1').attr('disabled', true);
    $('.report').empty();
    let content = '<p class="subtitle" id="report_title">行動報告</p>';
    let CD = [10, 30, 60];
    let user = JSON.parse(localStorage.getItem("userInfo"))
    let m = monster[Math.floor(Math.random() * monster.length)].concat();
    let attacker = 0;
    i = 2;

    content += '<div class="flex"><div class="numberReportLine">1</div>';
    content += user['user_name'] + ' 遇到了 ' + m[0] + ' !</div>';
    //console.log('遇到了 ' + m[0]);

    while (user['user_HP'] > 0 && m[1] > 0) {
        if (attacker == 0) {
            dmg = user['user_ATK'] - m[4];
            m[1] -= dmg;
            attacker = 1;
            content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
            content += user['user_name'] + '對' + m[0] + '造成了' + dmg + '點傷害</div>';
        } else {
            dmg = m[2] - user['user_DEF'];
            user['user_HP'] -= dmg;
            attacker = 0;
            content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
            content += m[0] + '對' + user['user_name'] + '造成了' + dmg + '點傷害</div>';
        }
        i++;
    }

    if (m[1] <= 0) {
        console.log(user['user_name'] + ' 獲勝了!');
        content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
        content += user['user_name'] + ' 獲勝了!</div>';
    } else {
        content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
        content += user['user_name'] + ' 戰敗了!</div>';
    }

    $('.report').append(content);
    await delay(1);
    $('#fight_1').attr('disabled', false);
}