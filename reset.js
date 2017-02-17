;(function () {
    var maps = document.querySelectorAll('map');
    for (var i=0, l=maps.length; i<l; i++) {
        var map = maps[i];
        var name = map.getAttribute('name');
        if (!name) continue;
        var img = document.querySelector('[usemap="#' + name + '"]');
        if (!img) continue;

        resetMap(map, img);
    }

    function resetMap(map, img) {
        var oldWidth = img.getAttribute('origin-width') || img.getAttribute('width');
        var newWidth = img.clientWidth || document.body.clientWidth;
        var scale = Number(newWidth) / Number(oldWidth);

        var areas = map.querySelectorAll('area');
        for (var i=0; i<areas.length; i++) {
            var oldCoords = areas[i].coords;
            var newCoords = scaleCoordinate(oldCoords, scale);
            areas[i].setAttribute('coords', newCoords);
        }
    }

    function scaleCoordinate(coordinate, scale) {
        var coords = coordinate.split(',');

        //获取每个坐标点
        for (var i=0; i<coords.length; i++) {
            coords[i] = Math.round(parseInt(coords[i]) * scale).toString();
        }

        return coords.join(',');
    }
}());