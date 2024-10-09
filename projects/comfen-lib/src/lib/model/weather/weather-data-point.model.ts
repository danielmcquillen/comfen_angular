export class WeatherDataPoint {
    public date: Date;
    public dryBulbTemp: number;
    public wetBulbTemp: number;

    constructor(data: {
        date: Date;
        dryBulbTemp: number;
        wetBulbTemp: number;
    }) {
        this.date = data.date;
        this.dryBulbTemp = data.dryBulbTemp;
        this.wetBulbTemp = data.wetBulbTemp;
    }
}