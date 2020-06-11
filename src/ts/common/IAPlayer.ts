import IAVideo from '~/ts/common/IAVideo';

export default class IAPlayer {
    constructor() {
        this.LoadIAPlayers();
    }

    /**
     * 为所有互动视频容器加载播放器
     */
    private LoadIAPlayers() {
        const containers = document.getElementsByTagName('interactive-player');
        for (let i = 0; i < containers.length; i++) {
            const player = new IAVideo();
            const toolbar = this.getToolbar();
            containers[i].appendChild(player);
            containers[i].appendChild(toolbar);
        }
    }

    private getToolbar(): Element {
        const toolbar = document.createElement('player-toolbar');
        return toolbar;
    }
}
