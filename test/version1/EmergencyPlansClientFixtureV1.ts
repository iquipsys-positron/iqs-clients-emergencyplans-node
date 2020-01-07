let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { EmergencyPlanV1 } from '../../src/version1/EmergencyPlanV1';
import { EmergencyActionTypeV1 } from '../../src/version1/EmergencyActionTypeV1';
import { IEmergencyPlansClientV1 } from '../../src/version1/IEmergencyPlansClientV1';

let PLAN1: EmergencyPlanV1 = {
    id: '1',
    org_id: '1',
    name: 'Test plan 1',
    steps: []
};
let PLAN2: EmergencyPlanV1 = {
    id: '2',
    org_id: '1',
    name: 'Test plan 2',
    steps: []
};

export class EmergencyPlansClientFixtureV1 {
    private _client: IEmergencyPlansClientV1;
    
    constructor(client: IEmergencyPlansClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        let plan1, plan2;

        async.series([
        // Create one plan
            (callback) => {
                this._client.createPlan(
                    null,
                    PLAN1,
                    (err, plan) => {
                        assert.isNull(err);

                        assert.isObject(plan);
                        assert.equal(plan.org_id, PLAN1.org_id);
                        assert.equal(plan.name, PLAN1.name);

                        plan1 = plan;

                        callback();
                    }
                );
            },
        // Create another plan
            (callback) => {
                this._client.createPlan(
                    null,
                    PLAN2,
                    (err, plan) => {
                        assert.isNull(err);

                        assert.isObject(plan);
                        assert.equal(plan.org_id, PLAN2.org_id);
                        assert.equal(plan.name, PLAN2.name);

                        plan2 = plan;

                        callback();
                    }
                );
            },
        // Get all plans
            (callback) => {
                this._client.getPlans(
                    null,
                    null,
                    new PagingParams(0,5,false),
                    (err, plans) => {
                        assert.isNull(err);

                        assert.isObject(plans);
                        assert.isTrue(plans.data.length >= 2);

                        callback();
                    }
                );
            },
        // Update the plan
            (callback) => {
                plan1.name = 'Updated plan 1';

                this._client.updatePlan(
                    null,
                    plan1,
                    (err, plan) => {
                        assert.isNull(err);

                        assert.isObject(plan);
                        assert.equal(plan.name, 'Updated plan 1');
                        assert.equal(plan.id, PLAN1.id);

                        plan1 = plan;

                        callback();
                    }
                );
            },
        // Delete plan
            (callback) => {
                this._client.deletePlanById(
                    null,
                    plan1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete plan
            (callback) => {
                this._client.getPlanById(
                    null,
                    plan1.id,
                    (err, plan) => {
                        assert.isNull(err);
                        
                        assert.isNull(plan || null);

                        callback();
                    }
                );
            }
        ], done);
    }
}
