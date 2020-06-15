import { throwError } from './message';

/*
    将用到的所有Dom api 都放在dom模块中，
    为了在后面更方便的处理可能出现的Dom兼容性问题
 */

/**
 * 根据tag名获取所有播放器实例
 * @param tag
 */
export const getPlayers = (): Element[] =>
    Array.from(document.getElementsByTagName('interactive-player'));

/**
 * 根据id获取单个播放器实例
 * @param id
 */
export const getPlayer = (id: string): Element => {
    const player = document.getElementById(id);
    return player ? player : throwError("Can't find this player element");
};

/**
 * 根据tag名创建元素
 * @param tag
 */
export const createElement = (tag: string): any => document.createElement(tag);

export default { getPlayers };
