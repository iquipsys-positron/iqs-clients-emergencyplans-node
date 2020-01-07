"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const EmergencyPlansNullClientV1_1 = require("../version1/EmergencyPlansNullClientV1");
const EmergencyPlansDirectClientV1_1 = require("../version1/EmergencyPlansDirectClientV1");
const EmergencyPlansHttpClientV1_1 = require("../version1/EmergencyPlansHttpClientV1");
const EmergencyPlansLambdaClientV1_1 = require("../version1/EmergencyPlansLambdaClientV1");
class EmergencyPlansClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(EmergencyPlansClientFactory.NullClientV1Descriptor, EmergencyPlansNullClientV1_1.EmergencyPlansNullClientV1);
        this.registerAsType(EmergencyPlansClientFactory.DirectClientV1Descriptor, EmergencyPlansDirectClientV1_1.EmergencyPlansDirectClientV1);
        this.registerAsType(EmergencyPlansClientFactory.HttpClientV1Descriptor, EmergencyPlansHttpClientV1_1.EmergencyPlansHttpClientV1);
        this.registerAsType(EmergencyPlansClientFactory.LambdaClientV1Descriptor, EmergencyPlansLambdaClientV1_1.EmergencyPlansLambdaClientV1);
    }
}
exports.EmergencyPlansClientFactory = EmergencyPlansClientFactory;
EmergencyPlansClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-emergencyplans', 'factory', 'default', 'default', '1.0');
EmergencyPlansClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-emergencyplans', 'client', 'null', 'default', '1.0');
EmergencyPlansClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-emergencyplans', 'client', 'direct', 'default', '1.0');
EmergencyPlansClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-emergencyplans', 'client', 'http', 'default', '1.0');
EmergencyPlansClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-emergencyplans', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=EmergencyPlansClientFactory.js.map