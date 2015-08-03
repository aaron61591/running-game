(function () {

    var RG = window.RunningGame;

    /**
     * plug background
     */
    RG._animateBg = function () {

        RG.$p.plugCard({
            zIndex: 1000,
            x: 0,
            y: h() * 0.24,
            src: RG.$imgPath + 'bg.png',
            frame: 14,
            debug: true,
            pulse: function () {

                this.y = h() * 0.24;
                this.scaleX = window.innerWidth / (this.img.width / this.frame);
                this.scaleY = h() / this.img.height * 0.76;
            }
        });
    };

    /**
     * abbreviations
     */
    function h() {

        return window.innerHeight;
    }
})();