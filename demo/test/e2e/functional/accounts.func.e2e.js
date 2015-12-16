/*jshint node:true */
/*globals expect:true */

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var pagesPath = '../pages';
var LoginPage = require(pagesPath + '/login-page.js');
var AccountsPage = require(pagesPath + '/accounts-page.js');
var CommonPage = require(pagesPath + '/common-page.js');

module.exports = function () {

    'use strict';

    this.Given(/^I am on the login page$/, function (callback) {
        new LoginPage()
            .get()
            .then(function() {
                callback();
            });
    });

    this.When(/^I login$/, function (callback) {
        new LoginPage()
            .login('AUMMYAPP', 'CWK1111M')
            .then(function () {
                callback();
            });
    });

    this.Then(/^I should be on the accounts page$/, function (callback) {
        browser.getCurrentUrl().then(function (res) {
            expect(res).to.contain('account');
            callback();
        });
    });

    this.When(/^I search an account name: (.*)$/, function (search, callback) {
        new AccountsPage()
            .searchItem(search)
            .then(function() {
                callback();
            });
    });

    this.Then(/^one row shows in the table with the name: (.*)$/, function (name, callback) {
        element.all(by.repeater('account in accounts')).then(function (items) {
            items[0].getInnerHtml().then(function (html) {
                expect(html).to.include(name);
                callback();
            });
        });
    });

};
