

export class Scenario {
    public id!: string;
    public name!: string;
    public description: string = '';
    public location: Location | null = null;
    public timeframe: Timeframe = Timeframe.ANNUAL;
}
