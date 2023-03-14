import Mock from 'mockjs'

//图表数据
let List = []
export default {
    getStatisticalData: () => {
        for(let i = 0; i < 7;i++){
            List.push(
                Mock.mock({
                    苹果: Mock.Random.float(100,8000,0,0),
                    Vivo: Mock.Random.float(100,8000,0,0),
                    华为: Mock.Random.float(100,8000,0,0),
                    三星: Mock.Random.float(100,8000,0,0),
                    小米: Mock.Random.float(100,8000,0,0),
                    Oppo: Mock.Random.float(100,8000,0,0),
                })
            )
        }

        return {
            code: 200,
            data:{
                List
            }
        }
    }
}