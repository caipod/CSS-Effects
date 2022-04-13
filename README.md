# 网站功能说明
该网站可用来测试各平台设备浏览器对于 CSS 特性的兼容性。

从左至右（或从上往下）功能分别为：

## 第一张卡片：
网站封面图。

我分别用 sRGB 和 P3 色域的代码写了这张卡片的背景，如果你用苹果设备与其他设备对比观看，会发现颜色的鲜艳程度不同。

把鼠标悬浮在卡片上，会显示标题文字。
```css
backdrop-filter:
```

## 第二张卡片：
测试浏览器是否支持显示 10px 与 8px 字号大小。若不支持这两种字号大小，浏览器会以 12px 字号来渲染。

把鼠标悬浮在文字上，会出现文字放大效果。
```css
font-size:
```

## 第三张卡片：
测试浏览器或操作系统是否支持显示多种字重。对于西文，我设置了 100～900 的字重。对于中文，我设置了 100～600 的字重显示。我将 Regular(400) 字重设为了蓝色，方便对比。

把鼠标悬浮在文字上，会出现文字放大效果。
```css
Font-weight:
```

## 第四张卡片：
测试浏览器是否支持背景高斯模糊效果。

把鼠标悬浮在透明方块上，会出现放大效果。
```css
backdrop-filter:
```
## 第五张卡片：
测试操作系统是否支持亮/暗色切换。
```css
@media (prefers-color-scheme: dark) 
```

## 第六张卡片：
测试设备是否支持 Display P3 色域的图片显示。若支持 Display P3 色域，左右两个半圆的颜色会有些许的不同，左侧的绿色比右侧更鲜艳，若不支持 Display P3 色域，左右两个半圆的颜色则一致。

使用绿色作为对比是因为绿色的 sRGB 与 Display P3 色域范围差别最大。

## 第七张卡片：
测试浏览器是否支持sRGB、Display P3 或 rec2020 色域，若支持，蓝灯亮起，反则不亮灯。
```css
@media (color-gamut: )
```

## 第八张卡片：
以图片格式测试浏览器对 Display P3 与sRGB 色域的兼容性，如果您的浏览器支持 Display P3色域，那么左右两侧的半圆颜色应该会有些许不同。

把鼠标放在卡片上，左右两个半圆会有错位的效果，并指示出两个半圆的颜色配置。

## 第九张卡片：
通过Javascript来查看当前的设备参数。
从上至下分别为：
- 设备逻辑分辨率
- 缩放倍率
- 渲染分辨率
- 窗口逻辑分辨率
- 屏幕比例
- 浏览器色深

## 第十张卡片：
字面意思。

把鼠标放在卡片上，圆圈与副标题会渐渐浮现。

<hr>
目前发现网站对于 Firefox 浏览器兼容性不太好，很多特性都不支持，例如 z-index 与背景高斯模糊。

整体显示效果最好的浏览器是Safari。

**使用资源：**
- [SF 符号](https://developer.apple.com/sf-symbols/)
- [Sans Forgetica 字体](https://sansforgetica.rmit.edu.au/)
- [What is my resolution?](https://whatismyresolution.com/)
- [Resolution Inspector](http://dev.jeffersonscher.com/resolution.html)ba
- [Clip Path 制作工具](https://bennettfeely.com/clippy/)

如果你的设备不能正确显示某些效果，不一定代表浏览器不支持，也可能是我没优化到位。😃有问题请通过邮箱联系我。
