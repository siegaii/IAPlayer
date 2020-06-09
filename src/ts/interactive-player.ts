class InteractivePlayer {
    public playerDom: Element;
    public h5Player: HTMLVideoElement;
    constructor() {
        this.generatePlayer();
    }

    /**
     * 设置播放器style
     * @param player h5播放器dom
     */
    public setPlayerStyle(player: HTMLVideoElement) {
        player.setAttribute('style', `width:100%;height:100%;`);
    }

    private generatePlayer(): void {
        // 获取player容器
        this.playerDom = document.getElementsByTagName('interactive-player')[0];
        // 创建h5player节点
        this.h5Player = document.createElement('video');
        // 设置默认样式初始化样式
        this.setPlayerStyle(this.h5Player);

        // 蒙层测试
        this.addBtnLay();

        // 设置播放源
        this.h5Player.setAttribute('controls', '');
        this.h5Player.setAttribute('webkit-playsinline', '');
        this.h5Player.setAttribute('playsinline', '');
        this.h5Player.setAttribute('x5-video-player-type', '');
        this.h5Player.setAttribute('x5-video-player-fullscreen', '');
        this.h5Player.setAttribute('src', './video/test2.mp4');

        // 将播放器插入interactive-player节点
        this.playerDom.appendChild(this.h5Player);
    }

    private addBtnLay() {
        this.h5Player.addEventListener(
            'timeupdate',
            () => {
                const time = Math.floor(this.h5Player.currentTime);
                if (time === 2) {
                    const btn1 = document.createElement('button');
                    btn1.textContent = 'test1';
                    btn1.className = 'test1';

                    const btn2 = document.createElement('button');
                    btn2.textContent = '全屏';
                    btn2.className = 'test2';
                    btn2.addEventListener(
                        'click',
                        () => {
                            console.log('全屏');

                            if (this.playerDom.requestFullscreen) {
                                return this.playerDom.requestFullscreen();
                            } else if (this.playerDom.webkitRequestFullScreen) {
                                return this.playerDom.webkitRequestFullScreen();
                            } else if (this.playerDom.mozRequestFullScreen) {
                                return this.playerDom.mozRequestFullScreen();
                            } else {
                                return this.playerDom.msRequestFullscreen();
                            }
                        },
                        false
                    );
                    this.playerDom.appendChild(btn1);
                    this.playerDom.appendChild(btn2);
                }
            },
            false
        );
    }
}
