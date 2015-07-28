(function () {

    function Observer(ctx) {
        this._ctx = ctx || this;
    }

    var ObserverProto = Observer.prototype;

    ObserverProto.on = function (event, fn) {
        this._cbs = this._cbs || {};
        (this._cbs[event] = this._cbs[event] || [])
        .push(fn);
        return this;
    };

    ObserverProto.once = function (event, fn) {
        var self = this;
        this._cbs = this._cbs || {};

        function on() {
            /*jshint validthis:true */
            self.off(event, on);
            fn.apply(this, arguments);
        }

        on.fn = fn;
        this.on(event, on);
        return this;
    };

    /**
     *  The internal, faster emit with fixed amount of arguments
     *  using Function.call
     */
    ObserverProto.emit = function (event, a, b, c) {
        this._cbs = this._cbs || {};
        var callbacks = this._cbs[event];

        if (callbacks) {
            callbacks = callbacks.slice(0);
            for (var i = 0, len = callbacks.length; i < len; i++) {
                callbacks[i].call(this._ctx, a, b, c);
            }
        }

        return this;
    };

    window.RunningGame._observer = new Observer();
})();