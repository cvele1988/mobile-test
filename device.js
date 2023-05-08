(function () {
    var canvas, gl, glRenderer, models,
        devices = [
            ['a7', '640x1136', ['iPhone 5', 'iPhone 5s']],
            ['a7', '1536x2048', ['iPad Air', 'iPad Mini 2', 'iPad Mini 3']],
            ['a8', '750x1334', ['iPhone 6', 'iPhone 6s']],
['a8', '1080x1920', ['iPhone 6 Plus', 'iPhone 6s Plus']],
['a8', '2048x1536', ['iPad Mini 4', 'iPad Air 2']],
['a8x', '2048x1536', ['iPad Air 2']],
['a9', '750x1334', ['iPhone SE (1st generation)']],
['a9', '1536x2048', ['iPad (5th generation)']],
['a9x', '2048x2732', ['iPad Pro (1st generation, 12.9-inch)']],
['a9x', '1668x2224', ['iPad Pro (1st generation, 9.7-inch)']],
['a10', '750x1334', ['iPhone 7']],
['a10', '1080x1920', ['iPhone 7 Plus']],
['a10x', '1668x2224', ['iPad Pro (2nd generation, 10.5-inch)']],
['a10x', '2048x2732', ['iPad Pro (2nd generation, 12.9-inch)']],
['a11', '1125x2436', ['iPhone X', 'iPhone XS']],
['a11', '828x1792', ['iPhone XR']],
['a12', '1125x2436', ['iPhone XS']],
['a12', '828x1792', ['iPhone XR']],
['a12', '1668x2388', ['iPad Pro (3rd generation, 11-inch)']],
['a12', '2048x2732', ['iPad Pro (3rd generation, 12.9-inch)']],
['a12', '2160x1620', ['iPad (7th generation)', 'iPad (8th generation)']],
['a12', '1536x2048', ['iPad Mini (5th generation)', 'iPad Air (3rd generation)']],
['a13', '1125x2436', ['iPhone 11 Pro']],
['a13', '828x1792', ['iPhone 11']],
['a13', '1242x2688', ['iPhone 11 Pro Max']],
['a14', '1170x2532', ['iPhone 12', 'iPhone 12 Pro']],
['a14', '1125x2436', ['iPhone 12 mini']],
['a14', '1284x2778', ['iPhone 12 Pro Max']],
['a14', '1640x2360', ['iPad Air (4th generation)']],
['a14', '2160x1620', ['iPad (9th generation)']],
['a15', '1170x2532', ['iPhone 13', 'iPhone 13 Pro']],
['a15', '1125x2436', ['iPhone 13 mini']],
['a15', '1284x2778', ['iPhone 13 Pro Max']],
['a15', '1668x2388', ['iPad Pro (4th generation, 11-inch)']],
            ['a15', '2048x2732', ['iPad Pro (4th generation, 12.9-inch)']],
             ['a16', '2796×1290', ['iPad14 pro max']]
            
        ];

    function getCanvas() {
        if (canvas == null) {
            canvas = document.createElement('canvas');
        }

        return canvas;
    }

    function getGl() {
        if (gl == null) {
            gl = getCanvas().getContext('experimental-webgl');
        }

        return gl;
    }

    function getResolution() {
        var ratio = window.devicePixelRatio || 1;
        return (Math.min(screen.width, screen.height) * ratio)
            + 'x' + (Math.max(screen.width, screen.height) * ratio);
    }

    function getGlRenderer() {
        if (glRenderer == null) {
            debugInfo = getGl().getExtension('WEBGL_debug_renderer_info');
            glRenderer = debugInfo == null ? 'unknown' : getGl().getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        }

        return glRenderer;
    }

    function getModels() {
        if (models == null) {
            var gpu = getGlRenderer(),
                matches = gpu.match(/^apple\s+([_a-z0-9-]+)\s+gpu$/i),
                res = getResolution();
            
            models = ['unknown'];

            if (matches) {
                for (var i = 0; i < devices.length; i ++) {
                    var device = devices[i];

                    if (matches[1].toLowerCase() == device[0]
                        && res == device[1]) {
                        models = device[2];
                        break;
                    }
                }
            }
        }

        return models;
    }

    if (window.MobileDevice == undefined) {
        window.MobileDevice = {};
    }

    window.MobileDevice.getGlRenderer = getGlRenderer;
    window.MobileDevice.getModels = getModels;
    window.MobileDevice.getResolution = getResolution;

    window.MobileDevice.is = function (match) {
        var currentModels = getModels();
        match = match.toLowerCase().replace(/\s+$/, '') + ' ';

        for (var i = 0; i < currentModels.length; i ++) {
            var model = currentModels[i].toLowerCase() + ' ';

            if (0 === model.indexOf(math)) {
                return true;
            }
        }

        return false;
    };
})();
