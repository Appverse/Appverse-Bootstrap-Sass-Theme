'use strict';

var AccountsPage = function () {
    var searchInput = element(by.model('searchText'));

    this.searchItem = function (searchText) {
        return searchInput.sendKeys(searchText);
    };

    this.selectButton = function(className) {
        return element(by.css(className)).click();
    };
};

module.exports = AccountsPage;
