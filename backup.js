const exec = require("child_process").exec;


const backupDirPath = "/Users/reedamranjan/databaseDumpPath/";
const host = "sandbox.jwgp9yq.mongodb.net"
const port = "27017"
const dataBase = "newMongoDb"
const username ="m001-student"
const password = "m001-mongodb-basics"


exports.dbAutoBackUp = () => {

  // Current Date
  currentDate = new Date();
  let newBackupDir = currentDate.toJSON();

  // New backup path for current backup process
  let newBackupPath = backupDirPath + host + '/' + "mongodump-" + newBackupDir;

  // Command for backup from local databases
  let localDBCmd = `mongodump --host="${host}:${port}" --db="${dataBase}" -o="${newBackupPath}"`;

  // Command for backup from cloud databases
  let cloudDBCmd = `mongodump "mongodb+srv://${host}/${dataBase}" -u ${username} -p ${password} -o "${newBackupPath}"`;
  console.log("newBackupPath", newBackupPath);
  
  exec(cloudDBCmd, (error, stdout, stderr) => {
    if(error){
      throw error
    }
    console.log("Backup Created successfully at---", newBackupDir);
  });
};








// let chetanClusterCmd = `mongodump "mongodb+srv://${host}/${dataBase}" -u chetan -p chetan -o ${newBackupPath}`
