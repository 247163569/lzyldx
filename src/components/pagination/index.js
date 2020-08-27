import React from 'react';
import './index.css';

// 判断 是不是数字
const isNumber = (num) => {
    return typeof num === 'number';
}
class Pagination extends  React.Component {
    constructor (props) {
        super(props);
    }
    // 点击回调事件    
    handleClick (item) {
      // 父组件回调事件
      this.props.cb(item);
    }
    render () {
        let {cur, space, all} = this.props;
        let pgObj = [];
        // 给不同的元素 赋值class
        const checkClass = (role, active) => {
            const defaultClass = 'pg-span';
            if (active) {
                return `${defaultClass} active`
            }
            switch (role) {
                case 0: {
                    return `${defaultClass}`
                }
                case 1: {
                    return `${defaultClass}`
                }
                default: {}
            }
        }
        // 初始检查
        if (all < space) {
            all =  space
        }
        if (cur <= 0) {
            cur = 0
        }
        if (cur >= all) {
        cur = all
        } 
        // 阶段判断
        if (cur < space) {
            if (space === all) {
                for (let i = 1; i <= space; i++) {
                    pgObj.push({
                        page: i,
                        role: 0,
                        key: i
                    })
                }
            } else {
                for (let i = 1; i <= space; i ++) {
                    pgObj.push({
                        page: i,
                        role: 0,
                        key: i
                    })
                }
                pgObj.push({
                    page: '...',
                    role: 1,
                    key: 'next'
                })
                pgObj.push({
                    page: all,
                    role: 0,
                    key: all
                })
            }
        } else if (cur >= space && cur <= all - space + 1) {
            let odd = parseInt(space / 2);
            pgObj.push({
                page: 1,
                role: 0,
                key: 1
            });
            pgObj.push({
                page: '...',
                role: 1,
                key: 'pre'
            });
            for (let i = cur - odd; i <= cur + odd ; i ++) {
                pgObj.push({
                    page: i,
                    role: 1,
                    key: i
                })
            }
            pgObj.push({
                page: '...',
                role: 1,
                key: 'next'
            });
            pgObj.push({
                page: all,
                role: 1,
                key: all
            })
        } else {
            pgObj.push({
                page: 1,
                role: 0,
                key: 1
            });
            pgObj.push({
                page: '...',
                role: 1,
                key: 'pre'
            });
            for (let i = all - space + 1; i <= all; i ++) {
                pgObj.push({
                    page: i,
                    role: 0,
                    key: i
                })
            };
        }
        return (
            <section>
                {
                    pgObj.map(item =>
                        (<span key={item.key}
                               className={checkClass(item.role, item.page === cur)}
                               onClick={() => {this.handleClick(item)}}
                        >
                        {item.page}
                        </span>))
                }
            </section>
        )
    }
    
}