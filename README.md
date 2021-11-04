# ZSFlowEditor

#### 介绍
使用 vue3 、vite 、 AntV X6 完成的流程设计器。设计器主要的用途为ERP类项目的流程审批。因为平台旧版本使用的SilverLight流程设计器，然后按照项目需求和原有的样式制作的一模一样的设计器。支持 职能带、节点属性、边条件表达式等。
#### 技术点
1、使用vite + vue3 + vuex + axios + element plus + eslint + AntV X6 + mockjs
2、手工加载JSON数据，手工创建画布节点，可以自定义业务数据
3、自定义哪些节点类型可被选择、拖拽、移动等。
4、职能带泳道，根据多边形画法完成职能带泳道。实现新增职能带泳道自动吸附对齐；只允许删除最后一个职能带泳道；实现子节点的选择事件和无法移出职能带范围

#### 项目说明

基于内控场景的业务流程图，要求和市场上的流程图不太一样，最早流程图分业务域、流程图、活动图、步骤图，要求依据流程设立风险点、控制点与岗位职责。对接后续的风险预警模块，关联控制点和风险事项，建立控制、监控、预警体系，最终实现风险测评的目的。

根据需求，后续持续优化改进。

|      日期   |更新说明 |
|---|---|
| 2021-11-04  | 1、修复闭环节点的检查Bug 2、审批操作权限隐藏主表 重新设置选项为空 4、扩展功能显示调整 5、调整部分参数名与服务适应 更新mockjs  |
| 2021-11-02  | 项目上使用，在流程设计器页面维护职能部门  |
| 2021-10-28  | 1、流程功能分隔符替换2、增加加载进度3、节点边功能选择链接优化  |
| 2021-09-30  | 升级依赖到最新版本，增加eslint进行代码检查  |
| 2021-08-30  | 增加mockjs、增加演示数据  |
| 2021-08-27  | 初始化仓库  |   


#### 安装教程

安装依赖

```shell
npm install --registry=https://registry.npm.taobao.org
```

启动本地调试 使用mockjs带演示数据

```shell
npm run demo
```

#### 项目截图
![Image text](./images/1.png)
![Image text](./images/2.png)
![Image text](./images/3.png)


#### 参与贡献
工作很多年，希望能把一些不同于市面上的东西拿出来分享交流，让大家一起进步。
如果觉得项目对您有帮忙，请点星支持一下，欢迎留言交流讨论。
    



 
