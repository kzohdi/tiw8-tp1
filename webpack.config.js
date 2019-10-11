module.exports = {
    entry: "./client/src/index.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}