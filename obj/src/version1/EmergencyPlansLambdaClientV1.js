"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class EmergencyPlansLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('plans');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getPlans(correlationId, filter, paging, callback) {
        this.callCommand('get_plans', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getPlanById(correlationId, planId, callback) {
        this.callCommand('get_plan_by_id', correlationId, {
            plan_id: planId
        }, callback);
    }
    createPlan(correlationId, plan, callback) {
        this.callCommand('create_plan', correlationId, {
            plan: plan
        }, callback);
    }
    updatePlan(correlationId, plan, callback) {
        this.callCommand('update_plan', correlationId, {
            plan: plan
        }, callback);
    }
    deletePlanById(correlationId, planId, callback) {
        this.callCommand('delete_plan_by_id', correlationId, {
            plan_id: planId
        }, callback);
    }
}
exports.EmergencyPlansLambdaClientV1 = EmergencyPlansLambdaClientV1;
//# sourceMappingURL=EmergencyPlansLambdaClientV1.js.map