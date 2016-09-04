
function homeController(homeService) {
  var self = this;
  this.user = {name: 'world'};
  this.$postLink = function () {
    console.log('postlink');
    console.log(this.count);
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
  templateUrl: '/app/components/homeComponent/homeView.html',
  controller: ["$http", "homeService", homeController],
});
