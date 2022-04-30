module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/frontAdminConf' : '/',
	devServer: { port: 10000 }
}