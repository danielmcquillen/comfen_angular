export class OutdoorAirflowRate {
    public flowType: OutdoorAirFlowType;
    public buildingType: BuildingType;
    public ratePerPerson: number | null;
    public ratePerZoneFloorArea: number | null;

    constructor(data: {
        flowType: OutdoorAirFlowType;
        buildingType: BuildingType;
        ratePerPerson?: number | null;
        ratePerZoneFloorArea?: number | null;
    }) {
        this.flowType = data.flowType;
        this.buildingType = data.buildingType;
        this.ratePerPerson = data.ratePerPerson ?? null;
        this.ratePerZoneFloorArea = data.ratePerZoneFloorArea ?? null;
    }
}