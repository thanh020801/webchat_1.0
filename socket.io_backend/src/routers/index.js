const router = require('express').Router()
const controller = require('../controllers/index.controller.js')
function Routers(app){
	router.post('/register', controller.register)
	router.post('/login', controller.login)
	router.put('/user/:id', controller.updateUser)

	router.put('/addFriend/:idUser', controller.addFriend)
	router.put('/deleteFriend/:idUser/:idFriend', controller.deleteFriend)

	router.post('/newRoom/:user/:roomName', controller.createRoom)
	router.put('/joinRoom/:idFriend/:roomName', controller.addFriendInRoom)
	router.put('/leaveRoom/idUser', controller.outRoom)
	router.delete('/room/:idRoom/:roomAdmin/:idUser', controller.deleteRoom)

	router.post('/message', controller.addMessage)
	router.delete('/message', controller.deleteMessage)

	app.use('/',router)
}
module.exports = Routers