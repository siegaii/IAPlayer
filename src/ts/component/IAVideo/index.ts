/*
    播放器video组件模块
 */

/**
 * 渲染一个video元素
 */
export const renderVideo = (player: Element) => {
    const video = document.createElement('video');
    player.appendChild(video);
};
