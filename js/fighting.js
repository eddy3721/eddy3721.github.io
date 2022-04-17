//野外戰鬥
async function fighting(n) {
    $('#fight_1').attr('disabled', true);
    $('#fight_2').attr('disabled', true);
    $('#fight_3').attr('disabled', true);
    $('.report').empty();
    let content = '<p class="subtitle" id="report_title">行動報告</p>';
    let CD = [10, 10, 10];
    let user = JSON.parse(decode(localStorage.getItem("userInfo"), key));
    let eq = eq_addition();
    user = fight_eq_addition(user, eq);
    let m = meetMonster(n);

    let attacker = 0;
    let i = 1;
    let getEXP = 0;
    let getMoney = 0;
    let info = {};
    let obj;
    user['state'] = null; //玩家狀態
    m['state'] = null; //玩家狀態

    if (time_check(CD[n]) == false) {
        content += '<div class="flex"><div class="numberReportLine">1</div>';
        content += '不是不報，10秒未到';
    } else {
        content += '<div class="flex"><div class="numberReportLine">1</div>';
        content += user['name'] + ' 遇到了 ' + m['name'] + '(lv.' + m['LV'] + ') !</div>';

        while (user['HP'] > 0 && m['HP'] > 0) {
            if (attacker == 0) {
                let batter = getBatter(user['ASPD']); //連擊數

                for (let j = 1; j <= batter; j++) {
                    i++;
                    let skill_len = user['skills'].length;
                    if (Math.floor(Math.random() * 10) > 6 && skill_len) { //玩家施放技能
                        let useSkill = user['skills'][Math.floor(Math.random() * skill_len)];
                        if (sk_info(useSkill)['cost'] <= user['MP']) {
                            info = sk(useSkill, i, user, m);
                            m = info['b'];
                            user = info['a'];
                            i = info['i'];
                            content += info['msg'];
                            user['MP'] -= sk_info(useSkill)['cost'];
                        } else { //玩家沒藍普攻
                            info = normalAttack(user, m, i, j);
                            user = info['a'];
                            m = info['b'];
                            content += info['msg'];
                        }
                    } else { //玩家普攻
                        info = normalAttack(user, m, i, j);
                        user = info['a'];
                        m = info['b'];
                        content += info['msg'];
                    }
                }
                attacker = 1;
            } else {
                let batter = getBatter(m['ASPD']); //連擊數
                for (let j = 1; j <= batter; j++) {
                    i++;
                    let skill_len = m['skills'].length;
                    if (Math.floor(Math.random() * 10) > 6 && skill_len) { //怪物施放技能
                        let useSkill = m['skills'][Math.floor(Math.random() * skill_len)];
                        info = sk(useSkill, i, m, user);
                        m = info['a'];
                        user = info['b'];
                        i = info['i'];
                        content += info['msg'];
                    } else { //怪物普攻
                        info = normalAttack(m, user, i, j);
                        user = info['b'];
                        m = info['a'];
                        content += info['msg'];
                    }
                }
                attacker = 0;
            }

            //異常判定
            if (attacker == 0) {
                if (user['state'] != null) {
                    i++;
                    obj = abnormalState(user, m, attacker, i);

                    uesr = obj['a'];
                    m = obj['b'];
                    content += obj['msg'];
                    i = obj['i'];
                    attacker = obj['attacker'];
                }
            } else {
                if (m['state'] != null) {
                    i++;
                    obj = abnormalState(m, user, attacker, i);

                    uesr = obj['b'];
                    m = obj['a'];
                    content += obj['msg'];
                    i = obj['i'];
                    attacker = obj['attacker'];
                }
            }
        }

        if (m['HP'] <= 0) {
            i++;
            content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
            content += m['name'] + ' 倒下了，' + user['name'] + ' 還有 ' + user['HP'] + ' 點血量</div>';
            i++;
            //掉落物
            let drop = drop_item(m, i);
            i = drop['i'];
            content += drop['msg'];

            //經驗值計算
            getEXP = (15 - (Math.abs(m['LV'] - user['LV']))) * m['LV'];
            if (getEXP <= 0) {
                getEXP = 0;
            }
            content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
            content += '你獲得了 ' + getEXP + ' 點經驗值</div>';
            content += '<div class="flex"><div class="numberReportLine">' + (i + 1) + '</div>';
            content += '你獲得了 ' + getEXP + ' 眾神幣</div>';
            EXP_update(getEXP);
            money_update(getEXP);
        } else {
            i++;
            content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
            content += user['name'] + ' 戰敗了! ' + m['name'] + '還有 ' + m['HP'] + ' 點血量</div>';
            i++;

            //戰敗懲罰
            getMoney = Math.ceil((Math.abs(m['LV'] - user['LV'])) * m['LV'] * -0.2);
            content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
            content += '你損失了 ' + (getMoney * -1) + ' 眾神幣</div>';
            money_update(getMoney);
        }
    }

    $('.report').append(content);
    await delay(CD[n]);
    $('#fight_1').attr('disabled', false);
    $('#fight_2').attr('disabled', false);
    $('#fight_3').attr('disabled', false);
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

//傷害計算//a攻擊方ATK b受擊方DEF s:STB h:會心 f:閃躲
function getDamage(a, b, s, h, f) {
    let obj = {
        'critical': false,
        'dmg': 0
    };

    let dodge = Math.floor(Math.random() * 100) + 1;
    if (dodge < (f / 3)) { //閃躲
        obj['dmg'] = -1;
        return obj;
    }

    let hit = Math.floor(Math.random() * 100) + 1;
    if (hit <= h) { //爆擊
        hit = 2;
        obj['critical'] = true;
    } else {
        hit = 1;
        obj['critical'] = false;
    }

    let rand = (Math.floor(Math.random() * s) + s) / 100;
    obj['dmg'] = ((a * a) / (a + b) * rand) * hit;
    if (obj['dmg'] <= 0) {
        obj['dmg'] = 1;
    }
    obj['dmg'] = Math.floor(obj['dmg']);
    return obj;
}

//遇敵
function meetMonster(n) {
    let place = localStorage.getItem("user_place");
    let rare = Math.floor(Math.random() * 100) + 1;
    let rand;
    let m;
    switch (n) {
        case 0:
            if (rare <= 60) {
                rare = 1;
            } else if (rare <= 95) {
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

//-----------------------------特殊模式--------------------------
async function special_fighting() {
    $('#fight_4').attr('disabled', true);
    $('.report').empty();
    let content = '<p class="subtitle" id="report_title">行動報告</p>';
    let CD = [10, 10, 10];
    let user = JSON.parse(decode(localStorage.getItem("userInfo"), key));
    let eq = eq_addition();
    user = fight_eq_addition(user, eq);
    let m = JSON.parse(JSON.stringify(M["大木研究所"]["1"][4]));

    let attacker = 0;
    let i = 1;
    let getEXP = 0;
    let getMoney = 0;
    let info = {};
    let obj;
    let stage_2 = false;
    user['state'] = null; //玩家狀態
    m['state'] = null; //玩家狀態

    if (time_check(2) == false) {
        content += '<div class="flex"><div class="numberReportLine">1</div>';
        content += '不是不報，10秒未到';
    } else {
        content += '<div class="flex"><div class="numberReportLine">1</div>';
        content += user['name'] + ' 遇到了 ' + m['name'] + '(lv.' + m['LV'] + ') !</div>';

        i++;
        content += '<div class="flex report_red"><div class="numberReportLine">1</div>';
        content += m['name'] + ' : 「受愚昧的野心之火擺弄，妄想得到艾爾登法環?」</div>';

        while (user['HP'] > 0 && m['HP'] > 0) {
            if (m['HP'] <= 2500 && stage_2 == false) { //Boss二階段
                info = sk(36, i, m, user);
                m = info['a'];
                user = info['b'];
                i = info['i'];
                content += info['msg'];
                stage_2 = true;
            }
            if (attacker == 0) {
                let batter = getBatter(user['ASPD']); //連擊數

                for (let j = 1; j <= batter; j++) {
                    i++;
                    let skill_len = user['skills'].length;
                    if (Math.floor(Math.random() * 10) > 6 && skill_len) { //玩家施放技能
                        let useSkill = user['skills'][Math.floor(Math.random() * skill_len)];
                        if (sk_info(useSkill)['cost'] <= user['MP']) {
                            info = sk(useSkill, i, user, m);
                            m = info['b'];
                            user = info['a'];
                            i = info['i'];
                            content += info['msg'];
                            user['MP'] -= sk_info(useSkill)['cost'];
                        } else { //玩家沒藍普攻
                            info = normalAttack(user, m, i, j);
                            user = info['a'];
                            m = info['b'];
                            content += info['msg'];
                        }
                    } else { //玩家普攻
                        info = normalAttack(user, m, i, j);
                        user = info['a'];
                        m = info['b'];
                        content += info['msg'];
                    }
                }
                attacker = 1;
            } else {
                let batter = getBatter(m['ASPD']); //連擊數
                for (let j = 1; j <= batter; j++) {
                    i++;
                    let skill_len = m['skills'].length;
                    if (Math.floor(Math.random() * 10) > 6 && skill_len) { //怪物施放技能
                        let useSkill = m['skills'][Math.floor(Math.random() * skill_len)];
                        info = sk(useSkill, i, m, user);
                        m = info['a'];
                        user = info['b'];
                        i = info['i'];
                        content += info['msg'];
                    } else { //怪物普攻
                        info = normalAttack(m, user, i, j);
                        user = info['b'];
                        m = info['a'];
                        content += info['msg'];
                    }
                }
                attacker = 0;
            }

            //異常判定
            if (attacker == 0) {
                if (user['state'] != null) {
                    i++;
                    obj = abnormalState(user, m, attacker, i);

                    uesr = obj['a'];
                    m = obj['b'];
                    content += obj['msg'];
                    i = obj['i'];
                    attacker = obj['attacker'];
                }
            } else {
                if (m['state'] != null) {
                    i++;
                    obj = abnormalState(m, user, attacker, i);

                    uesr = obj['b'];
                    m = obj['a'];
                    content += obj['msg'];
                    i = obj['i'];
                    attacker = obj['attacker'];
                }
            }
        }

        if (m['HP'] <= 0) {
            i++;
            content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
            content += m['name'] + ' 倒下了，' + user['name'] + ' 還有 ' + user['HP'] + ' 點血量</div>';
            i++;
            content += '<div class="flex report_red"><div class="numberReportLine">' + i + '</div>';
            content += a['name'] + ' : 「還是不更新，欸嘿」</div>';
            i++;
            //掉落物
            let drop = drop_item(m, i);
            i = drop['i'];
            content += drop['msg'];

            //經驗值計算
            getEXP = (15 - (Math.abs(m['LV'] - user['LV']))) * m['LV'];
            if (getEXP <= 0) {
                getEXP = 0;
            }
            content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
            content += '你獲得了 ' + getEXP + ' 點經驗值</div>';
            content += '<div class="flex"><div class="numberReportLine">' + (i + 1) + '</div>';
            content += '你獲得了 ' + getEXP + ' 眾神幣</div>';
            EXP_update(getEXP);
            money_update(getEXP);
        } else {
            i++;
            content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
            content += user['name'] + ' 戰敗了! ' + m['name'] + '還有 ' + m['HP'] + ' 點血量</div>';
            i++;
        }
    }

    $('.report').append(content);
    await delay(2);
    $('#fight_4').attr('disabled', false);
}

function getBatter(n) {
    let max_batter = Math.trunc(n / 10); //最高連擊數
    let batter;
    if (max_batter > 5) {
        max_batter = 5;
    }
    for (batter = 1; batter < max_batter; batter++) {
        if (Math.floor(Math.random() * 100) + 1 <= 50) {
            break;
        }
    }
    return batter;
}

function normalAttack(a, b, i, j) { //普攻判定 //a:攻擊方 b:受擊方 j:連擊數
    let msg = '';
    let obj = {};
    let info = getDamage(a['ATK'], b['DEF'], a['STB'], a['HIT'], b['FLEE']);
    let dmg = info['dmg'];
    if (j == 1) {
        msg += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
        msg += a['name'] + '攻擊，';
    } else {
        msg += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
        msg += a['name'] + j.toString() + '連擊，';
    }
    if (dmg == -1) {
        msg += '但是被閃開了!</div>';
    } else {
        b['HP'] -= dmg;
        if (info['critical']) {
            msg += '會心一擊! ';
        }
        msg += '對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';
    }
    obj = {
        'a': a,
        'b': b,
        'msg': msg
    }
    return obj;
}

function drop_item(m, i) { //掉落物判定 
    let obj = {
        "eq": 0,
        "map": 0,
        "skill": 0,
        "msg": '',
        "i": i
    }
    let bag = JSON.parse(decode(localStorage.getItem("item"), key));

    let eq_rate = Math.floor(Math.random() * 100) + 1;
    let skill_rate = Math.floor(Math.random() * 100) + 1;
    let map_rate = Math.floor(Math.random() * 100) + 1;

    if (eq_rate <= 5 && m['drop']['eq']) { //裝備掉落
        obj['eq'] = m['drop']['eq'];

        obj['msg'] += '<div class="flex"><div class="numberReportLine">' + obj['i'] + '</div>';
        obj['msg'] += '你獲得了 裝備 : ' + item_eq(obj['eq'])['name'] + '</div>';
        obj['i']++;

        let eq_type = item_eq(obj['eq'])['type'];
        if (bag[eq_type].indexOf(obj['eq']) == -1) {
            bag[eq_type].push(obj['eq']);
        }

        localStorage.setItem("item", encode(JSON.stringify(bag), key));
    }
    if (skill_rate <= 5 && m['drop']['skill']) { //技能掉落
        obj['skill'] = m['drop']['skill'];

        obj['msg'] += '<div class="flex"><div class="numberReportLine">' + obj['i'] + '</div>';
        obj['msg'] += '你獲得了 技能 : ' + sk_info(obj['skill'])['name'] + '</div>';
        obj['i']++;

        if (bag['skill'].indexOf(obj['skill']) == -1) {
            bag['skill'].push(obj['skill']);
        }

        localStorage.setItem("item", encode(JSON.stringify(bag), key));
    }
    if (map_rate <= 30 && m['drop']['map']) { //地圖掉落
        obj['map'] = m['drop']['map'];
        let map_name = map_info(obj['map'])['name']

        obj['msg'] += '<div class="flex"><div class="numberReportLine">' + obj['i'] + '</div>';
        obj['msg'] += '你獲得了 地圖碎片 : ' + map_name + '</div>';
        obj['i']++;

        if (bag['map'].indexOf(obj['map']) == -1) {
            bag['map'].push(obj['map']);
            bag['map'] = bag['map'].sort();

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            });

            Toast.fire({
                icon: 'warning',
                title: '解鎖新地圖 「' + map_name + '」!'
            });
        }

        localStorage.setItem("item", encode(JSON.stringify(bag), key));
    }
    return obj;
}

//戰鬥裝備加成
function fight_eq_addition(a, eq) {
    a['HP'] += eq['HP'];
    a['MP'] += eq['MP'];
    a['ATK'] += eq['ATK'];
    a['MATK'] += eq['MATK'];
    a['DEF'] += eq['DEF'];
    a['MDEF'] += eq['MDEF'];
    a['HIT'] += eq['HIT'];
    a['FLEE'] += eq['FLEE'];
    a['ASPD'] += eq['ASPD'];
    a['STB'] += eq['STB'];
    a['skills'] = a['skills'].concat(eq['skills']);

    return a;
}