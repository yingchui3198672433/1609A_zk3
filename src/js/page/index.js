/*
 * @Author: ZXY 
 * @Date: 2018-12-17 09:49:16 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-12-17 09:54:18
 */

//点击切换按钮
$('.btn-range').on('click', function() {
    if ($(this).hasClass('.show')) {
        $('.start').html('上海');
        $('.end').html('北京');
        $(this).removeClass('.show');
    } else {
        $('.start').html('北京');
        $('.end').html('上海');
    }
})