export class AvgSolarRadiationPoint {
    public index: number;
    public month: string;
    public time: string;
    public diff: number;
    public direct: number;

    constructor(data: Partial<AvgSolarRadiationPoint> = {}) {
        this.index = data.index ?? 0;
        this.month = data.month ?? '';
        this.time = data.time ?? '';
        this.diff = data.diff ?? 0;
        this.direct = data.direct ?? 0;
    }
}