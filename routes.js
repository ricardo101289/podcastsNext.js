const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()
// routes.add('index')
// routes.add('usados', '/usados/-/:autos/-/:marca')
// // routes.add('usados', '/usados/-/autos/:marca/:modelo')
// // routes.add('blog/detail', '/:language/blog/:slug')
// // routes.add('index', '/')
const APP_ROUTES = [
    {
      page: 'index',
      pattern: '/'
    }, {
      page: 'usados',
      pattern: '/usados/-/:autos/-/:marca',
      shallow: true,
    },
    {
        page: 'usados',
        pattern: '/usados/-/:autos/-/:marca/:modelo',
        shallow: true,
      }
  ]
  APP_ROUTES.forEach(route => routes.add(route))