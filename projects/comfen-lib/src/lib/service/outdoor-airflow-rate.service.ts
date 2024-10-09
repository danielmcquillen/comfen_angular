import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OutdoorAirflowRate } from '../model/outdoor-airflow-rate.model';
@Injectable({
    providedIn: 'root'
})
export class OutdoorAirflowRateService {

    public outdoorAirflowRates: OutdoorAirflowRate[] = [];

    constructor(private http: HttpClient) {
        //Load these from server
        // DUMMY DATA...
        this.outdoorAirflowRates.push(
            new OutdoorAirflowRate(
                {
                    buildingType: BuildingType.OFFICE,
                    flowType: OutdoorAirFlowType.AIRFLOW_TYPE_NUM_PEOPLE_IN_ZONE,
                    ratePerPerson: 10,
                    ratePerZoneFloorArea: 10
                }
            )
        )

    }

    getFlowRate(buildingType: BuildingType, flowType: OutdoorAirFlowType): OutdoorAirflowRate | null {
        const rate = this.outdoorAirflowRates.find(rate => rate.buildingType === buildingType && rate.flowType === flowType);
        if (!rate) {
            console.warn(`No rate found for building type: ${buildingType}`);
            return null;
        }
        return rate;
    }

}
