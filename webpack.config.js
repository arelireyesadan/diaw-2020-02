const path = require('path')
const EsLintPlugin = require("eslint-webpack-plugin")

module.exports = {
    // 1. Especificar archivo de entrada que va a tomar webpack para el frontend
    // Especificando el archivo index en la entrada
    entry: path.join(__dirname, './src/index.js'),
    // 2. Especificar el archivo de salida
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    // 3. Folder donde servira
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        // Cambiar el puerto 8080 en caso de que lo tenga ocupado
        port: 9080,
        // va a comprimir lo que necesito
        compress: true,
        // directorio de distribucion (lo hará desde la raiz)
        publicPath: '/'
    },
    //4. le diremos que vamos a utilizar un nuevo modulo (babel)
    module: {
        rules: [
            //Regla que va a permitir entender a babel
            // JS se lo va a pasar a babel y babel lo escribira de forma moderna
            // Todos los archivos JS ahora serán babel
            {
                test: /\.(js)$/,
                // queremos que solo busque en la carpeta src
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                // decirle el termino de los archivos
                test: /\.css$/,
                // Los loaders se ejecutan en el orden en que los acomodamos
                // primero se ejecuta css-loader
                // css-loader: lee todos los archivos CSS y los regresa en un string
                // style-loader: modulo que inyecta los css al documento en una etiqueta style
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
        ]
    },
    // 5. le pondremos un plugin para utilizar eslint
    plugins: [new EsLintPlugin()]
}