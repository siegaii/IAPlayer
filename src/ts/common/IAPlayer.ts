import { getIAToolbar } from '~/ts/common/IAToolbar';

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
            const player = this.getVideo();
            const toolbar = getIAToolbar();
            containers[i].appendChild(player);
            containers[i].appendChild(toolbar);
        }
    }

    private getVideo(): HTMLVideoElement {
        const video = document.createElement('video');
        return video;
    }
}
