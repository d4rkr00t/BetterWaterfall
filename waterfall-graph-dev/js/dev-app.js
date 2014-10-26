requirejs.config({
    baseUrl: '',
    paths: {
        app: 'js',
        vendor: 'vendor'
    }
});

// Start the main app logic.
requirejs(
    ['app/legend', 'app/sample-data', 'app/waterfall-graph', 'app/detail-graph'],
    function (legend, waterfallData, waterfall, detail) {
        if (waterfallData) {
            legend.mainLegend();
            waterfall.render(waterfallData, detail);
            document.querySelector('.w-no-data').classList.add('-hidden');
        }
    });
