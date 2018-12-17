/*
 * @Author: ZXY 
 * @Date: 2018-12-17 09:49:16 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-12-17 10:23:43
 */

//点击切换按钮
$('.btn-range').on('click', function() {
    if ($(this).hasClass('show')) {
        $('.start').html('上海');
        $('.end').html('北京');
        $(this).removeClass('show');
    } else {
        $('.start').html('北京');
        $('.end').html('上海');
        $(this).addClass('show');
    }
});

var date = new Date();

var year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate();
$('.now').html(`${year}-${month}-${day}`);


$('.btn').on('click', function() {
    $.ajax({
        url: '/api/get/train_tickets',
        data: {
            date: `${year}-${month}-${day}`
        },
        success: function(res) {
            alert(res.msg);
            if (res.code == 1) {
                location.href = './page/page.html'
            }
        }
    })
});