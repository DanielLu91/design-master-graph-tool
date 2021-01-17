import { Graph, GraphData } from '@antv/g6'

export class App {

    public static getInstance() {
        if (App.INSTANCE) {
            return App.INSTANCE;
        } else {
            App.INSTANCE = new App();
            return App.INSTANCE;
        }
    }

    private static INSTANCE: App;
    
    private _graph: Graph;

    public run() {
        this._graph = new Graph({
            container: 'mountNode', // 指定图画布的容器 id，与第 9 行的容器对应
            // 画布宽高
            width: window.innerWidth,
            height: window.innerHeight,
            fitCenter: true,
            fitView: true,
            modes: {
                default: [
                    'zoom-canvas', 
                    'drag-canvas',
                    'drag-node',
                    {
                        type: 'tooltip', // 提示框
                        formatText(model) {
                          // 提示框文本内容
                          const text = 'label: ' + model.label + '<br/> type: ' + model.type + '<br/> info: ' + model.info;
                          return text;
                        },
                    },
                ],
                select: ['click-select']
            },
            defaultEdge: {
                style: {
                    endArrow: true,
                    stroke: '#000000',
                }
            },
            defaultNode: {
                size: 60,
            },
            layout: {
                type: 'gForce',
                center: [ 200, 200 ],     // 可选，默认为图的中心
                linkDistance: 50,         // 可选，边长
                nodeStrength: 30,         // 可选
                edgeStrength: 0.1,        // 可选
                nodeSize: 30,             // 可选
                onTick: () => {           // 可选
                  console.log('ticking');
                },
                onLayoutEnd: () => {      // 可选
                  console.log('force layout done');
                },
                workerEnabled: true,      // 可选，开启 web-worker
                gpuEnabled: true          // 可选，开启 GPU 并行计算，G6 4.0 支持
            }
        });
        this._graph.render();
    }

    public readData(json: GraphData) {
        this._graph.data(json);
        this._graph.render();
    }

}