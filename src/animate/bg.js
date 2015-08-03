(function () {

    var RG = window.RunningGame;

    /**
     * plug background
     */
    RG._animateBg = function () {

        RG.$p.plugCard({
            zIndex: 1000,
            x: 0,
            y: window.innerHeight * 0.24,
            src: RG.$imgPath + 'bg.png',
            frame: 14,
            debug: true,
            pulse: function () {

                this.y = window.innerHeight * 0.24;
                this.scaleX = window.innerWidth / (this.img.width / this.frame);
                this.scaleY = window.innerHeight / this.img.height * 0.76;
            }
        });
    };
})();