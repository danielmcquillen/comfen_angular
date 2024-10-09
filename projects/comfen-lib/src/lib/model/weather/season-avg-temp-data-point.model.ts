export class SeasonAvgTempDataPoint {
    public hour: number;
    public dbAvg: number;
    public wbAvg: number;
    public rhAvg: number;

    constructor(data: {
        hour: number;
        dbAvg: number;
        wbAvg: number;
        rhAvg: number;
    }) {
        this.hour = data.hour;
        this.dbAvg = data.dbAvg;
        this.wbAvg = data.wbAvg;
        this.rhAvg = data.rhAvg;
    }
}