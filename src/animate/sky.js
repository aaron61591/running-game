(function () {

    /**
     * plug bg
     */
    window.RunningGame._animateSky = function (p) {

        p.plug(function (ctx) {

            var w = window.innerWidth,
                h = window.innerHeight;

            _bg(ctx, w, h);

            _sun(ctx, w, h);
        });
    };

    /**
     * render background
     */
    function _bg(ctx, w, h) {

        ctx.fillStyle = '#c4f2ff';
        ctx.fillRect(0, 0, w, h);
    }

    /** 
     * render sun setting
     */
    var sunSetting = [
        'rgba(255,253,52,0.32)',
        0.34 * 0.5,
        'rgba(255,255,255,1)',
        0.3 * 0.5,
        'rgba(255,252,178,1)',
        0.28 * 0.5,
        'rgba(255,253,52,1)',
        0.26 * 0.5
    ];

    /**
     * render sun
     */
    function _sun(ctx, w, h) {

        var i = 0;

        while (i < sunSetting.length) {
            ctx.fillStyle = sunSetting[i];
            ctx.beginPath();
            ctx.arc(w * 0.51, h * 0.4, w * sunSetting[++i], 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
            ++i;
        }
    }
})();