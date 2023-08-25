import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/user', 'UsersController')
}).prefix('/api')
