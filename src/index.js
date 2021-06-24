import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
var COS = require('cos-js-sdk-v5');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

var cos = new COS({
  SecretId: 'AKIDGUYXuBcH5lGdM748OVYSAnX8ZO2TN07B',
  SecretKey: '2tY1LVYRqDiCYkneLuJ9oKtbKwPkPtFW',
});

cos.putObject({
  Bucket: 'reading-1259170587', /* 必须 */
  Region: 'ap-chengdu',     /* 存储桶所在地域，必须字段 */
  Key: 'post/postClass',              /* 必须 */
  Body: JSON.stringify({a:1,b:2}), // 上传文件对象
  onProgress: function(progressData) {
      console.log(JSON.stringify(progressData));
  }
}, function(err, data) {
  console.log(err || data);
});

cos.getObject({
  Bucket: 'reading-1259170587', /* 必须 */
  Region: 'ap-chengdu',     /* 存储桶所在地域，必须字段 */
  Key: 'post/postClass',           /* 非必须 */
}, function(err, data) {
  console.log(err || data.Body);
});