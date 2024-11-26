import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
/**
 * Project model
 */
export class Project {
    // Constants
    public scenarioModels: BehaviorSubject<ScenarioModel[]> = new BehaviorSubject<ScenarioModel[]>([]);
    private _currentScenario: BehaviorSubject<ScenarioModel | null> = new BehaviorSubject<ScenarioModel | null>(null);
    private _location: BehaviorSubject<LocationVO | null> = new BehaviorSubject<LocationVO | null>(null);

    isResidential: boolean;

    // Constructor
    constructor(
        private dbManager: any, // Replace with actual DB manager service
        private libraryModel: any, // Replace with actual library model service
        private resultsLoader: any // Replace with actual results loader service
    ) {
        this.init();
    }

    // Initialization
    private init(): void {
        this._scenarioModels.next([]);
        this._currentScenario.next(null);
    }

    // Getters
    get project(): ProjectVO {
        return this._project;
    }

    get scenarioModels$(): Observable<ScenarioModel[]> {
        return this._scenarioModels.asObservable();
    }

    get currentScenario$(): Observable<ScenarioModel | null> {
        return this._currentScenario.asObservable();
    }

    get location$(): Observable<LocationVO | null> {
        return this._location.asObservable();
    }

    // Methods
    create(p: ProjectVO): void {
        this._project = p;
        this.isResidential = this._project.type === ProjectModel.PROJECT_TYPE_RESIDENTIAL;

        // Load location from library
        const location = this.libraryModel.getLocationByID(this._project.locationID);
        this._location.next(location);

        // Save to database
        this.dbManager.save(this._project);

        // Additional setup...
    }

    load(projectID: number): void {
        // Load project from database
        this._project = this.dbManager.findByID(ProjectVO, projectID);
        if (!this._project) {
            throw new Error("Couldn't load project from database");
        }

        this.isResidential = this._project.type === ProjectModel.PROJECT_TYPE_RESIDENTIAL;

        // Load location
        const location = this.libraryModel.getLocationByID(this._project.locationID);
        this._location.next(location);

        // Load scenarios
        const scenarioVOs = this.dbManager.findByForeignKey(ScenarioVO, "project_id", projectID);
        const scenarioModels = scenarioVOs.map(vo => {
            const model = new ScenarioModel(); // Assuming ScenarioModel constructor
            model.load(vo.id, this._project.roofTilt);
            return model;
        });

        this._scenarioModels.next(scenarioModels);

        // Additional loading logic...
    }

    save(saveChildren: boolean = true): void {
        this._project.updatedAt = new Date();
        if (this._project.id === 0) {
            this._project.createdAt = new Date();
        }

        this.dbManager.save(this._project);

        if (saveChildren) {
            this._scenarioModels.value.forEach(scenarioModel => {
                if (scenarioModel.dataDirty) {
                    scenarioModel.scenario.projectID = this._project.id;
                    scenarioModel.save();
                }
            });
        }

        this.isResidential = this._project.type === ProjectModel.PROJECT_TYPE_RESIDENTIAL;
    }