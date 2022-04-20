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
        case 6: //史萊姆盾
            obj = {
                'name': '史萊姆盾',
                "type": "weapon",
                "intro": '史萊姆王國的制式盾牌，盾上的凹痕可以很好地匯引水流',
                "HP": 0,
                "MP": 0,
                "ATK": 2,
                "MATK": 0,
                "DEF": 4,
                "MDEF": 2,
                "FLEE": 0,
                "HIT": 0,
                "STB": 0,
                "ASPD": 0,
                "skills": []
            }
            return obj;
        case 7: //史萊姆禁衛大劍
            obj = {
                'name': '史萊姆禁衛大劍',
                "type": "weapon",
                "intro": '史萊姆王國入口看守者的大劍，上頭有多道凹槽',
                "HP": 0,
                "MP": 25,
                "ATK": 8,
                "MATK": 4,
                "DEF": 2,
                "MDEF": 0,
                "FLEE": 0,
                "HIT": 0,
                "STB": 0,
                "ASPD": 0,
                "skills": []
            }
            return obj;
        case 8: //菇菇帽
            obj = {
                'name': '菇菇帽',
                "type": "head",
                "intro": '你像極了一隻菇',
                "HP": 15,
                "MP": 15,
                "ATK": 0,
                "MATK": 0,
                "DEF": 2,
                "MDEF": 3,
                "FLEE": 0,
                "HIT": 0,
                "STB": 0,
                "ASPD": 0,
                "skills": []
            }
            return obj;
        case 9: //木棒
            obj = {
                'name': '木棒',
                "type": "weapon",
                "intro": '獸人等具有初級智慧的生物所使用的工具',
                "HP": 0,
                "MP": 0,
                "ATK": 4,
                "MATK": 0,
                "DEF": 0,
                "MDEF": 0,
                "FLEE": 0,
                "HIT": 0,
                "STB": 0,
                "ASPD": 0,
                "skills": []
            }
            return obj;
        case 10: //疾風之靴
            obj = {
                'name': '疾風之靴',
                "type": "foot",
                "intro": '飽含疾風之力的靴子',
                "HP": 0,
                "MP": 0,
                "ATK": 4,
                "MATK": 0,
                "DEF": 4,
                "MDEF": 2,
                "FLEE": 3,
                "HIT": 0,
                "STB": 0,
                "ASPD": 0,
                "skills": []
            }
            return obj;
        case 11: //樹人守衛盔甲
            obj = {
                'name': '樹人守衛盔甲',
                "type": "body",
                "intro": '厚實的樹皮能提供絕佳的防禦，但多少會影響行動能力',
                "HP": 50,
                "MP": 5,
                "ATK": 0,
                "MATK": 0,
                "DEF": 10,
                "MDEF": 8,
                "FLEE": -2,
                "HIT": 0,
                "STB": 0,
                "ASPD": -2,
                "skills": []
            }
            return obj;
        case 12: //巨魔棍棒
            obj = {
                'name': '巨魔棍棒',
                "type": "weapon",
                "intro": '由堅硬岩石所製的巨型棍棒，聽說能使某個技能威力大增',
                "HP": 0,
                "MP": 0,
                "ATK": 12,
                "MATK": 0,
                "DEF": 0,
                "MDEF": 0,
                "FLEE": 0,
                "HIT": 0,
                "STB": 0,
                "ASPD": 0,
                "skills": []
            }
            return obj;
    }
}