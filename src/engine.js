(function () {

    /**
     * running game
     */
    var RG = window.RunningGame = {},
        p;

    /**
     * start running game
     */
    RG.start = function () {

        p = new UPlayer({
            debug: true,
            fps: 15
        });

        _plug(p);

        p.run(1);

        RG._showStart();
        // p.run();
    };

    /**
     * setup plugins
     */
    function _plug(p) {

        RG._animateSky(p);
        RG._animateCloud(p);
        RG._animateGround(p);
        RG._animateBg(p);
        RG._animatePersonStart(p);
    }
})();