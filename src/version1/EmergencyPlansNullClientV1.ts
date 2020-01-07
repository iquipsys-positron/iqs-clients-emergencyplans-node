import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { IEmergencyPlansClientV1 } from './IEmergencyPlansClientV1';
import { EmergencyPlanV1 } from './EmergencyPlanV1';

export class EmergencyPlansNullClientV1 implements IEmergencyPlansClientV1 {
            
    public getPlans(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<EmergencyPlanV1>) => void): void {
        callback(null, new DataPage<EmergencyPlanV1>([], 0));
    }

    public getPlanById(correlationId: string, planId: string, 
        callback: (err: any, plan: EmergencyPlanV1) => void): void {
        callback(null, null);
    }

    public createPlan(correlationId: string, plan: EmergencyPlanV1, 
        callback: (err: any, plan: EmergencyPlanV1) => void): void {
        callback(null, plan);
    }

    public updatePlan(correlationId: string, plan: EmergencyPlanV1, 
        callback: (err: any, plan: EmergencyPlanV1) => void): void {
        callback(null, plan);
    }

    public deletePlanById(correlationId: string, planId: string,
        callback: (err: any, plan: EmergencyPlanV1) => void): void {
        if (callback) callback(null, null);
    }
}