import { getIAToolbar } from './component/IAToolbar';
import { getVideo } from './component/IAVideo';
import { loadAPIForPlayer } from './module/apis';
import { getPlayers, getPlayer } from './module/dom';

export default class IAP {
    constructor() {
        this.loadIAPlayers();
    }

    /**
     * 获取指定播放器实例
     */
    public getPlayer(id: string): Element {
        return getPlayer(id);
    }

    /**
     * 初始化所有播放器实例
     */
    private loadIAPlayers() {
        const containers = getPlayers('interactive-player');
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
        const video = getVideo();
        const toolbar = getIAToolbar();
        player.appendChild(video);
        player.appendChild(toolbar);
    }

    /**
     * 为单个播放器实例挂载API
     * @param player
     */
    private loadAPIForPlayer(player: Element) {
        loadAPIForPlayer(player);
    }
}
