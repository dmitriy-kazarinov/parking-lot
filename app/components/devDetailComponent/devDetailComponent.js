function devDetailController() {
  this.delete = function() {
    this.onDelete({hero: this.dev});
  };
  this.update = function(prop, value) {
    this.onUpdate({hero: this.dev, prop: prop, value: value});
  };
}
app.component('devDetail', {
  templateUrl: '/app/components/devDetailComponent/devDetailView.html',
  controller: [devDetailController],
  bindings: {
    dev: '<',
    onDelete: '&',
    onUpdate: '&'
  }
});
