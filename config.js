module.exports = {
    source: ['tokens/**/*.json'],
    platforms: {
        scss: {
            transformGroup: 'scss',
            prefix: '',
            buildPath: 'src/styles/',
            files: [
                {
                    destination: '_variables.scss',
                    format: 'scss/variables',
                },
            ],
        },
    },
}
