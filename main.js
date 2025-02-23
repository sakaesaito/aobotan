// ドロワーメニュー
$(function(){
    //メニューボタンをクリックしたら
    $(".sp_menu").click(function(){
    //「.menu」に「.active」を追加・削除
    $(this).toggleClass("active");
    //「.nav」に「.active」を追加・削除
    $(".drawer_nav").toggleClass("active");
    });
    });