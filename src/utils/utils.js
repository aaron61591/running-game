(function () {

    /**
     * running game
     */
    var RG = window.RunningGame;

    /**
     * create div
     */
    RG._div = function () {

        return document.createElement('div');
    };

    /**
     * create span
     */
    RG._span = function () {

        return document.createElement('span');
    };

    /**
     * insert
     */
    RG._insert = function (e, f) {

        if (f) {
            f.appendChild(e);
        } else {
            RG.$root.appendChild(e);
        }
    };

    /**
     * remove
     */
    RG._remove = function (e) {

        RG.$root.removeChild(e);
    };
})();