function showItem() {
    let bag = JSON.parse(decode(localStorage.getItem("item"), key));
    let user = JSON.parse(decode(localStorage.getItem("userInfo"), key));
    let content = '';
    let list = [
        ['武器', 'weapon'],
        ['頭部', 'head'],
        ['身體', 'body'],
        ['腿部', 'foot']
    ];

    for (let i = 0; i < list.length; i++) {
        let item = bag[list[i][1]];
        content = '';
        content += '<table role="table" class="bag_table"><thead class="bag_column"><tr role="row"><th width="25%">';
        content += list[i][0];
        content += '</th><th>HP</th><th>MP</th><th>ATK</th><th>MATK</th><th>DEF</th><th>MDEF</th></tr>\
                    </thead><tbody class="hover_gray">';
        for (let j = 0; j < item.length; j++) {
            let item_num = item[j];
            let item_obj = item_eq(item[j]);
            content += '<tr role="row" class="curser_pointer"></tr><tr onclick = "item_introduce(';
            content += item_num;
            content += ');" id="eq_';
            content += item_num;
            content += '" class="';
            if (user['eq'][item_obj['type']] == item_num) {
                content += 'bc-yellow';
            }
            content += '"><th>';
            content += item_obj['name'];
            content += '</th><th>' + item_obj['HP'].toString();
            content += '</th><th>' + item_obj['MP'].toString();
            content += '</th><th>' + item_obj['ATK'].toString();
            content += '</th><th>' + item_obj['MATK'].toString();
            content += '</th><th>' + item_obj['DEF'].toString();
            content += '</th><th>' + item_obj['MDEF'].toString();
            content += '</th></tr>';

        }
        content += '</tbody>';

        $('#show_table').append(content);
    }
}

function item_introduce(n) {
    let intro = item_eq(n);
    let user = JSON.parse(decode(localStorage.getItem("userInfo"), key));
    let type = intro['type'];
    if (user['eq'][type] == n) {
        Swal.fire({
            title: intro['name'],
            html: '<p>' + intro['intro'] + '</p>',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonText: '取消',
            confirmButtonText: '卸下'
        }).then((result) => {
            if (result.isConfirmed) {
                user['eq'][type] = 0;

                localStorage.setItem("userInfo", encode(JSON.stringify(user), key));
                $('#eq_' + n).toggleClass("bc-yellow");
            }
        });
    } else {
        Swal.fire({
            title: intro['name'],
            html: '<p>' + intro['intro'] + '</p>',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonText: '取消',
            confirmButtonText: '裝備'
        }).then((result) => {
            if (result.isConfirmed) {
                if (!user['eq'][type]) {
                    user['eq'][type] = n;
                } else {
                    $('#eq_' + user['eq'][type]).toggleClass("bc-yellow");
                    user['eq'][type] = n;
                }

                localStorage.setItem("userInfo", encode(JSON.stringify(user), key));
                $('#eq_' + n).toggleClass("bc-yellow");
            }
        });
    }

}