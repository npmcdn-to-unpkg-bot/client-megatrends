declare module graphObject {

    export interface DataPoint {
        label: string;
        y: number;
    }

    export interface DataSet {
        type: string;
        dataPoints: DataPoint[];
    }

    export interface RootObject {
        trend: string;
        id: string;
        title: string;
        data: DataSet[];
    }

}
