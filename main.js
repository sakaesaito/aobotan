'use script';

//ローディングの設定（初回のみ）

// セッションストレージからフラグを取得
const isFirstLoad = sessionStorage.getItem('isFirstLoad');

// ページの読み込みが完了したときに実行される関数
window.addEventListener('load', function() {
  // フラグが 'true' でない場合（初回アクセス時またはフラグが削除された場合）
  if (isFirstLoad !== 'true') {
    // ローディング画面を表示
    const loadingElement = document.querySelector('.loading');
    loadingElement.classList.add('active');

    // 2秒後にローディング画面を非表示にする
    setTimeout(function() {
      // ローディング画面を非表示にする
      loadingElement.classList.remove('active');
      // コンテンツ要素を表示
      const contentsElement = document.querySelector('.contents.hidden');
      contentsElement.classList.remove('hidden'); // hiddenクラスを取り除くことでコンテンツを表示
      // セッションストレージにフラグを保存
      sessionStorage.setItem('isFirstLoad', 'true');
    }, 2000);
    setTimeout(function() {
      loadingElement.style.display = 'none'; // 非表示にする
    }, 2500);
  } else {
    // 2回目以降のアクセス時の処理を記述
    // コンテンツ要素を表示
    const contentsElement = document.querySelector('.contents.hidden');
    contentsElement.classList.remove('hidden'); // hiddenクラスを取り除くことでコンテンツを表示
  }
});



// ハンバーガーメニューとドロワーメニューの設定

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



// ホバーでドロップダウン
  
    // アコーディオンのタイトルをホバーした時の処理  
    $('.header-nav-main').hover(function () {  
      var parentLi = $(this).closest('li'); // 現在のリストアイテム（li）を取得  
      parentLi.children('.header-nav-drop').stop().slideDown(500); // サブメニューを500msかけて表示  
      parentLi.addClass('open'); // 'open'クラスを追加  
    }, function () {  
      var parentLi = $(this).closest('li'); // 現在のリストアイテム（li）を取得  
      parentLi.children('.header-nav-drop').stop().slideUp(500); // サブメニューを500msかけて非表示  
      parentLi.removeClass('open'); // 'open'クラスを削除  
    });  
  

    /* フェードインアニメ ------------------------------------------ */ 
// 動きのきっかけとなるアニメーションの名前を定義 

function fadeAnime() {
  // フェードインのトリガーとなる要素を取得
  $(".js-trigger-in").each(function () { var elemPos = $(this).offset().top; 
 // 要素の位置を取得
  var scroll = $(window).scrollTop();
  // 現在のスクロール位置を取得
  var windowHeight = $(window).height();
  // ウィンドウの高さを取得
  if (scroll >= elemPos - windowHeight) { 
 // 要素が画面内に入ったか判定
  $(this).addClass("fade-in"); 
 // クラスを付与してアニメーションを適用 
 } });
  // 上方向にフェードインするトリガーとなる要素を取得 
 $(".js-trigger-up").each(function () { var elemPos = $(this).offset().top + 100; 
 // 要素の位置を調整（100px上に設定） 
 var scroll = $(window).scrollTop(); 
 // 現在のスクロール位置を取得
  var windowHeight = $(window).height(); 
 // ウィンドウの高さを取得
  if (scroll >= elemPos - windowHeight) { 
 // 要素が画面内に入ったか判定
  $(this).addClass("fade-up"); 
 // クラスを付与してアニメーションを適用
  } 
 }); 
 }