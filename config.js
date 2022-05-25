module.exports = {
    source: ['tokens/**/*.json'],
    platforms: {
        scss: {
            transformGroup: 'scss',
            prefix: 'X',
            buildPath: 'src/styles/',
            files: [
                {
                    destination: 'map.scss',
                    format: 'scss/map-deep',
                    mapName: 'my-tokens',
                },
            ],
        },
    },
    transform: {
        type: 'fontSizes',
        transformer: (token) => {
            console.log('tok', token)
            return token.path
        },
    },
    format: {
        myFormat: ({ dictionary, platform }) => {
            return dictionary.allTokens
                .map((token) => `${token.name}:312312312312 ${token.value}`)
                .join('+++++')
        },
    },
}
