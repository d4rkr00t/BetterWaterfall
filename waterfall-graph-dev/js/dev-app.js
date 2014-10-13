requirejs.config({
    baseUrl: '',
    paths: {
        app: 'js',
        vendor: 'vendor'
    }
});

// Start the main app logic.
requirejs(
    ['app/legend', 'app/sample-data', 'app/detail-data', 'app/waterfall-graph', 'app/detail-graph'],
    function (legend, waterfallData, detailData, waterfall, detail) {
        legend.mainLegend();

        waterfall.render(waterfallData, detail.render);
        legend.timingsLegend();

    });
