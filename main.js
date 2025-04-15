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
      $(this).children(".header-nav-drop").stop().slideToggle(500); // サブメニューを500msかけて表示  
      $(this).children(".header-nav-main-box").toggleClass('open'); // 'open'クラスを追加    
    });  
  

    /* フェードインアニメ ------------------------------------------ */ 
// 動きのきっかけとなるアニメーションの名前を定義 

$(document).ready(function () {
  $(window).on("scroll", function () {
    var fvMessage = $(".fv-message");
    var fvOffset = fvMessage.offset().top; // 要素の位置
    var scrollPos = $(window).scrollTop(); // 現在のスクロール位置
    var windowHeight = $(window).height(); // 画面の高さ

    if (scrollPos > fvOffset - windowHeight + 100) {
      fvMessage.addClass("show");
    }
  });
});

$(document).ready(function () {
  $(window).on("scroll", function () {
    var aboutMessage = $(".top-about-message");
    var messageOffset = aboutMessage.offset().top; // 要素の位置
    var scrollPos = $(window).scrollTop(); // 現在のスクロール位置
    var windowHeight = $(window).height(); // 画面の高さ

    if (scrollPos > messageOffset - windowHeight + 100) {
      aboutMessage.addClass("show");
    }
  });
});



 // 写真無限ループのjQuery
const swiper = new Swiper('.swiper', {
  speed: 5000,
  loop: true, // プルーさせる
  allowTouchMove: false,//スワイプ有効
  centeredSlides: true,//中心を起点にする
  autoplay: {
    delay: 0, //途切れなくループ
  },
  breakpoints: {
    0: {
      slidesPerView: 1, // 一度に表示するスライドの数
      spaceBetween: 15, // 要素間の余白
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 48,
    },
    1500: {
      slidesPerView: 4,
      spaceBetween: 48,

    }
  }
});



// モーダルの設定
$(function () {
  $('.js-open').click(function () {
    var id = $(this).data('id'); // 何番目のキャプション（モーダルウィンドウ）か認識
    $('#overlay, .modal-window[data-id="modal' + id + '"]').fadeIn();
  });
  // オーバーレイクリックでもモーダルを閉じるように
  $('.js-close , #overlay').click(function () {
    $('#overlay, .modal-window').fadeOut();
  });
});