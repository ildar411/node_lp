const shell = require('shelljs');
//numOfCopy - int, dupl - boolean, numUp - [2,4,6,9,16]
//filename - path, string

/*var options = {
    numOfCopy : '',
    dupl : false,
    numUp : '',
};*/

var cups = function (filename, options){
    var comand = 'lp ';
    var option = options;
    var file = filename;
    if(option.numOfCopy){
        comand += '-n ' + `${option.numOfCopy}` + ' ';
    };
    if(option.duplex == false){
        comand += '-o sides=two-sided-long-edge '; 
    }
    else{
        comand += '-o sides=one-sided ';
    };
    if(option.numUp){
        comand += '-o number-up=' + `${option.numUp}` + ' ';
    }
    comand += file;
    console.log(comand);
    if (shell.exec(`${comand}`).code != 0){
        console.log('error');
        shell.exit(1);   
    };
};
module.exports = cups;
