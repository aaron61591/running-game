(function () {

    var RG = window.RunningGame;

    /**
     * start person
     */
    window.RunningGame._animatePersonEnd = function () {

        RG.$p.plugCard({
            src: RG.$opt.img.end,
            frame: 1,
            scale: 0.5,
            pulse: function () {

                this.x = window.innerWidth / 2 - (this.img.width * this.scale / this.frame) / 2 + 10;
                this.y = window.innerHeight * 0.85 - this.img.height * this.scale * 0.95;
            }
        });
    };

})();