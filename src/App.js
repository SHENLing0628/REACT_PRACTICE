/*
 * @Author: ShenLing
 * @Date: 2020-11-16 15:03:40
 * @LastEditors: ShenLing
 * @LastEditTime: 2020-11-16 16:15:57
 */
import './App.css';

import OnlineIconFont from './components/OnlineIconFont'
import OfflineIconfont from './components/OfflineIconfont'

function App() {
  return (
    <div className="App">
      <div>ONLINE ICON: </div>
      <OnlineIconFont type="iconcode" size="xs" />
      
      <div>OFFLINE ICON</div>
      <OfflineIconfont type="iconstation_icon_offline" size="xs" />
    </div>
  );
}

export default App;
