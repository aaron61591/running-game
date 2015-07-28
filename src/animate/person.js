(function () {

    /**
     * plug person
     */
    window.RunningGame._animatePerson = function (p) {

        p.plugCard({
            src: 'dev/images/persons.png',
            frame: [0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1],
            debug: true,
            pulse: function () {

                this.x = window.innerWidth / 2 - (this.img.width / 8) / 2;
                this.y = window.innerHeight - this.img.height - 120;
            }
        });
    };
})();