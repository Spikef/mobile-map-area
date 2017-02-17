# mobile-map-area

因为图片锚点中area的坐标都是相对于图片位置的绝对值，所以对于移动端而言，如果图片适配不同屏幕而导致图片实际显示大小与原大小不一致时，热点区域位置会不正确，所以该模块将重新计算正确的区域位置。

## reset.js

重置area的坐标值，以适配当前屏幕大小。

```html
<div>
    <img src="https://img.alicdn.com/imgextra/i2/2395304363/TB2C2ZidYBkpuFjy1zkXXbSpFXa_!!2395304363.jpg" alt="" name="rghtjhtyjgjk" width="640" height="2500" border="0" usemap="#map">
    <map name="map">
        <area shape="rect" coords="326,2042,631,2493" href="http://store.thenorthface.com.cn/store/detail/2973" target="_blank">
        <area shape="rect" coords="326,1575,631,2026" href="http://store.thenorthface.com.cn/store/detail/2967" target="_blank">
        <area shape="rect" coords="11,1581,316,2032" href="http://store.thenorthface.com.cn/store/detail/2965" target="_blank">
        <area shape="rect" coords="324,1117,629,1568" href="http://store.thenorthface.com.cn/store/detail/2974" target="_blank">
        <area shape="rect" coords="9,1123,314,1574" href="http://store.thenorthface.com.cn/store/detail/2966" target="_blank">
        <area shape="rect" coords="330,653,635,1104" href="http://store.thenorthface.com.cn/store/detail/2956" target="_blank">
        <area shape="rect" coords="15,659,320,1110" href="http://store.thenorthface.com.cn/store/detail/2971" target="_blank">
        <area shape="rect" coords="8,179,313,650" href="http://store.thenorthface.com.cn/store/detail/2946" target="_blank">
    </map>
</div>
```

需要在图片上标注出原始图片的宽和高，可以用width、height或origin-width、origin-height属性来标注。(注：目前并不支持改变宽高比的情况)

## show.js

给矩形area添加一个红色边框，用于方便地查看area的区域是否正确。