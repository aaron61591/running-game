(function () {

    /**
     * start person
     */
    window.RunningGame._animatePersonStart = function (p) {

        p.plugCard({
            src: 'dev/images/static.png',
            frame: 2,
            scale: 0.5,
            pulse: function () {

                this.x = window.innerWidth / 2 - (this.img.width * this.scale / this.frame) / 2 + 10;
                this.y = window.innerHeight - this.img.height * this.scale - 50;
            }
        });
    };

})();