;(function($) {
  $.fn.tkoAlert = function(options) {
    const setting = $.extend(
      {
        action: 'hide'
      },
      options
    )

    if (setting.action == 'show') {
      $('.tko-alert').show()
    }
    if (setting.action == 'hide') {
      $('.tko-alert').hide()
    }
    $('#cancel-alert').click(function() {
      $('.tko-alert').hide()
    })
    $('#agree-alert').click(function() {
      if ($.isFunction(setting.callback)) {
        setting.callback.call(this)
      }
    })
  }
})(jQuery)
