/*
    播放器所有api放在此模块
*/

/**
 * 挂载设置播放源地址方法
 * @param player
 */
const loadSetVideoSrc = (player: Element) => {
  console.dir(player);
};

/**
 * 为播放器挂载所有api
 * @param player
 */
export const loadAPIForPlayer = (player: Element) => {
  loadSetVideoSrc(player);
};

export default { loadAPIForPlayer };
