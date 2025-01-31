$(function() {
  $('.btn').on('click', function() {
    console.log('クリックされました');

    $('.text-box').val('クリックしました！');
  });
});