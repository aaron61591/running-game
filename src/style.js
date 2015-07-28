(function () {

    /**
     * running game style
     */
    var style = window.RunningGame._style = {};

    /**
     * game start mask style
     */
    style.ready = function (e) {

        _set.call(e, {
            position: 'fixed',
            left: 0,
            top: '10%',
            zIndex: 1002,
            width: '100%',
            height: '30px',
            paddingTop: '50px',
            fontWeight: 'bold',
            fontSize: '24px',
            lineHeight: '30px',
            color: '#ff522e',
            textAlign: 'center',
            textShadow: '#fff 1px 1px, #fff 1px -1px, #fff -1px 1px, #fff -1px -1px',
            background: 'url(dev/images/start.png) 50% -200px / 225px 245px no-repeat'
        });
    };

    var BG_ON = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAMAAAANf8AYAAAAQlBMVEUAAADzcFPzcFPzcFPzcFPz cFPzcFPzcFPzcFPzcFPzcFPzcFPzcFPzcFPzcFPzcFPzcFPzcFPzcFPzcFPzcFPzcFNrL5snAAAA FXRSTlMA6vdZ0Qh/oSTxscQ/EGV3LW5N3YxqCiRpAAABpUlEQVRIx6WW6XaEIAyFwy6LuA3v/6rt aTsnJEGdHu9P5YN4zQJIueKDVbFFZYMvDm7lTNKtl07mGpu9alLKz+dIRYJR9YSYcjtXnkaIie1K 0UjEtzt5jrzavV4UWdonWsi3tM9kOsf0h4xG9/KpWTks1SwHWv5GahvoSH5/7zrjv674hC4PS6HZ EjAj5pFnL4wZGeado8dsAqCMcsJnBUOG+Z0Ik2+ZBOD0PxntoDQi21dgWUK2G4+l8HyO756wheNv X854CI0KvlVzH/DEmACWMTPmBTKZhq+aWOGvGQWaMyIxVsZEaE2s2K6ZBloyVTyx9BzFmCKqdmKM Er6tgpkZYyFcMsdrK8CYBF76Zmgf5Iyn+aZtcgD7G1lhxJQ+r1X9BgCZCiNGO8wl3HbHl3/StH7A iKourCxo/KbvBzNbEoclp1w3EQ7RiQ3GivJ9f1Ni27j/lN+i+2Nm0kcn2b1tCImOskr7df71aVVX I5LPBVvXaQ/6ci48mD/o3Z38g3n6+UnLo/sBarIXiJ1grC2eHbI9u1c9v7/hPTFZpZtWNg3viV8f 54RbJvFxVgAAAABJRU5ErkJggg==") 10px 10px no-repeat',
        BG_OFF = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAMAAAANf8AYAAAANlBMVEUAAAC0tLS0tLS0tLS0tLS0 tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQDxsMhAAAAEXRSTlMA7Vet99F/ ZwgxI8SVEHZE3tflbG4AAAGNSURBVEjHnZZbEqQwCEUh73fM/jc7VTPdhYCaHu+fmhPiFQHQSjNY j7gQvQ0zwVbJWLfOctY8Yz3g0sLQ75FIhKDiDVHqulctV4jB9SQ0GglrpyCRtvZqHBnrFw32Lus3 GUKK+5Fx5N6tyVjbiGYcZPkXietChw3mu2unzxDpjlg+Js8WS5H7lWetgFIT3iUKQ8HvGUzKZ4R7 hvy2jKlbxgIkt2PEvi7BXEweSH2OVn2UZ5mUz+x9Uo72+OwrmfC5JP39yPV84CIYC14wnfKCmMqP j0utCM8MgpOMSoysmCWUt8wCp5mo7ngeB7dMUYzXjFFOeu6bfWSOFjMIxkLQvhleciUTeL45b4EY zHDFzHNeY0ysckW4YlyiXKJtJz38yPH/B4yqkln+FlnURaoHXSzBy98U06kjHKoSG7qW3aGjYBpr OWm4c5jO6mj5Ho3W+NasKGW8Xtf0DzmeWqTsCz7mbKzb9IXX/Ye82ym87Kf/F2m8mg+0in9AfHk9 77yfq97Pb3pOdMvdzYl/AKIGa0+j5R7SAAAAAElFTkSuQmCC") 10px 10px no-repeat;';

    /**
     * music button
     */
    style.music = function (e) {

        _set.call(e, {
            position: 'fixed',
            right: '10px',
            top: '10px',
            width: '50px',
            height: '50px',
            zIndex: 1002,
            background: BG_ON,
            backgroundSize: '30px'
        });
    };

    /**
     * music button on
     */
    style.musicOn = function (e) {

        _set.call(e, {
            background: BG_ON
        });
    };

    /**
     * music button off
     */
    style.musicOff = function (e) {

        _set.call(e, {
            background: BG_OFF
        });
    };

    /**
     * set style according opt
     */
    function _set(opt) {

        for (var p in opt) {
            if (opt.hasOwnProperty(p)) {
                this.style[p] = opt[p];
            }
        }
    }
})();