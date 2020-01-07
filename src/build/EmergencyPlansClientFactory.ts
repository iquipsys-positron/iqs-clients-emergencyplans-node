import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { EmergencyPlansNullClientV1 } from '../version1/EmergencyPlansNullClientV1';
import { EmergencyPlansDirectClientV1 } from '../version1/EmergencyPlansDirectClientV1';
import { EmergencyPlansHttpClientV1 } from '../version1/EmergencyPlansHttpClientV1';
import { EmergencyPlansLambdaClientV1 } from '../version1/EmergencyPlansLambdaClientV1';

export class EmergencyPlansClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-emergencyplans', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-emergencyplans', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-emergencyplans', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-emergencyplans', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-emergencyplans', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(EmergencyPlansClientFactory.NullClientV1Descriptor, EmergencyPlansNullClientV1);
		this.registerAsType(EmergencyPlansClientFactory.DirectClientV1Descriptor, EmergencyPlansDirectClientV1);
		this.registerAsType(EmergencyPlansClientFactory.HttpClientV1Descriptor, EmergencyPlansHttpClientV1);
		this.registerAsType(EmergencyPlansClientFactory.LambdaClientV1Descriptor, EmergencyPlansLambdaClientV1);
	}
	
}
