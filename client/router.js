Router.configure({
  layoutTemplate: 'layout'
});

Router.route(function () {
  this.render('/', {path: '/'});
  this.render('/counter', {path: '/counter'});
});