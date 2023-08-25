import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/auth/sign', 'AuthController')
}).prefix('/api')
