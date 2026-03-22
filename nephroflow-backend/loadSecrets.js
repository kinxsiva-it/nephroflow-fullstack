const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager");

async function loadEnvFromAWS() {
  const secret_name = "nephroflow/prod/env";
  const client = new SecretsManagerClient({ region: "ap-southeast-1" });

  try {
    const response = await client.send(
      new GetSecretValueCommand({ SecretId: secret_name, VersionStage: "AWSCURRENT" })
    );
    
    const secrets = JSON.parse(response.SecretString);
    
    for (const key in secrets) {
      process.env[key] = secrets[key];
    }
    console.log("Successfully loaded secrets from AWS Secrets Manager");
  } catch (error) {
    console.error("Error loading secrets from AWS:", error);
    process.exit(1);
  }
}

module.exports = loadEnvFromAWS;