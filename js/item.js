function item_eq(n) { //裝備
    let obj;
    switch (n) {
        case 1: //冒險者帽子
            obj = {
                'name': '冒險者帽子',
                "intro": '菜雞專用。',
                "HP": 10,
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
                "intro": '菜雞專用。',
                "HP": 10,
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
    }
}