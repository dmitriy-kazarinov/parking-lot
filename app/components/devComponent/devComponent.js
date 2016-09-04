function devController() {
  // TODO by $http
  this.list = [
    {
      name: 'Superman',
      location: ''
    },
    {
      name: 'Batman',
      location: 'Wayne Manor'
    }
  ];
  this.updateDev = function(dev, prop, value) {
    dev[prop] = value;
  };
  this.deleteDev = function(dev) {
    var idx = this.list.indexOf(dev);
    if (idx >= 0) {
      this.list.splice(idx, 1);
    }
  };
}
app.component('devComponent', {
  templateUrl: '/app/components/devComponent/devView.html',
  controller: [devController]
});
