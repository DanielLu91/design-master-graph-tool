import { GraphData } from '@antv/g6';
export declare class App {
    static getInstance(): App;
    private static INSTANCE;
    private _graph;
    run(): void;
    readData(json: GraphData): void;
}
