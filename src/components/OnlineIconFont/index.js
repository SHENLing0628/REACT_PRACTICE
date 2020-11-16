/*
 * @Author: ShenLing
 * @Date: 2020-11-16 15:06:53
 * @LastEditors: ShenLing
 * @LastEditTime: 2020-11-16 15:14:20
 */

import React from 'react'
import { Icon } from '@alifd/next'

export default class OnlinelineIconfong extends React.Component {
    onClickIcon = () => {
        console.log('icon')
    }
    render () {
        const { type, size, style, className, onClick } = this.props
        const CustomIcon = Icon.createFromIconfontCN({
            scriptUrl: '//at.alicdn.com/t/font_1613454_ulukjntbv6q.js', // 可替换为自定义的iconfont工程文件
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
