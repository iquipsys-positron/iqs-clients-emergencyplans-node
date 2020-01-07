"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class EmergencyPlansNullClientV1 {
    getPlans(correlationId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getPlanById(correlationId, planId, callback) {
        callback(null, null);
    }
    createPlan(correlationId, plan, callback) {
        callback(null, plan);
    }
    updatePlan(correlationId, plan, callback) {
        callback(null, plan);
    }
    deletePlanById(correlationId, planId, callback) {
        if (callback)
            callback(null, null);
    }
}
exports.EmergencyPlansNullClientV1 = EmergencyPlansNullClientV1;
//# sourceMappingURL=EmergencyPlansNullClientV1.js.map