var urlReader = require('./urlReader');
var restler = require('restler');

function getRanks(callback) {
    urlReader.read(function (urlText) {

        restler.get(urlText).on('complete', function (result) {
            var ranks = [];
            var regex = /<K>(.+?)<\/K>/g;

            while (regex.test(result)) {
                ranks.push(RegExp.$1);
            }

            callback(ranks);
        });

    });
}

exports.get = getRanks;