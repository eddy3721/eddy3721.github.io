//野外戰鬥
async function fighting(n) {
    $('#fight_1').attr('disabled', true);
    $('#fight_2').attr('disabled', true);
    $('#fight_3').attr('disabled', true);
    $('.report').empty();
    let content = '<p class="subtitle" id="report_title">行動報告</p>';
    let CD = [10, 10, 10];
    let user = JSON.parse(decode(localStorage.getItem("userInfo"), key));
    let m = meetMonster(n);

    let attacker = 0;
    let i = 2;
    let getEXP = 0;
    let getMoney = 0;
    let info = {};
    let obj;

    content += '<div class="flex"><div class="numberReportLine">1</div>';
    content += user['name'] + ' 遇到了 ' + m['name'] + '(lv.' + m['LV'] + ') !</div>';

    while (user['HP'] > 0 && m['HP'] > 0) {
        if (attacker == 0) {
            if (info['state'] != null) {
                obj = abnormalState(info['state'], i, user, m);
                uesr = obj['a'];
                m = obj['b'];
                content += obj['msg'];
                i = obj['i'];
                attacker = obj['attacker'];
                info['state'] = obj['state'];
                continue;
            } else {
                let dmg = getDamage(user['ATK'], m['DEF'], user['STB']);
                m['HP'] -= dmg;
                attacker = 1;
                content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
                content += user['name'] + ' 對 ' + m['name'] + ' 造成了' + dmg + '點傷害</div>';
            }
        } else {
            let skill_len = m['skills'].length;
            if (Math.floor(Math.random() * 10) > 6 && skill_len) { //怪物施放技能
                let useSkill = m['skills'][Math.floor(Math.random() * skill_len)];
                info = sk(useSkill, m, user);
                user['HP'] -= info['dmg'];
                attacker = 0;
                content += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
                content += m['name'] + ' 使出了 ' + info['msg'] + '! 對 ' + user['name'] + ' 造成了' + info['dmg'] + '點傷害</div>';
            } else {
                let dmg = getDamage(m['ATK'], user['DEF'], m['STB']);
                user['HP'] -= dmg;
                attacker = 0;
                content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
                content += m['name'] + ' 對 ' + user['name'] + ' 造成了' + dmg + '點傷害</div>';
            }
        }
        i++;
    }

    if (m['HP'] <= 0) {
        content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
        content += m['name'] + ' 倒下了，' + user['name'] + ' 還有 ' + user['HP'] + ' 點血量</div>';
        i++;
        //經驗值計算
        getEXP = (15 - (Math.abs(m['LV'] - user['LV']))) * m['LV'];
        if (getEXP < 0) {
            getEXP = 0;
        }
        content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
        content += '你獲得了 ' + getEXP + ' 點經驗值</div>';
        EXP_update(getEXP);
    } else {
        content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
        content += user['name'] + ' 戰敗了! ' + m['name'] + '還有 ' + m['HP'] + ' 點血量</div>';
        i++;

        //戰敗懲罰
        getMoney = Math.ceil((Math.abs(m['LV'] - user['LV'])) * m['LV'] * -0.2);
        content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
        content += '你損失了 ' + (getMoney * -1) + ' 眾神幣</div>';
        money_update(getMoney);
    }

    $('.report').append(content);
    await delay(CD[n]);
    $('#fight_1').attr('disabled', false);
    $('#fight_2').attr('disabled', false);
    $('#fight_3').attr('disabled', false);
}

//經驗更新
function getNeedEXP() {
    let user = JSON.parse(decode(localStorage.getItem("userInfo"), key));
    let n = Math.floor((((Math.pow(user['LV'] - 1), 3) + 60) / 5 * ((user['LV'] - 1) * 3 + 10)) / 10) * 10;
    return n;
}

function EXP_update(n) {
    let user = JSON.parse(decode(localStorage.getItem("userInfo"), key));
    let new_EXP = user['user_EXP'] + Math.floor(n);
    let need_EXP = getNeedEXP();

    if (new_EXP >= need_EXP) {
        new_EXP -= need_EXP;
        user['user_EXP'] = new_EXP;
        user['LV']++;
        user['user_skillPoint'] += 2;
    } else {
        user['user_EXP'] = new_EXP;
    }

    localStorage.setItem("userInfo", encode(JSON.stringify(user), key));
    need_EXP = getNeedEXP();
    $('#user_EXP').html('經驗值 : ' + user['user_EXP'] + ' / ' + need_EXP);
    $('#user_LV').html('等級 : ' + user['LV']);
    $('#LV').html('等級 : ' + user['LV']);
}

//金錢更新
function money_update(n) {
    let user = JSON.parse(decode(localStorage.getItem("userInfo"), key));
    user['user_money'] += n;
    if (user['user_money'] < 0) {
        user['user_money'] = 0;
    }
    localStorage.setItem("userInfo", encode(JSON.stringify(user), key));
    $('#user_money').html('眾神幣 : ' + user['user_money']);
}

//傷害計算
function getDamage(a, b, s) {
    let rand = (Math.floor(Math.random() * s) + s) / 100;
    let dmg = (a * a) / (a + b) * rand;
    dmg = Math.floor(dmg);
    return dmg;
}

//異常狀態
function abnormalState(s, i, a, b) { //a:受異常方 b:施加方
    let obj;
    let msg = '';
    switch (s) {
        case "暈眩":
            msg += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 暈眩了! 動彈不得!</div>';
            i++;
            obj = {
                'attacker': 1,
                'i': i,
                'state': null,
                'msg': msg,
                'a': a,
                'b': b
            }
            return obj;
    }
}

//遇敵
function meetMonster(n) {
    let place = localStorage.getItem("user_place");
    let rare = Math.floor(Math.random() * 100) + 1;
    let rand;
    let m;
    switch (n) {
        case 0:
            if (rare <= 50) {
                rare = 1;
            } else if (rare <= 85) {
                rare = 2;
            } else if (rare <= 100) {
                rare = 3;
            }
            rand = Math.floor(Math.random() * M[place][rare].length);
            m = JSON.parse(JSON.stringify(M[place][rare][rand]));
            return m;
        case 1:
            if (rare <= 20) {
                rare = 2;
            } else if (rare <= 70) {
                rare = 3;
            } else if (rare <= 100) {
                rare = 4;
            }
            rand = Math.floor(Math.random() * M[place][rare].length);
            m = JSON.parse(JSON.stringify(M[place][rare][rand]));
            return m;
        case 2:
            if (rare <= 50) {
                rare = 3;
            } else if (rare <= 100) {
                rare = 4;
            }
            rand = Math.floor(Math.random() * M[place][rare].length);
            m = JSON.parse(JSON.stringify(M[place][rare][rand]));
            return m;
    }
}