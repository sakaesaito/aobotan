'use script';

$(function () {
  //メニューボタンをクリックしたら
  $(".sp_menu").click(function () {
    //「.sp_menu」に「.active」を追加・削除
    $(this).toggleClass("active");
    //「.nav」に「.active」を追加・削除
    $(".drawer_nav").toggleClass("active");
    // ナビゲーションメニュー内のリンク（.drawer_item a）がクリックされたときの処理を定義
    $(".drawer_item a").click(function () {
      //メニューボタンから「.active」クラスを削除
      $(".sp_menu").removeClass("active")
      // ナビゲーションメニューから「.active」クラスを削除
      $(".drawer_nav").removeClass("active")
    })
  });
});




// レスポンシブの375px未満のviewport画面幅を固定
!(function () {
  // viewport の内容を保留関数を定義
  const viewport = document.querySelector('meta[name="viewport"]');
  //画面幅が 375px より広い場合は大丈夫設定、それ以外は幅を 375px に固定
  function switchViewport() {
    // 新しいコンテンツを設定 } }
    const value =
      //画面幅が 375px より広い場合は大丈夫設定、それ以外は幅を 375px に固定
      window.outerWidth > 375
        // 375px未満の場合の設定// 現在のビューポートのコンテンツ属性が変更する値と異なる場合のみ設定を更新する
        ? 'width=device-width,initial-scale=1'
        : 'width=375';
    // 新しいコンテンツを設定 } 
    // ウィンドウのリサイズイベントに関数を登録（画面サイズ変更実行されるようにする
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }
  // ページ読み込み時に最初に一度 viewport の切り替えを実行 
  addEventListener('resize', switchViewport, false);
  switchViewport();
})



