
// unit.service.ts
import { Injectable } from '@angular/core';
import { IScenario } from '../model/scenario/scenario.model';
import { ConversionsService } from './conversions.service';

export enum UnitSystem {
    SI = 'SI',
    IMPERIAL = 'IMPERIAL'
}

export interface ScenarioDisplayUnits {
    coreDepth: number;
    facadeHeight: number;
    facadeWidth: number;
    lighting: number;
    equipment: number;
    hvacCostOverride: number;
    gsLiteArea: number;
    spLiteArea: number;
}

@Injectable({
    providedIn: 'root'
})
export class UnitService {
    private currentSystem: UnitSystem = UnitSystem.SI;

    setUnitSystem(system: UnitSystem): void {
        this.currentSystem = system;
    }

    getUnitSystem(): UnitSystem {
        return this.currentSystem;
    }

    convertToDisplayUnits(scenario: IScenario): ScenarioDisplayUnits {
        if (this.currentSystem === UnitSystem.SI) {
            return {
                coreDepth: scenario.coreDepth,
                facadeHeight: scenario.facadeHeight,
                facadeWidth: scenario.facadeWidth,
                lighting: scenario.lighting,
                equipment: scenario.equipment,
                hvacCostOverride: scenario.hvacCostOverride,
                gsLiteArea: scenario.gsLiteArea,
                spLiteArea: scenario.spLiteArea
            };
        }

        return {
            coreDepth: ConversionsService.metersToFeet(scenario.coreDepth),
            facadeHeight: ConversionsService.metersToFeet(scenario.facadeHeight),
            facadeWidth: ConversionsService.metersToFeet(scenario.facadeWidth),
            lighting: ConversionsService.wattsSqMToWattsSqF(scenario.lighting),
            equipment: ConversionsService.wattsSqMToWattsSqF(scenario.equipment),
            hvacCostOverride: ConversionsService.costPerSqMToCostPerSqFt(scenario.hvacCostOverride),
            gsLiteArea: ConversionsService.squareMetersToSquareFeet(scenario.gsLiteArea),
            spLiteArea: ConversionsService.squareMetersToSquareFeet(scenario.spLiteArea)
        };
    }

    convertToStorageUnits(displayUnits: Partial<ScenarioDisplayUnits>): Partial<IScenario> {
        if (this.currentSystem === UnitSystem.SI) {
            return displayUnits;
        }

        const result: Partial<IScenario> = {};

        if (displayUnits.coreDepth !== undefined) {
            result.coreDepth = ConversionsService.feetToMeters(displayUnits.coreDepth);
        }
        if (displayUnits.facadeHeight !== undefined) {
            result.facadeHeight = ConversionsService.feetToMeters(displayUnits.facadeHeight);
        }
        if (displayUnits.facadeWidth !== undefined) {
            result.facadeWidth = ConversionsService.feetToMeters(displayUnits.facadeWidth);
        }
        if (displayUnits.lighting !== undefined) {
            result.lighting = ConversionsService.wattsSqFtToWattsSqM(displayUnits.lighting);
        }
        if (displayUnits.equipment !== undefined) {
            result.equipment = ConversionsService.wattsSqFtToWattsSqM(displayUnits.equipment);
        }
        if (displayUnits.hvacCostOverride !== undefined) {
            result.hvacCostOverride = ConversionsService.costPerSqFtToCostPerSqM(displayUnits.hvacCostOverride);
        }
        if (displayUnits.gsLiteArea !== undefined) {
            result.gsLiteArea = ConversionsService.squareFeetToSquareMeters(displayUnits.gsLiteArea);
        }
        if (displayUnits.spLiteArea !== undefined) {
            result.spLiteArea = ConversionsService.squareFeetToSquareMeters(displayUnits.spLiteArea);
        }

        return result;
    }
}
