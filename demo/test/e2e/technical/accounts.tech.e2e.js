/*jshint node:true */
'use strict';
var pagesPath = '../pages';
var LoginPage = require(pagesPath + '/login-page.js');
var AccountsPage = require(pagesPath + '/accounts-page.js');

describe('E2E: Testing accounts view', function () {

    beforeAll(function () {
        browser.setLocation('login');
    });

    it('should display the accounts view', function () {
        new LoginPage()
            .login('AUMMYAPP', 'CWK1111M')
            .then(function () {
                browser.getCurrentUrl()
                    .then(function (url) {
                        expect(url).toContain('accounts');
                    });
            });
    });

    it('should search and return a single account', function () {
        new AccountsPage()
            .searchItem('Account 1')
            .then(function() {
                element.all(by.repeater('account in accounts')).then(function (accounts) {
                    accounts[0].getInnerHtml().then(function (html) {
                        expect(html).toContain('Account 1');
                    });
                });
            });
    });

});
