export class AnnualDataPoint {
    public type: string;
    public low: number;
    public avg: number;
    public high: number;

    constructor(data: {
        type: string;
        low: number;
        avg: number;
        high: number;
    }) {
        this.type = data.type;
        this.low = data.low;
        this.avg = data.avg;
        this.high = data.high;
    }
}