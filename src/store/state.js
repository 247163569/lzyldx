export const initState = {
    slideState: true,
    menus: [{
        key: 'home',
        name: '首页',
        link: '/home'
    }, {
        key: 'user',
        name: '用户管理',
        link: '/user',
        children: [{
            key: 'userList',
            name: '用户列表',
            link: '/userList'
        }]
    }, {
        key: 'mine',
        name: '个人中心',
        link: '/mine'
    }]
}