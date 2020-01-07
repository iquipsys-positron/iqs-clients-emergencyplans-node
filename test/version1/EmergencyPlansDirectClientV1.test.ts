let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { EmergencyPlansMemoryPersistence } from 'iqs-services-emergencyplans-node';
import { EmergencyPlansController } from 'iqs-services-emergencyplans-node';
import { IEmergencyPlansClientV1 } from '../../src/version1/IEmergencyPlansClientV1';
import { EmergencyPlansDirectClientV1 } from '../../src/version1/EmergencyPlansDirectClientV1';
import { EmergencyPlansClientFixtureV1 } from './EmergencyPlansClientFixtureV1';

suite('EmergencyPlansDirectClientV1', ()=> {
    let client: EmergencyPlansDirectClientV1;
    let fixture: EmergencyPlansClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new EmergencyPlansMemoryPersistence();
        let controller = new EmergencyPlansController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-emergencyplans', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-emergencyplans', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new EmergencyPlansDirectClientV1();
        client.setReferences(references);

        fixture = new EmergencyPlansClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
