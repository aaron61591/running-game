(function () {

    var RG = window.RunningGame;

    /**
     * loading scene
     */
    RG._loading = function () {

        RG.$loading = new UPlayer({
            // debug: true,
            fps: 30
        });

        RG._insert(RG.$loading.canvas);


        var w = window.innerWidth,
            h = window.innerHeight;

        RG.$loading.plugCard({
            zIndex: 0,
            src: RG.$img.loading,
            frame: 11,
            pulse: function (ctx) {

                ctx.fillStyle = '#fff';
                ctx.fillRect(0, 0, w, h);

                this.x = w / 2 - this.img.width / this.frame / 2;
                this.y = h / 2 - this.img.height;
            }
        });

        var num = 0;

        RG.$loading.plug({
            zIndex: 1,
            render: function (ctx, frame) {

                var suffix = '',
                    i = 0;

                if (frame % 5 === 0) {
                    ++num;
                }

                while (i < num % 4) {

                    suffix += '.';
                    ++i;
                }

                ctx.font = 'normal bold 10px Helvetica';
                ctx.fillStyle = '#f47021';
                ctx.fillText('Loading' + suffix, w / 2 - 20, h / 2 + 10);
            }
        });

        RG.$loading.run();

        // TODO load resource
        setTimeout(function () {

            RG.$observer.emit('loaded');

            setTimeout(function () {

                RG.$loading.stop();
                RG._remove(RG.$loading.canvas);
            }, 1000);
        }, 1000);
    };
})();