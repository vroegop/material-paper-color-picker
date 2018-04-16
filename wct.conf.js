module.exports = {
    "verbose": false,
    "plugins": {
        "sauce": {
            "disabled": true,
            "browsers": [
                {
                    "browserName": "microsoftedge",
                    "platform": "Windows 10",
                    "version": "15"
                },
                {
                    "browserName": "chrome",
                    "platform": "Windows 10",
                    "version": "49"
                },
                {
                    "browserName": "firefox",
                    "platform": "Windows 10",
                    "version": "50"
                }
            ]
        },
        istanbub: {
            disabled: false,
            dir: './coverage',
            reporters: ['text-summary', 'lcov'],
            include: [
                '**/*.html'
            ],
            exclude: [
                '/test/**',
                '/bower_components/**',
                '/node_modules/**',
                '/coverage/**',
                '/demo/**',
                '/index.html'
            ]

        }
    }
}
