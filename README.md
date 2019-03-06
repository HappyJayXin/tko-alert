# tko-alert

**Document**  


引入
```html
<link rel="stylesheet" href="./tko-alert-box.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.0/jquery.min.js"></script>
<script src="tko-alert.js"></script>
```

HTML
```html
<div class="tko-alert">
  <div class="alert-main">
    <div class="alert-title">提示</div>
    <div class="alert-content">
      為了您的購買權益，每次修改完E-mail，
      需要重新至您的信箱做驗證。   
    </div>
    <div class="alert-btn-block">
      <button id="cancel-alert">取消</button>
      <button id="agree-alert">確認</button>
    </div>
  </div>
</div>
```
Javascript
```javascript
$('#btn').on('click', () => {
  $('.tko-alert').tkoAlert({
    action: 'show',
    callback: function() {
      $('.tko-alert').tkoAlert()
    }
  })
})
```
API  | 功能 | 類型
------------- | ------------- | :-------------:
default  | 不加入參數預設功能是關閉提醒視窗 | -
action  | `show`和`hide`，控制開啟和關閉提醒視窗 | String
cancel | 按下取消事件要做的事 | Function
success | 按下確定事件要做的事 | Function
