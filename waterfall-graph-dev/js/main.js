define('main', ['waterfall-graph', 'detail-graph'],
    function (waterfall, detail) {

        function debounce(a,b,c){var d;return function(){var e=this,f=arguments;clearTimeout(d),d=setTimeout(function(){d=null,c||a.apply(e,f)},b),c&&!d&&a.apply(e,f)}}

        var getHAR = function() {
            var harPromise = D();

            chrome.devtools.network.getHAR(function (har) {
                harPromise.resolve(har);
            });

            return harPromise.promise;
        };

        var processData = function(har) {
            waterfall.render(har, detail);
        };

        chrome.devtools.network.onRequestFinished.addListener(debounce(function(req) {
            getHAR().then(processData);
        }, 500));

        getHAR().then(processData);
    });
