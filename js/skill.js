function sk(n, i, a, b) { //a:使用技能方 b:受技能方
    let info = {};
    let dmg;
    let new_m;
    let obj = {
        'a': a,
        'b': b,
        'i': i,
        "dmg": 0,
        "msg": ''
    };
    let msg = '';
    switch (n) {
        case 1: //水槍
            dmg = Math.ceil(a['MATK'] * 1.2);
            info = getDamage(dmg, b['DEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 水槍!';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 2: //衝撞
            dmg = Math.ceil(a['ATK'] * 1.1);
            info = getDamage(dmg, b['DEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 衝撞! ';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 3: //上頂
            dmg = Math.ceil(a['ATK'] * 1.3);
            info = getDamage(dmg, b['DEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 上頂!';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 4: //純淨水槍
            dmg = Math.ceil(a['MATK'] * 1.4);
            info = getDamage(dmg, b['DEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 純淨水槍!';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 5: //水砲
            dmg = Math.ceil(a['MATK'] * 1.5);
            info = getDamage(dmg, b['DEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 水砲!';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 6: //黃金衝撞
            dmg = Math.ceil(a['ATK'] * 1.4);
            info = getDamage(dmg, b['DEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 黃金衝撞!';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 7: //泰山壓頂
            dmg = Math.ceil(a['ATK'] * 2);
            info = getDamage(dmg, b['DEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 泰山壓頂!';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;
            b['state'] = "暈眩";
            i++;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 8: //睡覺
            dmg = Math.ceil(a['ATK'] * 2);
            info = getDamage(dmg, 0, a['STB']);
            dmg = info['dmg'];

            msg += '<div class="flex report_green"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 睡覺! 恢復了' + dmg + '點血量</div>';

            a['HP'] += dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 9: //詐寢
            dmg = 0;

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 詐寢! 攻擊力提升了! 防禦力下降了!</div>';

            a['ATK'] = Math.floor(a['ATK'] * 1.15);
            a['DEF'] = Math.floor(a['DEF'] * 0.7);
            a['MDEF'] = Math.floor(a['MDEF'] * 0.7);

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 10: //貓讚拳
            dmg = Math.ceil(a['ATK'] * 1.1);
            info = getDamage(dmg, b['DEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + '家的貓衝出來給你一個讚!';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 11: //放火
            dmg = Math.ceil(a['ATK'] * 1.5);
            info = getDamage(dmg, b['DEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 放火!';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;
            b['state'] = "燒傷";

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 12: //法術/飛箭
            dmg = Math.ceil(a['MATK'] * 1.5);
            info = getDamage(dmg, b['MDEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 法術/飛箭!';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 13: //法術/障壁
            dmg = 0;

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 法術/障壁! 防禦力提升了!</div>';

            a['DEF'] = Math.floor(a['DEF'] * 1.15);
            a['MDEF'] = Math.floor(a['DEF'] * 1.15);

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 14: //羊突猛進
            dmg = Math.ceil(a['ATK'] * 1.6);
            info = getDamage(dmg, b['DEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 羊突猛進!';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 15: //西域刀羊千羊斬

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += '西域刀羊衝了出來使出了 千羊斬!</div>';
            for (let j = 1; j < 4; j++) {
                dmg = Math.ceil(a['ATK'] * 1.2);
                info = getDamage(dmg, b['DEF'], a['STB'], a['HIT'], b['FLEE']);
                dmg = info['dmg'];

                i++;
                msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
                msg += '第' + j + '擊';
                if (dmg == -1) {
                    msg += ' 但是被閃開了!';
                    return obj;
                }
                if (info['critical']) {
                    msg += ' 會心一擊!';
                }
                msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

                b['HP'] -= dmg;
            }

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 16: //召喚寶可夢
            dmg = 0;
            rand = Math.floor(Math.random() * 2) + 1;
            new_m = JSON.parse(JSON.stringify(M['大木研究所']['1'][rand]));

            msg += '<div class="flex report_red"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' :「就決定是你了! ' + new_m['name'] + '!」</div>';

            a = new_m;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 17: //斷崖之劍
            dmg = Math.ceil(a['ATK'] * 3);
            info = getDamage(dmg, b['DEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_red"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 斷崖之劍!';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 18: //地震 
            rand = Math.floor(Math.random() * 9) + 1;

            dmg = Math.ceil(a['ATK'] * (1 + rand / 10));
            info = getDamage(dmg, b['DEF'], a['STB']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 地震! 震度' + rand + '級! 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 19: //根源波動
            dmg = Math.ceil(a['MATK'] * 3);
            info = getDamage(dmg, b['MDEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_red"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 根源波動!';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 20: //暴風雪
            dmg = Math.ceil(a['MATK'] * 1.5);
            info = getDamage(dmg, b['MDEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 暴風雪!';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 21: //水槍突刺
            dmg = Math.ceil(a['ATK'] * 1.7);
            info = getDamage(dmg, b['DEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 水槍突刺!';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 22: //黏液包覆
            dmg = 0;

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 黏液包覆! 防禦力提升了!</div>';

            a['DEF'] = Math.floor(a['DEF'] * 1.3);
            a['MDEF'] = Math.floor(a['DEF'] * 1.3);

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 23: //高壓水砲
            dmg = Math.ceil(a['MATK'] * 2);
            info = getDamage(dmg, b['MDEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 高壓水砲!';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 24: //水遁/水連彈
            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 水遁/水連彈!</div>';

            rand = Math.floor(Math.random() * 4) + 2;
            for (let j = 1; j < rand; j++) {
                dmg = Math.ceil(a['MATK'] * 1.15);
                info = getDamage(dmg, b['MDEF'], a['STB'], a['HIT'], b['FLEE']);
                dmg = info['dmg'];

                i++;
                msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
                msg += '第' + j + '擊';
                if (dmg == -1) {
                    msg += ' 但是被閃開了!';
                    return obj;
                }
                if (info['critical']) {
                    msg += ' 會心一擊!';
                }
                msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

                b['HP'] -= dmg;
            }

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 25: //水之呼吸‧壹之型‧水面斬
            dmg = Math.ceil(a['ATK'] * 2.2 + a['ASPD'] * 1.2);
            info = getDamage(dmg, b['DEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' : 「水之呼吸，壹之型，水面斬!!」</div>';
            i++;
            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 向前斬擊!';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 26: //扔石子
            dmg = Math.ceil(a['ATK'] * 1.1);
            info = getDamage(dmg, b['DEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 扔石子! ';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 27: //撕咬
            dmg = Math.ceil(a['ATK'] * 1.2);
            info = getDamage(dmg, b['DEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 撕咬! ';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 28: //棍棒敲擊
            dmg = Math.ceil(a['ATK'] * 1.3);
            info = getDamage(dmg, b['DEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 棍棒敲擊! ';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }

            if (Math.floor(Math.random() * 100) + 1 > 80) {
                b['state'] = "暈眩";
            }

            return obj;
        case 29: //毒針
            dmg = Math.ceil(a['ATK'] * 1.35);
            info = getDamage(dmg, b['DEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 毒針! ';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            if (Math.floor(Math.random() * 100) + 1 > 60) {
                b['state'] = "中毒";
            }

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }

            return obj;
        case 30: //孢子
            dmg = Math.ceil(a['MATK'] * 1.35);
            info = getDamage(dmg, b['MDEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 孢子! ';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            if (Math.floor(Math.random() * 100) + 1 > 60) {
                b['state'] = "中毒";
            }

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }

            return obj;
        case 31: //蜂蜜治癒
            dmg = Math.ceil(a['MATK'] * 2);
            info = getDamage(dmg, 0, a['STB']);
            dmg = info['dmg'];

            msg += '<div class="flex report_green"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 蜂蜜治癒! 恢復了' + dmg + '點血量</div>';

            a['HP'] += dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 32: //連續毒針
            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 連續毒針!</div>';

            rand = Math.floor(Math.random() * 3) + 1;
            for (let j = 1; j <= rand; j++) {
                dmg = Math.ceil(a['MATK'] * 1.3);
                info = getDamage(dmg, b['MDEF'], a['STB'], a['HIT'], b['FLEE']);
                dmg = info['dmg'];

                i++;
                msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
                msg += '第' + j + '擊';
                if (dmg == -1) {
                    msg += ' 但是被閃開了!';
                    return obj;
                }
                if (info['critical']) {
                    msg += ' 會心一擊!';
                }
                msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

                b['HP'] -= dmg;

                if (Math.floor(Math.random() * 100) + 1 > 60) {
                    b['state'] = "中毒";
                }
            }

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 33: //惡兆蓄力
            dmg = 0;

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 舉起了左手!</div>';
            a['state'] = "惡兆蓄力";

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 34: //黃金匕首揮擊
            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 左手凝聚出一把黃金匕首! 連續揮擊!</div>';

            for (let j = 1; j <= 3; j++) {
                dmg = Math.ceil(a['ATK'] * 1.3);
                info = getDamage(dmg, b['DEF'], a['STB'], a['HIT'], b['FLEE']);
                dmg = info['dmg'];

                i++;
                msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
                msg += '第' + j + '擊';
                if (dmg == -1) {
                    msg += ' 但是被閃開了!';
                    return obj;
                }
                if (info['critical']) {
                    msg += ' 會心一擊!';
                }
                msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

                b['HP'] -= dmg;
            }

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 35: //黃金匕首投擲
            dmg = Math.ceil(a['ATK'] * 1.5);
            info = getDamage(dmg, b['DEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 左手凝聚出一把黃金匕首! 投擲了出去!';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 36: //惡兆二階段
            dmg = 0;
            new_m = JSON.parse(JSON.stringify(M['大木研究所']['1'][5]));

            msg += '<div class="flex report_red"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' :「......哦，不容小覷啊，褪色者不愧是戰士的後代。」</div>';

            a = new_m;

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 舉起了左手!</div>';
            a['state'] = "惡兆蓄力2";

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 37: //惡兆蓄力2
            dmg = 0;

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 舉起了左手!</div>';
            a['state'] = "惡兆蓄力2";

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
        case 38: //黃金大槌
            dmg = Math.ceil(a['ATK'] * 1.8);
            info = getDamage(dmg, b['DEF'], a['STB'], a['HIT'], b['FLEE']);
            dmg = info['dmg'];

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 左手凝聚出一把黃金大槌! 高高躍起!';
            if (dmg == -1) {
                msg += ' 但是被閃開了!';
                return obj;
            }
            if (info['critical']) {
                msg += ' 會心一擊!';
            }
            msg += ' 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "msg": msg
            }
            return obj;
    }
}