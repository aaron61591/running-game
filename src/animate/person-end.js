(function () {

    /**
     * start person
     */
    window.RunningGame._animatePersonEnd = function (p) {

        p.plugCard({
            src: 'dev/images/static.png',
            frame: [1, 1],
            scale: 0.5,
            pulse: function () {

                this.x = window.innerWidth / 2 - (this.img.width * this.scale / this.frame.length) / 2 + 10;
                this.y = window.innerHeight - this.img.height * this.scale - 50;
            }
        });
    };

})();