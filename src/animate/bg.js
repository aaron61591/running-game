(function () {

    /**
     * plug background
     */
    window.RunningGame._animateBg = function (p) {

        p.plugCard({
            x: 0,
            y: window.innerHeight * 0.27,
            src: 'dev/images/bg.png',
            frame: 14,
            debug: true,
            pulse: function () {

                this.scale = _getScale(this);
            }
        });
    };

    /**
     * get scale
     */
    function _getScale(opt) {

        return window.innerWidth / (opt.img.width / opt.frame);
    }
})();