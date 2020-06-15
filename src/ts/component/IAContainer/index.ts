import { getPlayers } from '~/ts/module/dom';
import { renderVideo } from '~/ts/component/IAVideo';
import { renderToolbar } from '~/ts/component/IAToolbar';

/**
 * 渲染页面中所有的互动播放器
 */
export const renderPlayers = () => {
    getPlayers().map((player) => {
        renderVideo(player);
        renderToolbar(player);
    });
};

export default class IAContainer {
    constructor() {}
    static renderPlayers() {}
}
