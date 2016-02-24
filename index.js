#! /usr/bin/env node
var finalizer = require('commander');
var client = require('./lib/client');

finalizer
    .command('create <name>')
    .description('Create a new project.')
    .action(function(name) {
        console.log('Attempting to create project "' + name + '"');
        client.create(name, function(err, body) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(body);
        });
    });

finalizer
    .command('build')
    .description('Run a new project build.')
    .action(function() {
        console.log('This is the build command');
    });

finalizer
    .command('download <name>')
    .description('Download the latest project build.')
    .action(function(name) {
        console.log('Trying to download the latest build for "' + name + '"');
        client.download(name, function(err, msg) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(msg);
        });
    });

finalizer.version('0.0.1');
finalizer.parse(process.argv);
