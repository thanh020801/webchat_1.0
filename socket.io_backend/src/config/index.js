module.exports = {
	port: process.env.PORT || 5000,
	DB: {
		uri: process.env.MONGOO_URI || 'mongodb+srv://thanh:w1zqVPs5UfWnFJVK@cluster0.ci2u2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
	},
	socket:{
		listUser: [],
		listGroup:[],
	},
	user:{}
}
