const path = require('path')

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
    }
}