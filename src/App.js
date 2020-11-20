/*
 * @Author: ShenLing
 * @Date: 2020-11-16 15:03:40
 * @LastEditors: ShenLing
 * @LastEditTime: 2020-11-20 16:15:35
 */
import './App.scss';
import React from 'react'
import { Button, Input } from '@alifd/next'

import OnlineIconFont from './components/OnlineIconFont'
import OfflineIconfont from './components/OfflineIconfont'
import CronGenerator from './components/CronGenerator'

export default class App extends React.Component {
  state = {
    cronGeneratorVisible: false,
    cronString: '* * * ? * * *'
  }

  onClose = () => {
    this.setState({ cronGeneratorVisible: false })
  }
  
  onConfirm = (val) => {
    this.setState({ cronString: val})
  }

  render() {
    const { cronGeneratorVisible, cronString } = this.state

    return (
      <div className="App">

        {/* cron生成器 */}
        <div className="cronGeneratorApp">
          <p>CRON Generator Sample:</p>
          <div className="cron_input">
            <Input value={cronString} />
            <Button type="primary" onClick={() => { this.setState({ cronGeneratorVisible: true }) }}>CRON</Button>
          </div>
          <CronGenerator
            // isPreview
            initCron={cronString}
            dialogVisible={cronGeneratorVisible}
            onClose={this.onClose}
            onConfirm={this.onConfirm}
          />
        </div>

        {/* iconfont在线/离线引用 */}
        {/* <div className="icon_sample">
          <p>ONLINE ICON:</p>
          <OnlineIconFont type="iconcode" size="xxl" />
          
          <p>OFFLINE ICON:</p>
          <OfflineIconfont type="iconstation_icon_offline" size="xxl" />
        </div> */}
        
      </div>
    )
  }
}
