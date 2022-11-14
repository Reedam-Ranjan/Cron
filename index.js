const CronJob = require('cron').CronJob
const Cron = require('./backup.js')

// AutoBackup 
console.log('Before job instantiation');
const job = new CronJob(
    '1 * * * * *',
    function() {
      Cron.dbAutoBackUp();
    },
  );
console.log('After job instantiation');
job.start();