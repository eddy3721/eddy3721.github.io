var all_rate = {
    '傳說': 2.60,
    '神話': 2.25,
    '史詩': 2.00,
    '頂級': 1.70,
    '精良': 1.40,
    '上等': 1.20,
    '普通': 1.00,
    '次等': 0.85,
    '劣質': 0.70,
    '破爛': 0.55,
    '垃圾般': 0.30
};
var all_type = {
    '單手劍': [1, 1, 1, 1],
    '雙手劍': [1.55, 1.737, 2.7, 1.386],
    '單手球棒': [0.8333, 1.072, 0.7555, 0.927],
    '球棒': [1.5, 1.7, 2.5, 1.1],
    '單手錘': [1.074, 0.4688, 1.88, 1.02],
    '長槍': [1.35, 2, 0.25, 1.112],
    '單手斧': [1.2, 0.636, 2.15, 1.05],
    '盾牌': [0.17, 1.636, 0.505, 1.085],
    '十字鎬': [0.986, 0.582, 3.12, 1.056],
    '水龍頭': [0.167, 0.18, 0.25, 0.555],
    '口罩': [0.0524, 0.1104, 0.125, 0.5438],
    '礦靴': [0.15, 0.32, 0.95, 0.74],
    '礦工帽': [0.15, 0.47, 1.3, 0.74]
};
var all_mine = {
    '桐木': [16.825, 30.8358, 5.58441, 45.4875],
    '石頭': [33.65, 46.3, 11.16882, 30.325],
    '鐵礦': [33.65, 46.3, 16.77, 60.65],
    '銅礦': [50.475, 30.8358, 16.77, 90.975],
    '銀礦': [117.775, 46.3, 27.93882, 45.4875],
    '金礦': [151.425, 46.3, 33.54, 30.325],
    '鉑': [134.6, 138.9, 44.70882, 136.4625],
    '鑽石': [67.3, 138.9, 39.12441, 166.7875],
    '鑽石(盾)': [67.3, 185.2, 39.12441, 166.7875],
    '鑽石(單手槌)': [117.775, 138.9, 39.12441, 166.7875],
    '好運石': [67.3, 108.0179, 22.35441, 90.975],
    '冰龍血': [218.725, 46.3, 55.89441, 15.1625],
    '琥珀': [100.95, 61.7179, 16.77, 45.4875],
    '強運水晶': [100.95, 46.3, 22.35441, 30.325],
    '死人骨頭': [84.125, 61.7179, 0, 30.325],
    '山羊眼': [168.25, 77.1358, 50.31, 60.65],
    '山羊角': [235.55, 138.9, 55.89441, 151.625],
    '山羊皮': [100.95, 200.6179, 27.93882, 197.1125],
    '山羊骨': [134.6, 185.2, 46.1175, 227.4375],
    '黑曜石': [89.733109, 61.7179, 33.54, 106.1375],
    '黑曜石(銳器)': [242.28, 61.7179, 33.54, 106.1375],
    '黑曜石(單手錘)': [134.733109, 61.7179, 33.54, 106.1375],
    '魔鐵': [168.25, 108.0179, 55.89441, 106.1375],
    '閃鐵': [218.725, 169.7358, 79.6575, 121.3],
    '魔岩': [134.6, 154.3179, 39.12441, 151.625],
    '閃岩': [168.25, 219.925, 55.89441, 181.95],
    '魔銀': [235.55, 123.4358, 71.2725, 90.975],
    '紅砂岩': [117.775, 138.9, 50.31, 166.7875],
    '牙齒': [117.775, 108.805, 39.4095, 151.625],
    '尖刺腳骨(單手劍)': [235.55, 215.295, 33.54, 121.3],
    '尖刺腳骨(單手錘)': [245.55, 214.2715088, 33.505, 121.24],
    '頭骨': [84.125, 312.525, 50.31, 272.925],
    '脊椎': [117.775, 277.8, 71.2725, 242.6],
    '尾骨': [286.025, 200.6179, 55.89441, 151.625],
    '前爪骨': [336.5, 162.05, 72.66441, 197.1125]
};

function atk() {
    let proficiency = document.getElementById("input_2").value;
    let rate = document.getElementById("input_3").value;
    let type = document.getElementById("input_4").value;
    let mine = document.getElementById("input_5").value;
    let newAtk = document.getElementById("input_6").value;
    newAtk = newAtk / all_type[type][0] / all_rate[rate] / all_mine[mine][0];
    newAtk /= (1 + 0.02 * Math.pow(proficiency, 0.5));
    document.getElementById("input_10").value = newAtk.toFixed(2);
}

function def() {
    let proficiency = document.getElementById("input_2").value;
    let rate = document.getElementById("input_3").value;
    let type = document.getElementById("input_4").value;
    let mine = document.getElementById("input_5").value;
    let newDef = document.getElementById("input_7").value;
    newDef = newDef / all_type[type][1] / all_rate[rate] / all_mine[mine][1];
    newDef /= (1 + 0.02 * Math.pow(proficiency, 0.5));
    document.getElementById("input_11").value = newDef.toFixed(2);
}

function mp() {
    let proficiency = document.getElementById("input_2").value;
    let rate = document.getElementById("input_3").value;
    let type = document.getElementById("input_4").value;
    let mine = document.getElementById("input_5").value;
    let newMp = document.getElementById("input_8").value;
    newMp = newMp / all_type[type][2] / all_rate[rate] / all_mine[mine][2];
    newMp /= (1 + 0.02 * Math.pow(proficiency, 0.5));
    document.getElementById("input_12").value = newMp.toFixed(2);
}

function dur() {
    let proficiency = document.getElementById("input_2").value;
    let rate = document.getElementById("input_3").value;
    let type = document.getElementById("input_4").value;
    let mine = document.getElementById("input_5").value;
    let newDur = document.getElementById("input_9").value;
    newDur = newDur / all_type[type][3] / all_rate[rate] / all_mine[mine][3];
    newDur /= (1 + 0.02 * Math.pow(proficiency, 0.5));
    document.getElementById("input_13").value = newDur.toFixed(2);
}

function all_change() {
    atk();
    def();
    mp();
    dur();
}

function copyBtn() {
    let content = "";
    content += document.getElementById('input_1').value + "(";
    content += document.getElementById('input_4').value + ")\n";
    content += "攻擊力: " + document.getElementById('input_10').value + "\n";
    content += "防禦力: " + document.getElementById('input_11').value + "\n";
    content += "挖礦力: " + document.getElementById('input_12').value + "\n";
    content += "耐久度: " + document.getElementById('input_13').value;
    text = document.getElementById('copy_content');
    text.value = content;
    text.select();

    document.execCommand("copy");
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: '複製成功!'
    })
}

function show_name() {
    let eq_name = document.getElementById('input_1').value
    let type = document.getElementById("input_4").value;
    $('#name_and_type').text(eq_name + " " + type);
}

function screenShot() {
    html2canvas(document.getElementById('screen_shot')).then(function(canvas) {
        let a = document.createElement('a');
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = 'ofc_tn.jpg';
        a.click();
    });
}

function saveBtn() {
    let name = document.getElementById("input_1").value;
    let proficiency = document.getElementById("input_2").value;
    let atk = document.getElementById("input_6").value;
    let def = document.getElementById("input_7").value;
    let mp = document.getElementById("input_8").value;
    let dur = document.getElementById("input_9").value;
    let user = document.getElementById('input_14').value;
    if (name && proficiency && atk && def && mp && dur && user) {
        $('#save_btn').attr('disabled', false);
    } else {
        $('#save_btn').attr('disabled', true);
    }
}

function send() {
    let type = document.getElementById('input_4').value;
    let formula = document.getElementById('input_5').value;
    let name = document.getElementById('input_1').value;
    let rate = document.getElementById('input_3').value;
    let atk = document.getElementById('input_10').value;
    let def = document.getElementById('input_11').value;
    let mp = document.getElementById('input_12').value;
    let dur = document.getElementById('input_13').value;
    let user_name = document.getElementById('input_14').value;

    $('#save_btn').attr('disabled', true);

    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxfFhJie11I1slC1MelT3NWON01MS1Qg9Jb9rOeD6joCm6K9cUm4FznOxaX2w6r-eZmyg/exec",
        data: {
            "forge_skill": type,
            "formula": formula,
            "name": name,
            "rate": rate,
            "atk": atk,
            "def": def,
            "mp": mp,
            "dur": dur,
            "user_name": user_name
        },
        success: function(response) {
            if (response == "成功") {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: '存入成功(ゝ∀･)b'
                })
                $('#save_btn').attr('disabled', false);
            }
        },
    });
};

function check() {
    let name = document.getElementById("input_table_1").value;
    let type = document.getElementById("input_table_2").value;

    if (name && type) {
        $('#search_btn').attr('disabled', false);
    } else {
        $('#search_btn').attr('disabled', true);
    }
}

function show_table() {
    $('#rank').empty();
    $('#show').empty();
    $('#search_btn').attr('disabled', true);
    $('#search_btn').html('<div class="spinner-border spinner-border-sm" role="status"><span class="sr-only">Loading...</span></div>');

    let arr = [];
    let max_atk = ['啵', 0];
    let max_def = ['啵', 0];
    let max_mp = ['啵', 0];
    let max_dur = ['啵', 0];
    let len = -1;
    let content = "";
    //let rank = "";
    let name = document.getElementById("input_table_1").value;
    let type = document.getElementById("input_table_2").value;

    var a = {
        sheetUrl: 'https://docs.google.com/spreadsheets/d/1SCn9cYZ6FJRL3Cw_OxT_8wuxqhi_-2W1j2byXBvsHP4/edit#gid=0',
        sheetTag: '工作表1',
        row: 2,
        col: 1,
        endRow: 400,
        endCol: 9
    };
    $.get('https://script.google.com/macros/s/AKfycbxn4eY8EDqqvMnYZg0fTUdUQRQjfohSmjdZGMcBuJbs834r49jExOcIyNTCjgsyRpoa3Q/exec', a, function(data) {
        var d = data.split(','); //把傳出來的字串分割成陣列
        for (let i = 1; i < (a.endRow - a.row + 1); i++) {
            if (!d[9 * i]) {
                break;
            }
            if (d[9 * i] == type && d[9 * i + 8] == name) {
                let b = [];
                for (let j = 0; j < 9; j++) {
                    b[j] = d[9 * i + j];
                }
                arr[++len] = b;

                if (arr[len][4] >= max_atk[1]) {
                    max_atk[0] = arr[len][2];
                    max_atk[1] = arr[len][4];
                }
                if (arr[len][5] >= max_def[1]) {
                    max_def[0] = arr[len][2];
                    max_def[1] = arr[len][5];
                }
                if (arr[len][6] >= max_mp[1]) {
                    max_mp[0] = arr[len][2];
                    max_mp[1] = arr[len][6];
                }
                if (arr[len][7] >= max_dur[1]) {
                    max_dur[0] = arr[len][2];
                    max_dur[1] = arr[len][7];
                }
            }
        }

        //let t = ['最高攻擊力', '最高防禦力', '最高挖礦力', '最高耐久力'];
        //rank += '<div class="form-row">';
        /*for (let i = 0; i < 4; i++) {
            rank += '<div class="form-group col-md-3 col-sm-6"><div class="form-row"><div class="form-group col-md-5 col-sm-5 col-2"><p class="mg_bottom_0">';
            rank += t[i];
            rank += '</p></div><div class="form-group col-md-7 col-sm-7 col-5"><p class="mg_bottom_0 gray">';
            switch (i) {
                case 0:
                    rank += max_atk[0];
                    break;
                case 1:
                    rank += max_def[0];
                    break;
                case 2:
                    rank += max_mp[0];
                    break;
                case 3:
                    rank += max_dur[0];
                    break;
            }
            rank += '</p></div><div class="form-group col-md-12 col-sm-12 col-5"><div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated';
            switch (i) {
                case 0:
                    if (max_atk[1] < 1) {
                        rank += " bg-danger";
                    }
                    else if (max_atk[1] >= 1 && max_atk[1] < 2) {
                        rank += " bg-success";
                    }
                    else if (max_atk[1] >= 2) {
                        rank += " bg-warning";
                    }
                    break;
                case 1:
                    if (max_def[1] < 1) {
                        rank += " bg-danger";
                    }
                    else if (max_def[1] >= 1 && max_def[1] < 2) {
                        rank += " bg-success";
                    }
                    else if (max_def[1] >= 2) {
                        rank += " bg-warning";
                    }
                    break;
                case 2:
                    if (max_mp[1] < 1) {
                        rank += " bg-danger";
                    }
                    else if (max_mp[1] >= 1 && max_mp[1] < 2) {
                        rank += " bg-success";
                    }
                    else if (max_mp[1] >= 2) {
                        rank += " bg-warning";
                    }
                    break;
                case 3:
                    if (max_dur[1] < 1) {
                        rank += " bg-danger";
                    }
                    else if (max_dur[1] >= 1 && max_dur[1] < 2) {
                        rank += " bg-success";
                    }
                    else if (max_dur[1] >= 2) {
                        rank += " bg-warning";
                    }
                    break;
            }
            rank += '" role="progressbar" style="width: ';
            switch (i) {
                case 0:
                    rank += (max_atk[1] / 2 * 100).toString();
                    break;
                case 1:
                    rank += (max_def[1] / 2 * 100).toString();
                    break;
                case 2:
                    rank += (max_mp[1] / 2 * 100).toString();
                    break;
                case 3:
                    rank += (max_dur[1] / 2 * 100).toString();
                    break;
            }
            rank += '%;">';
            switch (i) {
                case 0:
                    rank += (max_atk[1]).toString();
                    break;
                case 1:
                    rank += (max_def[1]).toString();
                    break;
                case 2:
                    rank += (max_mp[1]).toString();
                    break;
                case 3:
                    rank += (max_dur[1]).toString();
                    break;
            }
            rank += '</div></div></div></div></div>';
        }
        rank += '</div>';*/

        content += '<table role="table" class="bag_table"><thead class="bag_column"><tr role="row"><th width="25%">名稱</th><th width="75%">';
        content += '<div class="custom-control custom-switch">\
                    <input type="checkbox" class="custom-control-input" id="customSwitch1" checked onclick="hide_strip(1);">\
                    <label class="custom-control-label checkbox_atk" for="customSwitch1">攻</label>\
                    </div>\
                    <div class="custom-control custom-switch">\
                    <input type="checkbox" class="custom-control-input" id="customSwitch2" checked onclick="hide_strip(2);">\
                    <label class="custom-control-label checkbox_def" for="customSwitch2">防</label>\
                    </div>\
                    <div class="custom-control custom-switch">\
                    <input type="checkbox" class="custom-control-input" id="customSwitch3" checked onclick="hide_strip(3);">\
                    <label class="custom-control-label checkbox_mp" for="customSwitch3">礦</label>\
                    </div>\
                    <div class="custom-control custom-switch">\
                    <input type="checkbox" class="custom-control-input" id="customSwitch4" checked onclick="hide_strip(4);">\
                    <label class="custom-control-label checkbox_dur" for="customSwitch4">耐</label>\
                    </div>';
        content += '</th></tr></thead><tbody class="hover_gray">';
        for (let i = 0; i < arr.length; i++) {
            content += '<tr role="row" class="curser_pointer"></tr>';
            content += '<th>' + arr[i][2].toString() + '</th>';
            /*content += '<th>' + arr[i][0].toString() + '</th>';
            content += '<th>' + arr[i][4].toString() + '</th>';
            content += '<th>' + arr[i][5].toString() + '</th>';
            content += '<th>' + arr[i][6].toString() + '</th>';
            content += '<th>' + arr[i][7].toString() + '</th>';*/
            content += '<th><div class="progress"><div class="progress-bar bg-atk" role="progressbar" style="width: ';
            content += (arr[i][4] / 2) * 25 + '%">' + arr[i][4] + '</div>';
            content += '<div class="progress-bar bg-def" role="progressbar" style="width: ';
            content += (arr[i][5] / 2) * 25 + '%">' + arr[i][5] + '</div>';
            content += '<div class="progress-bar bg-mp" role="progressbar" style="width: ';
            content += (arr[i][6] / 2) * 25 + '%">' + arr[i][6] + '</div>';
            content += '<div class="progress-bar bg-dur" role="progressbar" style="width: ';
            content += (arr[i][7] / 2) * 25 + '%">' + arr[i][7] + '</div>';
            content += '</div></th>';
            content += '</tr>';
        }
        content += '</tbody></table>'

        //$('#rank').append(rank);
        $('#show').append(content);
        $('#search_btn').html('查詢');
        $('#search_btn').attr('disabled', false);
    });
}

function fast_paste() {
    let str = $('#copy_content').val();
    let arr = str.split(/[\n]/);
    let name = arr[0];
    let translate = arr[3].substr(3);
    let type = arr[2].substr(3)
    let atk = parseInt(arr[5].substr(4));
    let def = parseInt(arr[6].substr(4));
    let mp = parseInt(arr[7].substr(4));
    let dur = parseInt(arr[8].substr(4));

    for (let i = 0; i < name.length; i++) {
        if (name[i] == " ") {
            name = name.substr(i);
            break;
        }
    }

    $('#input_1').val(name);
    $('#input_3').val(translate);
    $('#input_4').val(type);
    $('#input_6').val(atk);
    $('#input_7').val(def);
    $('#input_8').val(mp);
    $('#input_9').val(dur);
    all_change();
    //console.log(arr);
}

function teaching_1() {
    Swal.fire({
        icon: 'question',
        title: '新功能',
        html: '<p>快速貼上</p><img src="image/teaching_1.png"><p>直接複製裝備的這段文字，貼到複製區中</p><p>就會自動填入數值了</p><p>不過鍛造熟練度跟素材還是要自己填</p><p>手機使用者可能要注意第一行的下方需空一行</p>',
    })
}

function header() {
    let arr = [
        '耍癈中',
        '陳時中',
        '法環中',
        '睡覺中',
        '吃飯中',
        '測名中',
        '詐寢中',
        '上課中',
    ];
    let ran = Math.floor(Math.random() * arr.length);
    $('#header_mid').text(arr[ran]);
}

function hide_strip(i) {
    let arr = ['atk', 'def', 'mp', 'dur'];
    let check_status = $('#customSwitch' + i).is(':checked');
    if (check_status) {
        $('.bg-' + arr[i - 1]).show(500);
    } else {
        $('.bg-' + arr[i - 1]).hide(500);
    }
}