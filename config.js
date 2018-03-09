module.exports = {
		"develop_config": {
			"documentDB" : {
			  "connection" : {
				  endpoint: 'https://cdb-swm-dev-001.documents.azure.com:443/',
				  authKey: 'p0m7MPVaMHSgtc8pxH0MUN1Ufgk6s674D2iaolPNn1LwT34e0aDHOCFgYpUwEpF0myicGaObeFpgwsRDjMgQug==',
				  databaseID: 'admin'
			  }
			},
			"loggerConfig":{
				"log_filename" : "sensor_iot_service.log",
				"logLevel" : "debug" 
			}
		}	
};