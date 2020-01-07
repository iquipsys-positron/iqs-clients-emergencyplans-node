import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IEmergencyPlansClientV1 } from './IEmergencyPlansClientV1';
//import { IEmergencyPlansController } from 'iqs-services-emergencyplans-node';
import { EmergencyPlanV1 } from './EmergencyPlanV1';

export class EmergencyPlansDirectClientV1 extends DirectClient<any> implements IEmergencyPlansClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-emergencyplans", "controller", "*", "*", "*"))
    }

    public getPlans(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<EmergencyPlanV1>) => void): void {
        let timing = this.instrument(correlationId, 'plans.get_plans');
        this._controller.getPlans(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getPlanById(correlationId: string, planId: string, 
        callback: (err: any, plan: EmergencyPlanV1) => void): void {
        let timing = this.instrument(correlationId, 'plans.get_plan_by_id');
        this._controller.getPlanById(correlationId, planId, (err, plan) => {
            timing.endTiming();
            callback(err, plan);
        });
    }

    public createPlan(correlationId: string, plan: EmergencyPlanV1, 
        callback: (err: any, plan: EmergencyPlanV1) => void): void {
        let timing = this.instrument(correlationId, 'plans.create_plan');
        this._controller.createPlan(correlationId, plan, (err, plan) => {
            timing.endTiming();
            callback(err, plan);
        });
    }

    public updatePlan(correlationId: string, plan: EmergencyPlanV1, 
        callback: (err: any, plan: EmergencyPlanV1) => void): void {
        let timing = this.instrument(correlationId, 'plans.update_plan');
        this._controller.updatePlan(correlationId, plan, (err, plan) => {
            timing.endTiming();
            callback(err, plan);
        });
    }

    public deletePlanById(correlationId: string, planId: string,
        callback: (err: any, plan: EmergencyPlanV1) => void): void {
        let timing = this.instrument(correlationId, 'plans.delete_plan_by_id');
        this._controller.deletePlanById(correlationId, planId, (err, plan) => {
            timing.endTiming();
            callback(err, plan);
        });
    }
}