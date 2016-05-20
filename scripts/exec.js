/**
 * Command executioner.
 */
const console = require('console');
const exec = require('child_process').exec;

module.exports = (command) => {
  console.log(`Executing: ${command}`);

  exec(command, (err, stdout, stderr) => {
    // display `stdout` first, if exist. Some plugins pipe the error messages here.
    if (stdout) {
      console.log(stdout);
    }

    // throw `stderr` instead of `err`, if exist, to reduce log clutters
    if (err) {
      throw stderr;
    }

    console.log('OK');
  });
};
