# etStyle
使用方法
======================
（1）获取etStyle：通过运行bower install etStyle 安装 etStyle
（2）在你的index.html里面包括etStyle.js 和 style.css
（3）添加“et.style”到主模块的列表

```html
<!doctype html>
<html ng-app="myApp">
<head>
		<link rel="stylesheet" href="etStyle/style.css" />
    <script src="etStyle/etStyle.js"></script>
    <script>
        var myApp = angular.module('myApp', ['et.style']);
    </script>
    ...
</head>
<body>
    ...
</body>
</html>
```
