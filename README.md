# 关于/About

📌**网站定位：** 工具参考类。Reference.

🔧**功能：** 测试各个系统的浏览器对于 CSS 代码特性的兼容性。Test the compatibility of features of CSS code in each browser.

🔮**灵感：** 最初的灵感来源于爱否4老师的[博客](https://frankseptillion.com)的[测试页面](https://frankseptillion.com/test/)，并且希望借此机会学习HTML与CSS代码，所以做了这个网站。This project is inspired by the test page of Frank Septillion’s Blog, and I wanted to take this opportunity to learn HTML and CSS code, so I made this site.

✒️**设计：** 网站的整体颜色明快，使用我非常喜欢的蓝绿色+冷色搭配。首张卡片的背景颜色设计的比较鲜艳是为了突出主题，因为别的卡片背景都是以白色为主，所以需要用重色压一压，这样抑扬顿挫。The overall color of the website is bright and bright, using the blue-green + cool colors that I really like. The background color of the first card is designed to be brighter to highlight the theme, because the background of other cards are mainly white, so it needs to be pressed with a heavy color, so as to suppress.

✨**亮点：** 整个网站中用到切图的地方仅有色域对比卡片的两个绿色半圆以及网站的Favorite Icon，其他的样式和动效都是代码写出来的。The only places where cutouts are used in the whole site are the two green half circles of the color field comparison card and the Favorite Icon of the site, all other styles and animations are written in code.

# 功能/Features

从➡️左至右（或⬇️从上往下）

1⃣️**第1张卡片：**

这是网站的封面图。我分别用 sRGB 和 P3 色域的代码写了这张卡片的背景，如果你用苹果设备与其他设备对比观看，会发现颜色的鲜艳程度不同。把鼠标悬浮在卡片上，会以系统字体显示标题文字、中文标题以及网站地址，如果使用chrome浏览器，同时顶部也会显示网站logo，并且卡片会浮现45度炫光效果。

2⃣️**第2张卡片：**

这张卡片是设计规范的入口，我设想以此网站为起点，制作一套扩展的设计规范。当然设计规范目前还在锐意制作中，设计规范的名字就叫做 Design with Effects。

3⃣️**第3张卡片：**

测试浏览器是否支持 10px 与 8px 字号大小显示。若不支持这两种字号，浏览器会以 12px 字号来渲染。我将8px字号设置为了蓝色，方便对比。同时也使用transform scale与font szie%的方式分别制作了模拟10px与8px字号大小。把鼠标悬浮在文字上，会出现文字放大效果。这张卡片在Safari浏览器上显示效果最好。

已知问题：底部的两行字无法展示无法实现鼠标悬浮后在卡片底部显示相关提示文字。

[查看兼容性](https://caniuse.com/?search=font-size)

4⃣️**第4张卡片：**

测试浏览器或操作系统是否支持显示多种字重。对于西文，我设置了 100～900 与 Bold 字重。对于中文，我设置了 100～600 与 Bold 字重。我将 Regular(400) 字重设为了蓝色，方便对比。把鼠标悬浮在文字上，会出现文字放大效果。

[查看兼容性](https://caniuse.com/?search=font-weight)

5⃣️**第5张卡片：**

测试浏览器是否支持背景高斯模糊效果。如果浏览器能显示正确的效果，圆球应该在文字上方，以高斯模糊的背景样式遮住一部分文字。把鼠标悬浮在圆球上，圆球会放大，高斯模糊效果变淡，你可以看清背后的文字。

[查看兼容性](https://caniuse.com/?search=backdrop-filter)

6⃣️**第6张卡片：**

测试操作系统是否支持亮/暗色切换。把鼠标放在卡片上，相对应的图标会有细微动画，当切换系统亮/暗色时，会有湿滑的切换动画。

[查看兼容性](https://caniuse.com/?search=color-scheme)

7⃣️**第7张卡片：**

测试设备是否支持 Display P3 色域的图片显示。若支持 Display P3 色域，左右两半药丸的颜色会有些许的不同，右侧的绿色比左侧更鲜艳，若不支持 Display P3 色域，左右两半药丸的颜色则一致。使用绿色作为默认对比是因为绿色的 sRGB 与 Display P3 色域范围差别最大。把鼠标放在每个颜色上，颜色会展开成一个药丸形状，并且带有动画效果。

8⃣️**第8张卡片：**

测试浏览器是否支持sRGB、Display P3 或 rec2020 色域以及HDR内容，若支持，蓝灯亮起，反则不亮灯。把鼠标放在蓝色药丸里，蓝色会变亮。（HDR内容的媒介检测我感觉不太准确）

9⃣️**第9张卡片：**

以图片格式测试浏览器对 Display P3 与sRGB 色域的兼容性，如果您的浏览器支持 Display P3色域，那么左右两侧的半圆颜色应该会有些许不同。把鼠标放在卡片上，左右两个半圆会有错位的效果，并指示出两个半圆的颜色配置。

🔟**第10张卡片：**

测试浏览器是否支持 :has() 属性。若支持，三个圆形的渐变会呈现彩色，若不支持，三个圆圈为空心。将鼠标放在圆圈上，会有放大效果。

[查看兼容性](https://caniuse.com/?search=%3Ahas())

1⃣️1⃣️**第11张卡片：**

测试浏览器是否支持Flexbox的gap属性。若支持，花瓣会较为散开，若不支持，花瓣会较为聚拢。将鼠标放在卡片上，会有扩散效果。

[查看兼容性](https://caniuse.com/?search=gap)

1️⃣2⃣️**第12张卡片：**

测试浏览器是否支持@layer属性。若支持，会显示一个蓝色地球图形右上角会显示一个橙色的✨，   若不支持，则不会显示橙色✨。将鼠标悬浮在卡片上，会有动画效果。

[查看兼容性](https://caniuse.com/?search=%40layer)

1️⃣3⃣️**第13张卡片：**

测试浏览器是否支持color-mix()属性。若支持，两圆重叠处会显示颜色。若不支持，两圆重叠处显示灰白。将鼠标悬浮在卡片上，会有动画效果。

[查看兼容性](https://caniuse.com/?search=color-mix)

1️⃣4⃣️**第14张卡片：**

测试浏览器是否支持color-contrast()属性。若支持，左侧的药丸图形则会显示两个高对比的颜色，若不支持，则会显示两个十分相近的颜色。将鼠标悬浮在药丸以及颜色上，会显示相应的属性。

1️⃣5⃣️**第15张卡片：**

通过Javascript来查看当前的设备参数。从上至下分别为：
- 设备当前设置下的逻辑分辨率
- 设备当前设置下的缩放倍率
- 设备的渲染分辨率
- 当前应用窗口逻辑分辨率
- 设备的屏幕比例
- 浏览器色深

其中，渲染分辨率=设备逻辑分辨率x缩放倍率。设备逻辑分辨率可能会根据你设备的显示大小而调整，所以渲染分辨率并不一定等于屏幕的物理分辨率，并且还有一定几率出现小数点，说实话这真是让人无语呢。

1️⃣6⃣️**第16张卡片：**

字面意思。把鼠标放在卡片上，圆圈与副标题会渐渐浮现。我很喜欢这种渐渐由模糊变清晰的效果。

🧩**兼容性问题**

目前发现网站对于 Firefox 浏览器兼容性不太好，很多特性都不支持，例如 z-index 与背景高斯模糊。
整体显示效果最好的浏览器是Safari，其次是Chrome。如果你的设备不能正确显示某些效果，不一定代表浏览器不支持，也可能是我没优化到位。😃有问题请通过邮箱联系我。

# 资源/Handy recourses
- [Sans Forgetica 字体](https://sansforgetica.rmit.edu.au/)
- [What is my resolution?](https://whatismyresolution.com/)
- [Resolution Inspector](http://dev.jeffersonscher.com/resolution.html)
- [Clip Path 制作工具](https://bennettfeely.com/clippy/)
- [SF 符号](https://developer.apple.com/sf-symbols/)（曾在旧版本使用过。）
- [MDN](https://developer.mozilla.org/zh-CN/)
- [W3C Schools](https://www.w3schools.com/)
- [TinyPNG](https://tinypng.com/)
- [Can I Use ?](https://caniuse.com/)

网站使用 Sketch 设计，Sublime 编码，其中HTML与CSS代码都由我完成，Javascript中那一段判断屏幕比例的功能是复制别人的代码。

[👉🏻访问网站](https://alpha.caipod.site)
