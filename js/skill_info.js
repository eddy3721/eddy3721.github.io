function sk_info(n) {
    let obj = {
        'name': '',
        "intro": '',
        "cost": 0
    };
    switch (n) {
        case 1: //水槍
            obj = {
                'name': '水槍',
                "intro": '滋滋亂射',
                "cost": 10
            }
            return obj;
        case 2: //衝撞
            obj = {
                'name': '衝撞',
                "intro": '魯莽地向前撞擊',
                "cost": 10
            }
            return obj;
        case 3: //上頂
            obj = {
                'name': '上頂',
                "intro": '野獸時常使用這招令獵物失去平衡',
                "cost": 10
            }
            return obj;
        case 4: //純淨水槍
            obj = {
                'name': '純淨水槍',
                "intro": '用清澈的水滋滋亂射',
                "cost": 10
            }
            return obj;
        case 5: //水砲
            obj = {
                'name': '水砲',
                "intro": '聚集了強大水壓的大砲',
                "cost": 10
            }
            return obj;
        case 6: //黃金衝撞
            obj = {
                'name': '黃金衝撞',
                "intro": '以黃金液體包裹全身的衝撞',
                "cost": 10
            }
            return obj;
        case 7: //泰山壓頂
            obj = {
                'name': '泰山壓頂',
                "intro": '必須有一定噸位之人才能駕馭此招',
                "cost": 10
            }
            return obj;
        case 8: //睡覺
            obj = {
                'name': '睡覺',
                "intro": '快速進入睡眠，回復HP',
                "cost": 10
            }
            return obj;
        case 9: //詐寢
            obj = {
                'name': '詐寢',
                "intro": '熬夜使你攻擊力大增，但是抵抗力也大幅下降',
                "cost": 10
            }
            return obj;
        case 10: //貓讚拳
            obj = {
                'name': '貓讚拳',
                "intro": '貓貓都忍不住給你一個讚',
                "cost": 10
            }
            return obj;
        case 11: //放火
            obj = {
                'name': '放火',
                "intro": 'ㄇㄉㄈㄎ',
                "cost": 10
            }
            return obj;
        case 12: //法術/飛箭
            obj = {
                'name': '法術/飛箭',
                "intro": '最基本的魔法招式，凝聚一道魔法飛箭攻擊敵人',
                "cost": 10
            }
            return obj;
        case 13: //法術/障壁
            obj = {
                'name': '法術/障壁',
                "intro": '最基本的魔法招式，能些微增強自身的防禦',
                "cost": 10
            }
            return obj;
        case 14: //羊突猛進
            obj = {
                'name': '羊突猛進',
                "intro": '利用羊角進行的猛烈衝撞',
                "cost": 10
            }
            return obj;
        case 15: //西域刀羊千羊斬

            obj = {
                'name': '千羊斬',
                "intro": '「一枝花」西域刀羊的絕學，進行三次的快速斬擊',
                "cost": 10
            }
            return obj;
        case 16: //召喚寶可夢
            obj = {
                'name': '召喚寶可夢',
                "intro": '就決定是你了!',
                "cost": 10
            }
            return obj;
        case 17: //斷崖之劍
            obj = {
                'name': '斷崖之劍',
                "intro": '將大地的力量化為利刃攻擊對手',
                "cost": 10
            }
            return obj;
        case 18: //地震
            obj = {
                'name': '地震',
                "intro": '用地震的衝擊，攻擊周圍的敵人',
                "cost": 10
            }
            return obj;
        case 19: //根源波動
            obj = {
                'name': '根源波動',
                "intro": '放出無數閃耀著青白色光輝的光線攻擊對手',
                "cost": 10
            }
            return obj;
        case 20: //暴風雪
            obj = {
                'name': '暴風雪',
                "intro": '將猛烈的暴風雪吹向對手進行攻擊',
                "cost": 10
            }
            return obj;
    }
}