export class HighLowAverageDataPoint {
    public month: number;
    public high: number;
    public low: number;
    public avg: number;

    constructor(data: {
        month: number;
        high: number;
        low: number;
        avg: number;
    }) {
        this.month = data.month;
        this.high = data.high;
        this.low = data.low;
        this.avg = data.avg;
    }
}