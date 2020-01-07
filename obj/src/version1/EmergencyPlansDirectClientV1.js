"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class EmergencyPlansDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-emergencyplans", "controller", "*", "*", "*"));
    }
    getPlans(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'plans.get_plans');
        this._controller.getPlans(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getPlanById(correlationId, planId, callback) {
        let timing = this.instrument(correlationId, 'plans.get_plan_by_id');
        this._controller.getPlanById(correlationId, planId, (err, plan) => {
            timing.endTiming();
            callback(err, plan);
        });
    }
    createPlan(correlationId, plan, callback) {
        let timing = this.instrument(correlationId, 'plans.create_plan');
        this._controller.createPlan(correlationId, plan, (err, plan) => {
            timing.endTiming();
            callback(err, plan);
        });
    }
    updatePlan(correlationId, plan, callback) {
        let timing = this.instrument(correlationId, 'plans.update_plan');
        this._controller.updatePlan(correlationId, plan, (err, plan) => {
            timing.endTiming();
            callback(err, plan);
        });
    }
    deletePlanById(correlationId, planId, callback) {
        let timing = this.instrument(correlationId, 'plans.delete_plan_by_id');
        this._controller.deletePlanById(correlationId, planId, (err, plan) => {
            timing.endTiming();
            callback(err, plan);
        });
    }
}
exports.EmergencyPlansDirectClientV1 = EmergencyPlansDirectClientV1;
//# sourceMappingURL=EmergencyPlansDirectClientV1.js.map