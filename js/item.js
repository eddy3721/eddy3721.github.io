function item_eq(n) { //裝備 頭部:head 身體:body 腿部:foot 武器:weapon
    let obj;
    switch (n) {
        case 1: //冒險者帽子
            obj = {
                'name': '冒險者帽子',
                "type": "head",
                "intro": '菜雞專用。',
                "HP": 10,
                "MP": 5,
                "ATK": 0,
                "MATK": 0,
                "DEF": 1,
                "MDEF": 1,
                "FLEE": 0,
                "HIT": 0,
                "STB": 0,
                "ASPD": 0,
                "skills": []
            }
            return obj;
        case 2: //冒險者服裝
            obj = {
                'name': '冒險者服裝',
                "type": "body",
                "intro": '菜雞專用。',
                "HP": 10,
                "MP": 5,
                "ATK": 0,
                "MATK": 0,
                "DEF": 1,
                "MDEF": 1,
                "FLEE": 0,
                "HIT": 0,
                "STB": 0,
                "ASPD": 0,
                "skills": []
            }
            return obj;
        case 3: //毛絨帽
            obj = {
                'name': '毛絨帽',
                "type": "head",
                "intro": '毛球的皮製成的帽子，非常保暖',
                "HP": 12,
                "MP": 5,
                "ATK": 0,
                "MATK": 0,
                "DEF": 1,
                "MDEF": 1,
                "FLEE": 0,
                "HIT": 0,
                "STB": 0,
                "ASPD": 0,
                "skills": []
            }
            return obj;
        case 4: //貓咪兜帽
            obj = {
                'name': '貓咪兜帽',
                "type": "head",
                "intro": '有著貓耳朵的兜帽，貓咪看到都會忍不住給你一個讚',
                "HP": 20,
                "MP": 10,
                "ATK": 0,
                "MATK": 0,
                "DEF": 3,
                "MDEF": 3,
                "FLEE": 0,
                "HIT": 0,
                "STB": 0,
                "ASPD": 0,
                "skills": [10]
            }
            return obj;
        case 5: //史萊姆長槍
            obj = {
                'name': '史萊姆長槍',
                "type": "weapon",
                "intro": '史萊姆王國的制式長槍，槍上的凹痕可以很好地匯引水流',
                "HP": 0,
                "MP": 0,
                "ATK": 5,
                "MATK": 0,
                "DEF": 1,
                "MDEF": 1,
                "FLEE": 0,
                "HIT": 0,
                "STB": 0,
                "ASPD": 0,
                "skills": []
            }
            return obj;
    }
}