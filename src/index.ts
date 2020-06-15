import './scss/player.scss';
import IAP from './ts/IAP';

export default IAP;

// 初始化所有播放器
IAP.render();
const testPlayer = IAP.selectPlayer('testPlayer');
