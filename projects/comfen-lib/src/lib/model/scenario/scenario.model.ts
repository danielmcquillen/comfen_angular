export interface IScenario {
    userId: number;
    projectId: number;
    hvacSystemId: number;
    wallId: number;
    foundationId: number;
    name: string;
    coreDepth: number;
    facadeHeight: number;
    facadeWidth: number;
    description: string;
    economizerType: number;
    wwr: number;
    numPeople: number;
    lighting: number;
    simDataValid: boolean;
    lightingControlType: number;
    glareControl: boolean;
    naturalVentilation: boolean;
    equipment: number;
    hvacCostOverride: number;
    totalGWACost: number;
    gsLiteCost: number;
    spLiteCost: number;
    gsLiteArea: number;
    spLiteArea: number;
}

export class Scenario implements IScenario {
    userId: number = 0;
    projectId: number = 0;
    hvacSystemId: number = 1; // hard-coded to PSZ
    wallId: number = 0; // no wall selected...default to project R value
    foundationId: number = 0;
    name: string = '';
    coreDepth: number = 4.572;
    facadeHeight: number = 3.048;
    facadeWidth: number = 6.096;
    description: string = '';
    economizerType: number = 0;
    wwr: number = 0;
    numPeople: number = 1;
    lighting: number = 10.76391; // = 1 w/sf
    simDataValid: boolean = false;
    lightingControlType: number = 0;
    glareControl: boolean = false;
    naturalVentilation: boolean = false;
    equipment: number = 8.07293; // = 0.75 w/sf
    hvacCostOverride: number = -1;
    totalGWACost: number = 0;
    gsLiteCost: number = 0;
    spLiteCost: number = 0;
    gsLiteArea: number = 0;
    spLiteArea: number = 0;

    constructor(data?: Partial<IScenario>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}