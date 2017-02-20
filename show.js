;(function () {
    window.showAreas = function () {
        var maps = document.querySelectorAll('map');
        for (var i=0, l=maps.length; i<l; i++) {
            var map = maps[i];
            var name = map.getAttribute('name');
            if (!name) continue;
            var img = document.querySelector('[usemap="#' + name + '"]');
            if (!img) continue;

            readMap(map, img);
        }
    };

    function readMap(map, img) {
        var parent = img.parentNode;
        parent.style.position = 'relative';

        var start = {
            top: img.offsetTop,
            left: img.offsetLeft
        };

        var areas = map.querySelectorAll('area');
        for (var i=0; i<areas.length; i++) {
            var coordinate = areas[i].coords;

            drawDIV(parent, start, coordinate);
        }
    }

    // TODO: shape
    function drawDIV(parent, start, coordinate, shape) {
        var coords = coordinate.split(',');

        // 计算位置
        var x1 = Number(coords[0]);
        var y1 = Number(coords[1]);
        var x2 = Number(coords[2]);
        var y2 = Number(coords[3]);
        var x = x1 + start.left;
        var y = y1 + start.top;
        var height = Math.abs(y2 - y1);
        var width = Math.abs(x2 - x1);
        var borderWidth = 2;

        // 绘制矩形
        var div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.height = height - 2 * borderWidth + 'px';
        div.style.width = width - 2 * borderWidth + 'px';
        div.style.border = borderWidth + 'px dashed #ff0000';
        div.style.pointerEvents = 'none';

        parent.appendChild(div);
    }

    window.showAreas();
}());