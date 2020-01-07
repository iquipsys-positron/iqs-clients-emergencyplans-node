import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';
import { EmergencyPlanV1 } from './EmergencyPlanV1';
import { IEmergencyPlansClientV1 } from './IEmergencyPlansClientV1';
export declare class EmergencyPlansLambdaClientV1 extends CommandableLambdaClient implements IEmergencyPlansClientV1 {
    constructor(config?: any);
    getPlans(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<EmergencyPlanV1>) => void): void;
    getPlanById(correlationId: string, planId: string, callback: (err: any, plan: EmergencyPlanV1) => void): void;
    createPlan(correlationId: string, plan: EmergencyPlanV1, callback: (err: any, plan: EmergencyPlanV1) => void): void;
    updatePlan(correlationId: string, plan: EmergencyPlanV1, callback: (err: any, plan: EmergencyPlanV1) => void): void;
    deletePlanById(correlationId: string, planId: string, callback: (err: any, plan: EmergencyPlanV1) => void): void;
}
