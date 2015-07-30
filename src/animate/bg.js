(function () {

    var RG = window.RunningGame;

    /**
     * plug background
     */
    RG._animateBg = function () {

        RG.$p.plugCard({
            x: 0,
            y: window.innerHeight * 0.27,
            src: RG.$imgPath + 'bg.png',
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