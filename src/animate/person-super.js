(function () {

    var RG = window.RunningGame;

    /**
     * plug person
     */
    RG._animatePersonSuper = function () {

        RG.$p.plugCard({
            hash: 'person-super',
            src: RG.$opt.img.person,
            frame: [0, 1, 2, 7, 5, 2, 1],
            pulse: function (ctx, frame) {

                this.x = window.innerWidth / 2 - (this.img.width / 8) / 2;
                this.y = window.innerHeight * 0.85 - this.img.height;

                if (frame % (this.frame.length * 2) === 0) {
                    RG.$observer.emit('round');
                }
            }
        });
    };
})();