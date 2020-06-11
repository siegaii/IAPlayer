/**
 * 获取视频工具栏DOM
 */
export const getIAToolbar = (): Element => {
    const toolbar = document.createElement('player-toolbar');
    const toolBox = document.createElement('div');

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
    playBtn.addEventListener(
        'click',
        () => {
            console.log('播放视频');
        },
        false
    );
    return playBtn;
};

export default { getIAToolbar };
