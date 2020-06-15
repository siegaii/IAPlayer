import { getPlayer } from '~/ts/module/dom';
import { renderPlayers } from '~/ts/component/IAContainer';

export default class IAP {
    constructor() {}

    /**
     * 渲染所有互动播放器
     */
    static render() {
        renderPlayers();
    }

    /**
     * 通过id选择播放器
     * @param id
     */
    static selectPlayer(id: string): Element {
        return getPlayer(id);
    }
}
