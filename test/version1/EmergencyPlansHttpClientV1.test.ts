let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { EmergencyPlansMemoryPersistence } from 'iqs-services-emergencyplans-node';
import { EmergencyPlansController } from 'iqs-services-emergencyplans-node';
import { EmergencyPlansHttpServiceV1 } from 'iqs-services-emergencyplans-node';
import { IEmergencyPlansClientV1 } from '../../src/version1/IEmergencyPlansClientV1';
import { EmergencyPlansHttpClientV1 } from '../../src/version1/EmergencyPlansHttpClientV1';
import { EmergencyPlansClientFixtureV1 } from './EmergencyPlansClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('EmergencyPlansRestClientV1', ()=> {
    let service: EmergencyPlansHttpServiceV1;
    let client: EmergencyPlansHttpClientV1;
    let fixture: EmergencyPlansClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new EmergencyPlansMemoryPersistence();
        let controller = new EmergencyPlansController();

        service = new EmergencyPlansHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-emergencyplans', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-emergencyplans', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-emergencyplans', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new EmergencyPlansHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new EmergencyPlansClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
