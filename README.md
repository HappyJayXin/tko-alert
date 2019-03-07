# tko-alert 

Load File
```html
<link rel="stylesheet" href="./tko-alert-box.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.0/jquery.min.js"></script>
<script src="tko-alert.js"></script>
```

HTML
```html
<div class="tko-alert">
  <div class="alert-main">
    <div class="alert-title"></div>
    <div class="alert-content"></div>
    <div class="alert-btn-block">
      <button class="cancel-alert">取消</button>
      <button class="agree-alert">確認</button>
    </div>
  </div>
</div>
```

Use
```javascript
$('.tko-alert').tkoAlert()
```

Javascript
```javascript
$('#btn').on('click', () => {
  $('.tko-alert').tkoAlert({
    action: 'show',
    title: '提示',
    content: [
      '為了您的購買權益，每次修改完E-mail，',
      '需要重新至您的信箱做驗證。'
    ],
    success() {
      // do something      
    },
    cancel() {
      // do something      
    }
  })
})
```
API  | 功能 | 類型
------------- | ------------- | :-------------:
default  | 不加入參數預設功能是關閉提醒視窗 | -
action  | `show`和`hide`，控制開啟和關閉提醒視窗 | String
title | 提醒視窗標題，預設空字串，也可以填寫在html中 | String
content | 提醒視窗內容，預設空字串，用每個元素隔開代表斷行 | Array
cancel | 按下取消事件要做的事 | Function
success | 按下確定事件要做的事 | Function
