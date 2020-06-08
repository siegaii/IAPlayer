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

        // 设置播放源
        this.h5Player.setAttribute('controls', '');
        this.h5Player.setAttribute('src', '../static/video/test2.mp4');

        // 将播放器插入interactive-player节点
        this.playerDom.appendChild(this.h5Player);
    }
}
