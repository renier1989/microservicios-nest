import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
    PORT : number
}

const envSchema = joi.object({
    PORT: joi.number().required()
})
.unknown(true);

const { error, value }= envSchema.validate(process.env);

if(error){
    throw new Error(`Config .env Validation Error: ${error.message}`);
}

const envVars:EnvVars = value; // esta es una forma de aplicarle el tipado

export const envs= {
    port: envVars.PORT
}