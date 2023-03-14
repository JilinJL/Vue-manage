import Mock from 'mockjs'
import home from './mockServeData/home'
// 利用mock模拟数据
Mock.mock('/api/home/getData',home.getStatisticalData())