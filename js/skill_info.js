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
        case 21: //水槍突刺
            obj = {
                'name': '水槍突刺',
                "intro": '將水流凝聚在長槍之上，向前突刺',
                "cost": 15
            }
            return obj;
        case 22: //黏液包覆
            obj = {
                'name': '黏液包覆',
                "intro": '用黏液包覆全身，能有效地減輕傷害',
                "cost": 10
            }
            return obj;
        case 23: //高壓水砲
            obj = {
                'name': '高壓水砲',
                "intro": '壓縮水流後一次發射的強力水砲',
                "cost": 15
            }
            return obj;
        case 24: //水遁/水連彈
            obj = {
                'name': '水遁/水連彈',
                "intro": '發射無數的水彈向四面八方散開',
                "cost": 15
            }
            return obj;
        case 25: //水之呼吸‧壹之型‧水面斬
            obj = {
                'name': '水之呼吸‧壹之型‧水面斬',
                "intro": '透過特殊呼吸法所使出的招式，以極快的速度向前水平斬擊',
                "cost": 25
            }
            return obj;
        case 26: //扔石子
            obj = {
                'name': '扔石子',
                "intro": '撿起地上的石頭隨便亂扔',
                "cost": 10
            }
            return obj;
        case 27: //撕咬
            obj = {
                'name': '撕咬',
                "intro": '野獸時常使用的招式，用利齒撕裂對手',
                "cost": 10
            }
            return obj;
        case 28: //棍棒敲擊
            obj = {
                'name': '棍棒敲擊',
                "intro": '敲暈帶回家',
                "cost": 12
            }
            return obj;
        case 29: //毒針
            obj = {
                'name': '毒針',
                "intro": '用有毒的蜂尾攻擊敵人',
                "cost": 12
            }
            return obj;
        case 30: //孢子
            obj = {
                'name': '孢子',
                "intro": '散發出有毒的孢子，另敵人吸入口鼻中',
                "cost": 12
            }
            return obj;
        case 31: //蜂蜜治癒
            obj = {
                'name': '蜂蜜治癒',
                "intro": '工蜂將採集的蜂蜜獻給蜂后，能夠回復生命值',
                "cost": 15
            }
            return obj;
        case 32: //連續毒針
            obj = {
                'name': '連續毒針',
                "intro": '連續射出有毒的尾針，小心變成刺蝟!',
                "cost": 20
            }
            return obj;
    }
}