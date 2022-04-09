function sk(n, a, b) {
    let dmg;
    let obj;
    switch (n) {
        case 1: //水槍
            dmg = Math.ceil(a['MATK'] * 1.2);
            dmg = getDamage(dmg, b['DEF'], a['STB']);

            obj = {
                "dmg": dmg,
                "msg": '水槍'
            }
            return obj;
        case 2: //衝撞
            dmg = Math.ceil(a['ATK'] * 1.1);
            dmg = getDamage(dmg, b['DEF'], a['STB']);

            obj = {
                "dmg": dmg,
                "msg": '衝撞'
            }
            return obj;
        case 3: //上頂
            dmg = Math.ceil(a['ATK'] * 1.3);
            dmg = getDamage(dmg, b['DEF'], a['STB']);

            obj = {
                "dmg": dmg,
                "msg": '上頂'
            }
            return obj;
        case 4: //純淨水槍
            dmg = Math.ceil(a['MATK'] * 1.4);
            dmg = getDamage(dmg, b['DEF'], a['STB']);

            obj = {
                "dmg": dmg,
                "msg": '純淨水槍'
            }
            return obj;
        case 5: //水砲
            dmg = Math.ceil(a['MATK'] * 1.5);
            dmg = getDamage(dmg, b['DEF'], a['STB']);

            obj = {
                "dmg": dmg,
                "msg": '水砲'
            }
            return obj;
        case 6: //黃金衝撞
            dmg = Math.ceil(a['ATK'] * 1.4);
            dmg = getDamage(dmg, b['DEF'], a['STB']);

            obj = {
                "dmg": dmg,
                "msg": '黃金衝撞'
            }
            return obj;
        case 7: //泰山壓頂
            dmg = Math.ceil(a['ATK'] * 2);
            dmg = getDamage(dmg, b['DEF'], a['STB']);

            obj = {
                "dmg": dmg,
                "state": "暈眩",
                "msg": '泰山壓頂'
            }
            return obj;
    }
}