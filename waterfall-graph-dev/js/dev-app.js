requirejs.config({
    baseUrl: '',
    paths: {
        app: 'js',
        vendor: 'vendor'
    }
});

// Start the main app logic.
requirejs(
    ['app/legend', 'app/sample-data-full', 'app/sample-data', 'app/waterfall-graph', 'app/detail-graph'],
    function (legend, d1, d2, waterfall, detail) {
        waterfall.render(d1, detail);

        setTimeout(function () {
            console.log('update data');
            waterfall.render(d2, detail);
        }, 5000);
    });
