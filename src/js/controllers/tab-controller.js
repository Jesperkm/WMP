var tabs = angular.module('tabController', []);

tabs.controller('tabsController', function() {
    
    this.tab = 1;
   
    this.setTab = function(selectTab) {
        this.tab = selectTab;
    };

    this.isSelected = function(checkTab) {
        return this.tab === checkTab;
    };
});