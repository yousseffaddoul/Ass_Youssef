module.exports = {
  apps: [
    {
      name: 'ishtari-api',                
      script: './app.js',                  
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',            
        PORT: 3001,                        
      },
      error_file: './logs/api-error.log',  
      out_file: './logs/api-out.log',      
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
};