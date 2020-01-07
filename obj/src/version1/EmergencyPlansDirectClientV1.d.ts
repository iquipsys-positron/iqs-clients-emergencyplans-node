import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';
import { IEmergencyPlansClientV1 } from './IEmergencyPlansClientV1';
import { EmergencyPlanV1 } from './EmergencyPlanV1';
export declare class EmergencyPlansDirectClientV1 extends DirectClient<any> implements IEmergencyPlansClientV1 {
    constructor();
    getPlans(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<EmergencyPlanV1>) => void): void;
    getPlanById(correlationId: string, planId: string, callback: (err: any, plan: EmergencyPlanV1) => void): void;
    createPlan(correlationId: string, plan: EmergencyPlanV1, callback: (err: any, plan: EmergencyPlanV1) => void): void;
    updatePlan(correlationId: string, plan: EmergencyPlanV1, callback: (err: any, plan: EmergencyPlanV1) => void): void;
    deletePlanById(correlationId: string, planId: string, callback: (err: any, plan: EmergencyPlanV1) => void): void;
}
