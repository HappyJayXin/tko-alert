;(function($) {
  $.fn.tkoAlert = function(options) {
    const setting = $.extend(
      {
        action: 'hide',
        title: '',
        content: [],
        cancel: function() {},
        success: function() {}
      },
      options
    )

    if (setting.action == 'show') {
      $('.tko-alert').show()
    } else if (setting.action == 'hide') {
      $('.tko-alert').hide()
    }

    $('.alert-title').text(setting.title)

    if (typeof setting.content === 'string') {
      $('.alert-content').html(setting.content)
    } else if (typeof setting.content === 'object') {
      $('.alert-content').html(setting.content.join('<br>'))
    }

    $('.cancel-alert').on('click', function() {
      if ($.isFunction(setting.cancel)) {
        setting.cancel.call(this)
      }
      removeEvent()
    })
    $('.agree-alert').on('click', function() {
      if ($.isFunction(setting.success)) {
        setting.success.call(this)
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
