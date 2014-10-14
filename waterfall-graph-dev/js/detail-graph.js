define(['vendor/d3/d3.min'], function(d3) {
    var mainGraphCont,
        svg,
        paddings = { top: 0, right: 90, bottom: 0, left: 60 },
        width = 450,
        height = 0,
        xScale,
        yScale,
        vStep = 39,
        timings = [],
        max = 0,
        detailCont = d3.select('.w-detail'),
        waterfallCont = d3.select('.w-graph__cont')
        title = detailCont.select('.w-detail__title'),
        host = detailCont.select('.w-detail__host'),
        mimeType = detailCont.select('.w-detail__mime-type');

    var prepareTimings = function(data) {
        var propList = ['blocked', 'dns', 'connect', 'send', 'wait', 'receive', 'ssl'],
            result = [],
            totalTime = 0;

        for (var i = 0; i < propList.length; i++) {
            if (data.timings[propList[i]]) {

                data.timings[propList[i]] > max && (max = data.timings[propList[i]]);

                result.push({
                    title: propList[i],
                    val: data.timings[propList[i]],
                    xPos: totalTime,
                    ms: (Math.ceil(data.timings[propList[i]] * 100) / 100) + ' ms',
                    percent: (Math.ceil(((data.timings[propList[i]] * 100) / data.time) * 100) / 100) + '%'
                });
                totalTime += data.timings[propList[i]];
            }

        }

        return result;
    };

    var prepareMainGraph = function(data) {
        width = width - paddings.left - paddings.right;
        height = (timings.length * vStep) - paddings.top - paddings.bottom;

        mainGraphCont = d3.select('.w-detail-graph');

        svg = mainGraphCont
            .attr('width', width + paddings.left + paddings.right)
            .attr('height', height + paddings.top + paddings.bottom + 50)
        .append('g')
            .attr('transform', 'translate(' + paddings.left + ',' + paddings.top + ')');

        /**
         * Create graph scales
         */
        xScale = d3.scale.linear()
                    .domain([0, data.time])
                    .range([1, width]);

        yScale = d3.scale.linear()
                    .domain([0, height / vStep])
                    .range([0, height]);
    };

    /**
     * Graph Methods
     */

    var drawTimings = (function() {
        var cont;

        return function (svg, data, timings) {
            if (!!svg.select('.w-detail__timings')[0]) cont = svg.append('g').attr('class', 'w-detail__timings');

            /**
             * Timings Group
             */
            var group = cont.selectAll('.w-detail__timing')
                            .data(timings)
                        .enter().append('g')
                            .attr('class', function (d) {
                                return 'w-detail__timing -' + d.title;
                            });

            group
                .append('rect')
                .attr('class', function (d) {
                    return 'w-detail__timing-entry -' + d.title;
                })
                .attr('x', function (d) { return xScale(d.xPos); })
                .attr('y', function (d, i) { return yScale(i); })
                .attr('width', function (d) { return xScale(d.val); })
                .attr('height', function () { return vStep; });

            group
                .append('text')
                .attr('class', function (d) {
                    return 'w-detail__timing-title -' + d.title;
                })
                .text(function (d) { return d.title })
                .attr('x', function (d) { return xScale(d.xPos) - 10; })
                .attr('y', function (d, i) { return yScale(i) + ( vStep / 2 ) + 5; })
                .attr('text-anchor', 'end');

            group
                .append('text')
                .attr('class', function (d) {
                    return 'w-detail__timing-info' + (d.val === max ? ' -max' : '');
                })
                .text(function (d) { return d.ms; })
                .attr('x', function (d) { return xScale(d.xPos + d.val) + 10; })
                .attr('y', function (d, i) { return yScale(i) + 17; })
                .attr('text-anchor', 'start');

            group
                .append('text')
                .attr('class', 'w-detail__timing-info -percent')
                .text(function (d) { return d.percent; })
                .attr('x', function (d) { return xScale(d.xPos + d.val) + 10; })
                .attr('y', function (d, i) { return yScale(i) + 33; })
                .attr('text-anchor', 'start');

        };
    })();

    var drawTotalTime = (function() {
        var cont;

        return function (svg, data) {
            if (!!svg.select('.w-detail__total-time')[0]) cont = svg.append('g').attr('class', 'w-detail__total-time');

            cont
                .append('line')
                .attr('class', 'w-detail__total-time__line')
                .attr('x1', 0)
                .attr('x2', xScale(data.time))
                .attr('y1', height + 14.5)
                .attr('y2', height + 14.5);

            cont
                .append('text')
                .attr('class', 'w-detail__total-time__text')
                .text('Total Time: ' + (Math.ceil(data.time * 100) / 100) + ' ms')
                .attr('x', xScale(data.time) / 2)
                .attr('y', height + 34)
                .attr('text-anchor', 'middle');
        };
    })();

    /**
     * State actions
     */
    var open = function() {
        waterfallCont.classed('-blur', true);
        detailCont.classed('-opened', true);
    };

    var close = function() {
        waterfallCont.classed('-blur', false);
        detailCont.classed('-opened', false);
    };

    var cleanUp = function() {
        svg.selectAll('*').remove();
    };

    var resize = function(data) {
        height = (timings.length * vStep) - paddings.top - paddings.bottom;

        mainGraphCont
            .attr('width', width + paddings.left + paddings.right)
            .attr('height', height + paddings.top + paddings.bottom + 50)

        xScale
            .domain([0, data.time])
            .range([1, width]);

        yScale
            .domain([0, height / vStep])
            .range([0, height]);
    };

    detailCont.on('click', function  () {
        close();
    });

    return {
        render: function (data) {
            timings = prepareTimings(data);

            if (!mainGraphCont) {
                prepareMainGraph(data);
            } else {
                resize(data);
            }

            cleanUp();
            open();

            drawTimings(svg, data, timings);
            drawTotalTime(svg, data);
        }
    };
});