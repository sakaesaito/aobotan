'use script';

//ローディングの設定（初回のみ）

// セッションストレージからフラグを取得
const isFirstLoad = sessionStorage.getItem('isFirstLoad');

// ページの読み込みが完了したときに実行される関数
window.addEventListener('load', function () {
  // フラグが 'true' でない場合（初回アクセス時またはフラグが削除された場合）
  if (isFirstLoad !== 'true') {
    // ローディング画面を表示
    const loadingElement = document.querySelector('.loading');
    loadingElement.classList.add('active');

    // 2秒後にローディング画面を非表示にする
    setTimeout(function () {
      // ローディング画面を非表示にする
      loadingElement.classList.remove('active');
      // コンテンツ要素を表示
      const contentsElement = document.querySelector('.contents.hidden');
      contentsElement.classList.remove('hidden'); // hiddenクラスを取り除くことでコンテンツを表示
      // セッションストレージにフラグを保存
      sessionStorage.setItem('isFirstLoad', 'true');
    }, 2000);
    setTimeout(function () {
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

$(function () {
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
      slidesPerView: 1.8, // 一度に表示するスライドの数
      spaceBetween: 15, // 要素間の余白
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 35,
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
    $('.overlay, .modal-window[data-id="modal' + id + '"]').fadeIn();
    $('body').addClass('no-scroll'); // ←スクロール禁止
  });

  // オーバーレイクリックでもモーダルを閉じるように
  $('.js-close , .overlay , .modal-close-bar').click(function () {
    $('.overlay, .modal-window ').fadeOut();
    $('body').removeClass('no-scroll'); // ← スクロール許可
  });
});




// form ページの読み込みが完了した後に以下の処理を実行
$(document).ready(function () { // ページの読み込みが完了したら以下の処理を実行
  // 入力内容のバリデーション関数を定義
  function validateForm() {
      let isValid = true; // 初期状態は「入力OK」とする

      // 「お問い合わせの種類」が1つでも選択されているか確認
      if ($('input[name="check-name"]:checked').length === 0) isValid = false;

      // 姓の入力が空かどうか確認
      if ($('input[name="name"]').val().trim() === '') isValid = false;

      // 名の入力が空かどうか確認（2番目の input）
      if ($('.contact-name input').eq(1).val().trim() === '') isValid = false;

      // メールアドレスが入力されているか確認
      if ($('input[name="email"]').val().trim() === '') isValid = false;

      // 住所が入力されているか確認
      if ($('input[name="address"]').val().trim() === '') isValid = false;

      // 「確認チェックボックス」がチェックされているか確認
      if (!$('.check-box').is(':checked')) isValid = false;

      // isValid が true なら送信ボタンを有効化、false なら無効化
      $('#js-submit').prop('disabled', !isValid);
  }

  // 入力フィールドに変化があったらバリデーション関数を実行
  $('input').on('input change', function () {
      validateForm(); // 入力ごとにチェック
  });

  // フォームが送信されたときの処理
  $("form").submit(function (event) {
      event.preventDefault(); // デフォルトのフォーム送信を防ぐ（リロード防止）

      var $form = $(this); // このフォーム要素を変数に保存
      var formData = $form.serialize(); // 入力内容を URL エンコード形式で取得（今回は使わない）

      $form.find("#js-submit").fadeOut(); // 「送信する」ボタンをフェードアウトで非表示にする

      setTimeout(function () { // 0.7秒後に以下の処理を実行
          
          $form[0].reset(); // フォームの入力内容をリセット（初期状態に戻す）
          window.location.href = "thank/index.html"; // thanksページに遷移する
      }, 700); // 700ミリ秒後に実行
  });
});



//フォームの必須項目チェックでメール送信可能にする実装
// ページの読み込みが完了したら、以下の処理を実行する
$(document).ready(function () {
  // ID「js-submit」のボタン要素を取得し、変数 `$submitBtn` に代入します
  const $submitBtn = $('#js-submit')
  // フォーム内のすべての `input` 要素や `textarea` 要素に「change」イベントを監視
  // ユーザーが値を変更するたびに、以下の処理が実行
  $('#form input,#form textarea').on('change', function () {
    // 入力フィールドがすべて空でないか確認する
    if (
      $('#form input[type="text"]').val() !== "" && // テキスト入力フィールドが空でないか確認
      $('#form input[type="email"]').val() !== "" && // メールアドレス入力フィールドが空でないか確認
      $('#form input[type="address"]').val() !== ""// 住所入力フィールドが空でないか確認
    ) {
      // 上記すべての条件が満たされていれば、送信ボタン（$submitBtn）を有効化（disabledを解除）
      $submitBtn.prop('disabled', false);
      // 条件が一つでも満たされない場合、送信ボタン（$submitBtn）を無効化（disabledを有効化）
    } else {
      $submitBtn.prop('disabled', true);
    }
  });
});



// スムーススクロール
// ページの読み込みが完了したら実行
$(function () {
  
  // id属性（#で始まるリンク）がクリックされた時に処理を実行
  $('a[href^="#"]').click(function () {
    
    // クリックされたリンクのhref属性の値を取得
    var href = $(this).attr("href");
    
    // hrefが"#"または空文字ならhtml要素、それ以外ならそのhref先の要素を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    
    // 対象要素の縦位置（画面上からの距離）を取得
    var position = target.offset().top;
    
    // スクロールの速さ（500ミリ秒）を設定
    var speed = 500;
    
    // ページを対象位置までアニメーションしながらスクロール
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    
    // リンク本来の動作をキャンセル（ページジャンプを防ぐ）
    return false;
  });
});