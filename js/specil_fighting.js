async function special_fighting() {
    $('#fight_4').attr('disabled', true);
    $('.report').empty();
    let content = '<p class="subtitle" id="report_title">行動報告</p>';
    let user = JSON.parse(decode(localStorage.getItem("userInfo"), key));
    let eq = eq_addition();
    user = fight_eq_addition(user, eq);
    let m = JSON.parse(JSON.stringify(M['大木研究所'][1][6]));;
    m['HP'] = user['HP'] * 10;
    m['ATK'] = user['ATK'];
    m['MATK'] = user['MATK'];
    m['DEF'] = user['DEF'];
    m['MDEF'] = user['MDEF'];
    m['FLEE'] = user['FLEE'];
    m['HIT'] = user['HIT'];
    m['STB'] = user['STB'];
    m['ASPD'] = user['ASPD'];
    m['skills'] = user['skills'];

    let attacker = 0;
    let i = 1;
    let getEXP = 0;
    let getMoney = 0;
    let info = {};
    let obj;
    user['state'] = null; //玩家狀態
    m['state'] = null; //玩家狀態

    if (time_check(2) == false) {
        content += '<div class="flex"><div class="numberReportLine">1</div>';
        content += '不是不報，10秒未到';
    } else {
        content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
        content += user['name'] + ' 遇到了 ' + m['name'] + '(lv.' + m['LV'] + ') !</div>';
        i++;
        content += '<div class="flex report_red"><div class="numberReportLine">' + i + '</div>';
        content += '「噗哧——」，' + m['name'] + '變成了你的樣子 !</div>';
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
            content += '你獲得了 ' + (getEXP + 10) + ' 眾神幣</div>';
            EXP_update(getEXP);
            money_update(getEXP + 10);

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
                title: '成功討伐「' + m['name'] + '」'
            });
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
    await delay(2);
    $('#fight_4').attr('disabled', false);
}

async function special_fighting2() {
    $('#fight_5').attr('disabled', true);
    $('.report').empty();
    let content = '<p class="subtitle" id="report_title">行動報告</p>';
    let user = JSON.parse(decode(localStorage.getItem("userInfo"), key));
    let eq = eq_addition();
    user = fight_eq_addition(user, eq);
    let m = JSON.parse(JSON.stringify(M['大木研究所'][1][7]));;

    let attacker = 0;
    let i = 1;
    let getEXP = 0;
    let getMoney = 0;
    let info = {};
    let obj;
    user['state'] = null; //玩家狀態
    m['state'] = null; //玩家狀態

    if (time_check(2) == false) {
        content += '<div class="flex"><div class="numberReportLine">1</div>';
        content += '不是不報，10秒未到';
    } else {
        content += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
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
            content += '你獲得了 ' + (getEXP + 10) + ' 眾神幣</div>';
            EXP_update(getEXP);
            money_update(getEXP + 10);

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
                title: '成功討伐「' + m['name'] + '」'
            });
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
    await delay(2);
    $('#fight_5').attr('disabled', false);
}