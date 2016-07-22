'use strict';

const router5 = require('router5');
const Router5 = router5.default;
const loggerPlugin = router5.loggerPlugin();
const historyPlugin = require('router5-history').default();

const routes = [
  {name: 'index', path: '/'},
  {name: 'about', path: '/about'},
  {name: 'projects', path: '/projects'},
  {name: 'skills', path: '/skills'},
];

const options = {
  useHash: true,
  hashPrefix: '!',
  defaultRoute: '/',
};

const router = new Router5(routes, options)
  .usePlugin(loggerPlugin)
  .usePlugin(historyPlugin)
  ;

module.exports = router;

// const paths = [
//   '#about',
//   '#projects',
//   '#skills',
// ];
//
// const hideAll = () => {
//   paths.forEach((path) => {
//     $(`${path}`).addClass('hidden');
//   });
// };
//
// const showContent = (path) => {
//   $(`${path}`).removeClass('hidden');
// };
//
// const registerPaths = () => {
//   paths.forEach((path) => {
//     $(`a[href="${path}"]`).on('click', (event) => {
//       event.preventDefault();
//
//       hideAll();
//       showContent(path);
//     });
//   });
// };
//
// $(() => {
//   registerPaths();
// });
// paths.forEach((path) => {
//   $(`a[href="${path}"]`).on('click', () => {
//     $(`${paths}`).addClass('hidden');
//     $(`${path}`).removeClass('hidden');
// });
// });
