import { throwError } from '~/ts/module/message';
import { getIAToolbar } from './component/IAToolbar';

export default class IAP {
    constructor() {
        this.loadIAPlayers();
    }

    /**
     * 返回播放器的video
     */
    public getPlayer(id: string): Element {
        const container = document.getElementById(id);
        return container
            ? container
            : throwError("Can't find this player element");
    }

    /**
     * 初始化所有播放器实例
     */
    private loadIAPlayers() {
        const containers = document.getElementsByTagName('interactive-player');
        for (let i = 0; i < containers.length; i++) {
            // 加载子组件
            this.loadComponentForPlayer(containers[i]);
            // 为播放器实例子挂载API
            this.loadAPIForPlayer(containers[i]);
        }
    }

    /**
     * 为单个播放器实例齐加载播放器容齐子组件
     * @param player
     */
    private loadComponentForPlayer(player: Element) {
        const video = this.getVideo();
        const toolbar = getIAToolbar();
        player.appendChild(video);
        player.appendChild(toolbar);
    }

    /**
     * 为单个播放器实例挂载API
     * @param player
     */
    private loadAPIForPlayer(player: Element) {}

    private getVideo(): HTMLVideoElement {
        const video = document.createElement('video');
        return video;
    }
}
