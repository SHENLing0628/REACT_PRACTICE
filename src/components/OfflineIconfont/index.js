/*
 * @Author: ShenLing
 * @Date: 2020-11-16 15:06:53
 * @LastEditors: ShenLing
 * @LastEditTime: 2020-11-16 16:14:13
 */

import React from 'react'
import { Icon } from '@alifd/next'

export default class OfflineIconfont extends React.Component {
    onClickIcon = () => {
        console.log('icon')
    }
    render () {
        const { type, size, style, className, onClick } = this.props
        const CustomIcon = Icon.createFromIconfontCN({
            scriptUrl: 'iconfont.js'
        })
        return (
            <CustomIcon
                onClick={onClick}
                className={className}
                type={type}
                size={size}
                style={style}
            />
        )
    }
}
