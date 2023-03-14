export default {
    namespaced: true,
    state: {
        isCollapse: false, // 用于控制菜单展开收起
        tabsList: [     //面包屑数据
            {
                path: "/",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/Home",
            }
        ],
    },
    actions:{
        // 修改菜单栏展开状态
        collapseMenu(context){
            context.commit('collapseMenu');
        },
        // 更新面包屑数据
        selectTabs(context,item){
            //判断当前是否首页
            if(item.name !== 'home'){
                // 判断当前item是否已在面包屑中
                if(!context.state.tabsList.some(i=>i.name===item.name)){
                    context.commit('selectTabs',item)
                }
            }
        }
    },
    mutations: {
        collapseMenu(state){
            state.isCollapse = !state.isCollapse;
        },
        selectTabs(state,item){
            state.tabsList.push(item)
        }
    }

}