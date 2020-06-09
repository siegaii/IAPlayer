var InteractivePlayer = (function () {
    function InteractivePlayer() {
        this.generatePlayer();
    }
    InteractivePlayer.prototype.setPlayerStyle = function (player) {
        player.setAttribute('style', 'width:100%;height:100%;');
    };
    InteractivePlayer.prototype.generatePlayer = function () {
        this.playerDom = document.getElementsByTagName('interactive-player')[0];
        this.h5Player = document.createElement('video');
        this.setPlayerStyle(this.h5Player);
        this.addBtnLay();
        this.h5Player.setAttribute('controls', '');
        this.h5Player.setAttribute('webkit-playsinline', '');
        this.h5Player.setAttribute('playsinline', '');
        this.h5Player.setAttribute('x5-video-player-type', '');
        this.h5Player.setAttribute('x5-video-player-fullscreen', '');
        this.h5Player.setAttribute('src', './test1.mp4');
        this.playerDom.appendChild(this.h5Player);
    };
    InteractivePlayer.prototype.addBtnLay = function () {
        var _this = this;
        this.h5Player.addEventListener(
            'timeupdate',
            function () {
                var time = Math.floor(_this.h5Player.currentTime);
                if (time === 2) {
                    var btn1 = document.createElement('button');
                    btn1.textContent = 'test1';
                    btn1.className = 'test1';
                    var btn2 = document.createElement('button');
                    btn2.textContent = '全屏';
                    btn2.className = 'test2';
                    btn2.addEventListener(
                        'click',
                        function () {
                            console.log('全屏');
                            _this.playerDom.webkitEnterFullscreen();
                        },
                        false
                    );
                    _this.playerDom.appendChild(btn1);
                    _this.playerDom.appendChild(btn2);
                }
            },
            false
        );
    };
    return InteractivePlayer;
})();
