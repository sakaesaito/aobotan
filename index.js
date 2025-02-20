function loadingStop() {
    $('.loadingWrap').addClass('loadingNone');  // 'loadingNone' クラスを追加
  
    // 1秒後に display: none; を設定
    setTimeout(function() {
      $('.loadingWrap').css('display', 'none');
    }, 1000);
  }
  
  $(window).on('load', function() {
    loadingStop();
  });