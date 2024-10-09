export class SolarRadiationDataPoint {
    public index: number;
    public month: string;
    public hour: number;
    public diffuse: number;
    public direct: number;

    constructor(data: {
        index: number;
        month: string;
        hour: number;
        diffuse: number;
        direct: number;
    }) {
        this.index = data.index;
        this.month = data.month;
        this.hour = data.hour;
        this.diffuse = data.diffuse;
        this.direct = data.direct;
    }
}