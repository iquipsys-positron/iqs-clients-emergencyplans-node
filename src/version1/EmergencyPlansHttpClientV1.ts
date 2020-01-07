import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { EmergencyPlanV1 } from './EmergencyPlanV1';
import { IEmergencyPlansClientV1 } from './IEmergencyPlansClientV1';

export class EmergencyPlansHttpClientV1 extends CommandableHttpClient implements IEmergencyPlansClientV1 {       
    
    constructor(config?: any) {
        super('v1/plans');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getPlans(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<EmergencyPlanV1>) => void): void {
        this.callCommand( 
            'get_plans', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getPlanById(correlationId: string, planId: string,
        callback: (err: any, plan: EmergencyPlanV1) => void): void {
        this.callCommand( 
            'get_plan_by_id',
            correlationId,
            {
                plan_id: planId
            }, 
            callback
        );        
    }

    public createPlan(correlationId: string, plan: EmergencyPlanV1,
        callback: (err: any, plan: EmergencyPlanV1) => void): void {
        this.callCommand(
            'create_plan',
            correlationId,
            {
                plan: plan
            }, 
            callback
        );
    }

    public updatePlan(correlationId: string, plan: EmergencyPlanV1,
        callback: (err: any, plan: EmergencyPlanV1) => void): void {
        this.callCommand(
            'update_plan', 
            correlationId,
            {
                plan: plan
            }, 
            callback
        );
    }

    public deletePlanById(correlationId: string, planId: string,
        callback: (err: any, plan: EmergencyPlanV1) => void): void {
        this.callCommand(
            'delete_plan_by_id', 
            correlationId,
            {
                plan_id: planId
            }, 
            callback
        );
    }
    
}
