import { App } from './app/app';
import { registerShortCut } from './short_cut';

App.getInstance().run();
registerShortCut();
// console.log(G6);
// const data = {
//     // 点集
//     nodes: [{
//         id: 'node1',
//         label: 'node1',
//         info: 'sdfsdf',
//     }, {
//         id: 'node2',
//         label: 'node2',
//         info: 'sdfsdf12312',
//     }],
//     // 边集
//     edges: [
//         // 表示一条从 node1 节点连接到 node2 节点的边
//         {
//             source: 'node1',
//             target: 'node2'
//         }
//     ]
// };

// // 创建 G6 图实例
// const graph = new G6.Graph({
//     container: 'mountNode', // 指定图画布的容器 id，与第 9 行的容器对应
//     // 画布宽高
//     width: window.innerWidth,
//     height: window.innerHeight,
//     fitCenter: true,
//     fitView: true,
//     modes: {
//         default: [
//             'zoom-canvas', 
//             'drag-canvas',
//             'drag-node',
//             {
//                 type: 'tooltip', // 提示框
//                 formatText(model) {
//                   // 提示框文本内容
//                   const text = 'label: ' + model.label + '<br/> info: ' + model.info;
//                   return text;
//                 },
//             },
//         ],
//         select: ['click-select']
//     },
//     defaultEdge: {
//         style: {
//             endArrow: true,
//             stroke: '#000000',
//         }
//     },
//     defaultNode: {
//         size: 60,
//     },
//     layout: {
//         type: 'gForce',
//         center: [ 200, 200 ],     // 可选，默认为图的中心
//         linkDistance: 50,         // 可选，边长
//         nodeStrength: 30,         // 可选
//         edgeStrength: 0.1,        // 可选
//         nodeSize: 30,             // 可选
//         onTick: () => {           // 可选
//           console.log('ticking');
//         },
//         onLayoutEnd: () => {      // 可选
//           console.log('force layout done');
//         },
//         workerEnabled: true,      // 可选，开启 web-worker
//         gpuEnabled: true          // 可选，开启 GPU 并行计算，G6 4.0 支持
//     }
// });
// // 读取数据
// graph.data(data);
// // 渲染图
// graph.render();