(function () {

    var RG = window.RunningGame,
        EXCUR_X = [2, 0, 3, 6, 11, 13, 15, 19, 17, 15, 10, 8, 3, 0],
        EXCUR_Y = [4, 0, -2, -4, -3, -5, 0, 1, -2, -3, -6, -7, -2, 0];

    /**
     * plug ground
     */
    RG._animateGround = function () {

        RG.$p.plug(function (ctx, frame) {

            var excurX = EXCUR_X[frame % EXCUR_X.length],
                excurY = EXCUR_Y[frame % EXCUR_Y.length];

            _ground(ctx, excurY);
            _lawn(ctx, excurX, excurY);
        });
    };

    /**
     * render ground
     */
    function _ground(ctx, excurY) {

        var w = window.innerWidth,
            h = window.innerHeight,
            x = 0,
            y = h * 0.4 + excurY;

        ctx.fillStyle = '#90c983';
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.quadraticCurveTo(w * 0.5, y - h * 0.1, w, y);
        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.closePath();
        ctx.fill();
    }

    /**
     * render lawn
     */
    function _lawn(ctx, excurX, excurY) {


        var w = window.innerWidth,
            h = window.innerHeight,
            x = 0,
            y = h * 0.4 + excurY,
            x1 = x + w * 0.43 + excurX,
            y1 = y - h * 0.052;

        ctx.fillStyle = '#474540';
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(w * 0.5, y1 - 5, x1 + w * 0.13, y1);
        ctx.quadraticCurveTo(x1 + w * 0.3, y1 + h * 0.1, w, y1 + h * 0.4);
        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.lineTo(0, y1 + h * 0.4);
        ctx.quadraticCurveTo(x1 - w * 0.17, y1 + h * 0.1, x1, y1);
        ctx.closePath();
        ctx.fill();
    }
})();