
function homeController(homeService) {
  var self = this;
  this.user = {name: 'world'};
  this.$postLink = function () {
    console.log('postlink');
  };
  this.$onInit = function() {
    //var homeService = app.injector.get('homeService');
    this.user.name = "Dmitry";
  };

  this.dataInput = "Test";

}
app.component('homeComponent', {
  bindings: {
    count:"<"
  },
  templateUrl: '/app/views/homeView.html',
  controller: ["$http", "homeService", homeController]
});
