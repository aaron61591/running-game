(function () {

    var RG = window.RunningGame;

    /**
     * plug person
     */
    RG._animatePerson = function () {

        RG.$p.plugCard({
            zIndex: 1000,
            hash: 'person',
            src: RG.$imgPath + 'person.png',
            frame: [0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1],
            pulse: function (ctx, frame) {

                this.x = window.innerWidth / 2 - (this.img.width / 8) / 2;
                this.y = window.innerHeight * 0.85 - this.img.height;

                if (frame % this.frame.length === 0) {
                    RG.$observer.emit('round');
                }
            }
        });
    };
})();