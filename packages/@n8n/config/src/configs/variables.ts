import { Config, Env } from '../decorators';

@Config
export class VariablesConfig {
	/** Whether to load workflow templates. */
	@Env('N8N_VARIABLES_ENABLED')
	readonly enabled: boolean = true;
}
