function sk_1(m) { //水槍
    let dmg = Math.ceil(m['MATK'] * 1.2);
    let obj = {
        "dmg": dmg,
        "msg": '水槍'
    }
    return obj;
}