'use strict';

// ローディングの設定（初回のみ）

// セッションストレージからフラグを取得
const isFirstLoad = sessionStorage.getItem('isFirstLoad');

// ページの読み込みが完了したときに実行される関数
window.addEventListener('load', function () {
  // フラグが 'true' でない場合（初回アクセス時またはフラグが削除された場合）
  if (isFirstLoad !== 'true') {
    // ローディング画面を表示
    const loadingElement = document.querySelector('.loading');
    loadingElement.classList.add('loading--active');

    // 2秒後にローディング画面を非表示にする
    setTimeout(function () {
      // ローディング画面を非表示にする
      loadingElement.classList.remove('loading--active');
      // コンテンツ要素を表示
      const contentsElement = document.querySelector('.l-contents.is-hidden');
      contentsElement.classList.remove('is-hidden');
      // セッションストレージにフラグを保存
      sessionStorage.setItem('isFirstLoad', 'true');
    }, 2000);
    setTimeout(function () {
      loadingElement.style.display = 'none';
    }, 2500);
  } else {
    // 2回目以降のアクセス時の処理
    const contentsElement = document.querySelector('.l-contents.is-hidden');
    if (contentsElement)
      contentsElement.classList.remove('is-hidden');
  }
});


// ハンバーガーメニューとドロワーメニューの設定

$(function () {
  $(".sp-header__btn").click(function () {
    $(this).toggleClass("is-active");
    $(".drawer").toggleClass("is-active");

    // ドロワーが表示されている場合、スクロールを無効にする
    if ($(".drawer").hasClass("is-active")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "auto");
    }

    $(".drawer__item a").click(function () {
      $(".sp-header__btn").removeClass("is-active");
      $(".drawer").removeClass("is-active");
      $("body").css("overflow", "auto");
    });
  });
});



// レスポンシブの375px未満のviewport画面幅を固定

$(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 375
        ? 'width=device-width,initial-scale=1'
        : 'width=375';
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }
  addEventListener('resize', switchViewport, false);
  switchViewport();
})



// ホバーでドロップダウン

$('.header__nav-main').hover(function () {
  $(this).children(".header__nav-drop").stop().slideToggle(500);
  $(this).children(".header__nav-main-box").toggleClass('is-open');
});


/* フェードインアニメ */

$(document).ready(function () {
  $(window).on("scroll", function () {
    var aboutMessage = $(".about-section__tagline");

    if (aboutMessage.length > 0) {
      var messageOffset = aboutMessage.offset().top;
      var scrollPos = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scrollPos > messageOffset - windowHeight + 100) {
        aboutMessage.addClass("is-show");
      }
    }
  });
});



// 写真無限ループのjQuery
const swiper = new Swiper('.swiper', {
  speed: 5000,
  loop: true,
  allowTouchMove: false,
  centeredSlides: true,
  autoplay: {
    delay: 0,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.8,
      spaceBetween: 15,
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
    var id = $(this).data('id');
    $('.modal__overlay, .modal__close-bar, .modal[data-id="modal' + id + '"]').fadeIn();
    $('body').addClass('no-scroll');
  });

  $('.js-close, .modal__overlay, .modal__close-bar').click(function () {
    $('.modal__overlay, .modal__close-bar, .modal').fadeOut();
    $('body').removeClass('no-scroll');
  });
});

// formの実装
$(document).ready(function () {
  const $submitBtn = $('#js-submit');
  $('#form input, #form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[name="check-name"]:checked').length > 0 &&
      $('#form input[type="checkbox"]').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);
    } else {
      $submitBtn.prop('disabled', true);
    }
  });
});

// スムーススクロール
$(function () {
  $('a[href^="#"]').click(function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("html,body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
