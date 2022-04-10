function sk(n, i, a, b) { //a:使用技能方 b:受技能方
    let dmg;
    let obj;
    let msg = '';
    switch (n) {
        case 1: //水槍
            dmg = Math.ceil(a['MATK'] * 1.2);
            dmg = getDamage(dmg, b['DEF'], a['STB']);

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 水槍! 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "state": null,
                "msg": msg
            }
            return obj;
        case 2: //衝撞
            dmg = Math.ceil(a['ATK'] * 1.1);
            dmg = getDamage(dmg, b['DEF'], a['STB']);

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 衝撞! 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "state": null,
                "msg": msg
            }
            return obj;
        case 3: //上頂
            dmg = Math.ceil(a['ATK'] * 1.3);
            dmg = getDamage(dmg, b['DEF'], a['STB']);

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 上頂! 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "state": null,
                "msg": msg
            }
            return obj;
        case 4: //純淨水槍
            dmg = Math.ceil(a['MATK'] * 1.4);
            dmg = getDamage(dmg, b['DEF'], a['STB']);

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 純淨水槍! 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "state": null,
                "msg": msg
            }
            return obj;
        case 5: //水砲
            dmg = Math.ceil(a['MATK'] * 1.5);
            dmg = getDamage(dmg, b['DEF'], a['STB']);

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 水砲! 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "state": null,
                "msg": msg
            }
            return obj;
        case 6: //黃金衝撞
            dmg = Math.ceil(a['ATK'] * 1.4);
            dmg = getDamage(dmg, b['DEF'], a['STB']);

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 黃金衝撞! 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "state": null,
                "msg": msg
            }
            return obj;
        case 7: //泰山壓頂
            dmg = Math.ceil(a['ATK'] * 2);
            dmg = getDamage(dmg, b['DEF'], a['STB']);

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 泰山壓頂! 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;
            i++;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "state": "暈眩",
                "msg": msg
            }
            return obj;
        case 8: //睡覺
            dmg = Math.ceil(a['ATK'] * 2);
            dmg = getDamage(dmg, 0, a['STB']);

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
            dmg = getDamage(dmg, b['DEF'], a['STB']);

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + '家的貓衝出來給你一個讚! 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

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
            dmg = getDamage(dmg, b['DEF'], a['STB']);

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 放火! 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "state": "燒傷",
                "msg": msg
            }
            return obj;
        case 12: //法術/飛箭
            dmg = Math.ceil(a['MATK'] * 1.5);
            dmg = getDamage(dmg, b['MDEF'], a['STB']);

            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 使出了 法術/飛箭! 對 ' + b['name'] + ' 造成了' + dmg + '點傷害</div>';

            b['HP'] -= dmg;

            obj = {
                'a': a,
                'b': b,
                'i': i,
                "dmg": dmg,
                "state": null,
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
                "state": null,
                "msg": msg
            }
            return obj;
    }
}