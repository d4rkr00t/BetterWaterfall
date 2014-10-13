requirejs.config({
    baseUrl: '',
    paths: {
        app: 'js',
        vendor: 'vendor'
    }
});

// Start the main app logic.
requirejs(['app/legend', 'app/sample-data', 'app/waterfall-graph'], function (legend, data, waterfall) {
    legend.mainLegend();

    waterfall.render(data);
    legend.timingsLegend();
});
