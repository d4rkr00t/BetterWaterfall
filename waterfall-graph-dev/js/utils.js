define(function () {
    return {
        formatSize: function(size) {
            size = (size / 1024);
            return size > 3 ? size : 3;
        },
        getContentType: function(mimeType) {

            switch(mimeType) {
                case 'text/html':
                    return 'document';
                case 'text/css':
                    return 'stylesheet';
                case 'application/x-javascript':
                    return 'script';
                case 'text/javascript':
                    return 'script';
                case 'application/javascript':
                    return 'script';
                case 'image/png':
                    return 'image';
                case 'image/gif':
                    return 'image';
                case 'image/jpeg':
                    return 'image';
                case 'application/octet-stream':
                    return 'fonts';
                default:
                    return 'other';
            }
        },
        parseUrl: function(url) {
            var isValid = false,
                url = url,
                scheme = '',
                host = '',
                port = '',
                path = '',
                queryParams = '',
                fragment = '',
                folderPathComponents = '',
                lastPathComponent = '',
                result;

            // RegExp groups:
            // 1 - scheme
            // 2 - hostname
            // 3 - ?port
            // 4 - ?path
            // 5 - ?fragment
            var match = url.match(/^([^:]+):\/\/([^\/:]*)(?::([\d]+))?(?:(\/[^#]*)(?:#(.*))?)?$/i);
            if (match) {
                isValid = true;
                scheme = match[1].toLowerCase();
                host = match[2];
                port = match[3];
                path = match[4] || '/';
                fragment = match[5];
            } else {
                if (url.startsWith('data:')) {
                    scheme = 'data';
                    return;
                }
                if (url === 'about:blank') {
                    scheme = 'about';
                    return;
                }
                path = url;
            }

            if (path) {
                // First cut the query params.
                var path = path;
                var indexOfQuery = path.indexOf('?');
                if (indexOfQuery !== -1) {
                    queryParams = path.substring(indexOfQuery + 1)
                    path = path.substring(0, indexOfQuery);
                }

                // Then take last path component.
                var lastSlashIndex = path.lastIndexOf('/');
                if (lastSlashIndex !== -1) {
                    folderPathComponents = path.substring(0, lastSlashIndex);
                    lastPathComponent = path.substring(lastSlashIndex + 1);
                } else {
                    lastPathComponent = path;
                }
            }

            if (lastPathComponent) {
                result = lastPathComponent;
            } else {
                if (url.indexOf('?') !== -1) {
                    result = '?' + queryParams;
                } else {
                    result = host;
                }
            }

            return {
                name: result.length > 30 ? result.substr(0, 29) + '...' : result,
                host: host
            };
        }
    };
});
