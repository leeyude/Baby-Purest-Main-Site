Session.setDefault("setSigninNav", true);
Template.navMenu.events({
  "click #signup": function(event, template){
    Session.set("setSigninNav", false);
  },
});



if (Meteor.isClient) {

  Router.route('/', function () {
    this.render('homepage');
  });

  Router.route('/howItWorks', function () {
    this.render('howItWorks');
  });

  Router.route('/weeklyMenu', function () {
    this.render('weeklyMenu');
  });

  Router.route('/pricing', function () {
    this.render('pricing');
  });

  Router.route('/login', function () {
    this.render('login');
  });

  Router.route('/signup', function () {
    this.render('signup');
  });

}
