if (typeof document == 'undefined') {
  require('open')('index.html')
} else {
  $(document).on('bubble', function() {
    $('.js-timestamp').text(Date.now())
  })

  !function() {
    var Vue = this.Vue || require('vue')
    new Vue({
      el: '#vue'
    })
  }()
}
