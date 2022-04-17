//異常狀態
function abnormalState(a, b, att, i) { //a:受異常方 b:施加方 att:who的回合
    let obj;
    let dmg;
    let state;
    let msg = '';
    switch (a['state']) {
        case "暈眩":
            msg += '<div class="flex"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 暈眩了! 動彈不得!</div>';

            att = Math.abs(att - 1);

            obj = {
                'attacker': att,
                'i': i,
                'msg': msg,
                'a': a,
                'b': b
            }
            return obj;
        case "燒傷":
            dmg = Math.floor(a['HP'] * 0.05);
            if (dmg < 1) {
                dmg = 1;
            }
            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 燒傷了! 受到' + dmg + '點傷害</div>';

            a['HP'] -= dmg;

            if (Math.floor(Math.random() * 10) <= 0) {
                state = null;
            } else {
                a['state'] = "燒傷";
            }

            obj = {
                'attacker': att,
                'i': i,
                'msg': msg,
                'a': a,
                'b': b
            }
            return obj;
        case "中毒":
            dmg = Math.floor(a['HP'] * 0.05);
            if (dmg < 1) {
                dmg = 1;
            }
            msg += '<div class="flex report_blue"><div class="numberReportLine">' + i + '</div>';
            msg += a['name'] + ' 中毒了! 受到' + dmg + '點傷害</div>';

            a['HP'] -= dmg;

            if (Math.floor(Math.random() * 10) <= 3) {
                state = null;
            } else {
                a['state'] = "中毒";
            }

            obj = {
                'attacker': att,
                'i': i,
                'msg': msg,
                'a': a,
                'b': b
            }
            return obj;
    }
}