import { createElement } from '~/ts/module/dom';

/*
    播放器工具栏组件模块
 */

/**
 * 获取视频工具栏DOM
 */
export const getIAToolbar = (): Element => {
    const toolbar = createElement('player-toolbar');
    const toolBox = createElement('div');

    // 初始化工具栏
    initTools(toolBox);
    toolbar.appendChild(toolBox);
    return toolbar;
};

/**
 * 初始化工具栏生成各种功能按钮
 * @param toolBox
 */
const initTools = (toolBox: HTMLDivElement) => {
    toolBox.className = 'toolBox';
    const playBtn = initPlayBtn();
    toolBox.appendChild(playBtn);
};

const initPlayBtn = (): HTMLButtonElement => {
    const playBtn = document.createElement('button');
    playBtn.className = 'iaplayer-play-btn';
    playBtn.textContent = '播放视频';
    return playBtn;
};

export default { getIAToolbar };
