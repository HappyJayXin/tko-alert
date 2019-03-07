;(function($) {
  $.fn.tkoAlert = function(options) {
    const setting = $.extend(
      {
        action: 'hide',
        title: '',
        content: '',
        cancel: function() {},
        success: function() {}
      },
      options
    )

    if (options.action == 'show') {
      $('.tko-alert').show()
    } else if (options.action == 'hide') {
      $('.tko-alert').hide()
    }

    $('.alert-title').text(options.title)

    $('.alert-content').html(options.content.join('<br>'))

    $('.cancel-alert').on('click', function() {
      if ($.isFunction(setting.cancel)) {
        options.cancel.call(this)
      }
      removeEvent()
    })
    $('.agree-alert').on('click', function() {
      if ($.isFunction(setting.success)) {
        options.success.call(this)
      }
      removeEvent()
    })

    function removeEvent() {
      $('.tko-alert').hide()
      $('.cancel-alert').off('click')
      $('.agree-alert').off('click')
    }
  }
})(jQuery)
