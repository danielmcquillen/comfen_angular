import { WindDataPoint } from './weather/wind-data-point.model';
import { WeatherDataPoint } from './weather/weather-data-point.model';
import { HighLowAverageDataPoint } from './weather/high-low-average-data-point.model';
import { SeasonAvgTempDataPoint } from './weather/season-avg-temp-data-point.model';
import { SolarRadiationDataPoint } from './weather/solar-radiation-data-point.model';
import { AnnualDataPoint } from './weather/annual-solar-radiation-data-point.model';
// Import other necessary models


export class ComfenWeatherFileModel {

    public identifierCode: string;
    public locName: string;
    public state: string;
    public timeZone: string;
    public lat: number;
    public lon: number;
    public elevation: number;

    // Information from DDY
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // First 7 lines from DDY
    public locationsLines: string[] = [];
    // Heating lines from DDY
    public heatingLines: string[] = [];
    // Cooling lines from DDY
    public coolingLines: string[] = [];

    // TEMPS AND HUMIDITY
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    public weatherData: WeatherDataPoint[] = [];
    public dryBulbMonthlyTemps: HighLowAverageDataPoint[] = [];
    public wetBulbMonthlyTemps: HighLowAverageDataPoint[] = [];

    public springAvgTemps: SeasonAvgTempDataPoint[] = [];
    public summerAvgTemps: SeasonAvgTempDataPoint[] = [];
    public winterAvgTemps: SeasonAvgTempDataPoint[] = [];
    public fallAvgTemps: SeasonAvgTempDataPoint[] = [];

    // ANNUAL SOLAR RADIATION
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    public solarRadiation: SolarRadiationDataPoint[] = [];
    public horizontalSolarRadAnnual: AnnualDataPoint[] = [];
    public horizontalSolarIllumAnnual: AnnualDataPoint[] = [];

    // MONTHLY SOLAR RADIATION
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    public horizontalSolarRadDB: HighLowAverageDataPoint[] = [];
    public horizontalSolarRadGHD: HighLowAverageDataPoint[] = [];
    public horizontalSolarIllumDB: HighLowAverageDataPoint[] = [];
    public horizontalSolarIllumGHD: HighLowAverageDataPoint[] = [];

    // SKY VALUES
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    public skyClearnessAnnual: AnnualDataPoint[] = [];
    public skyClearness: HighLowAverageDataPoint[] = [];

    // WIND ROSE DATA
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    public springWindRose: WindDataPoint[] = this.windRoseArray();
    public summerWindRose: WindDataPoint[] = this.windRoseArray();
    public fallWindRose: WindDataPoint[] = this.windRoseArray();
    public winterWindRose: WindDataPoint[] = this.windRoseArray();


    constructor(data: Partial<ComfenWeatherFileModel> = {}) {
        this.identifierCode = data.identifierCode ?? '';
        this.locName = data.locName ?? '';
        this.state = data.state ?? '';
        this.timeZone = data.timeZone ?? '';
        this.lat = data.lat ?? 0;
        this.lon = data.lon ?? 0;
        this.elevation = data.elevation ?? 0;
    }


    protected windRoseArray(): WindDataPoint[] {
        const directions: number[] = [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5];
        return directions.map(direction => new WindDataPoint(direction));
    }
}