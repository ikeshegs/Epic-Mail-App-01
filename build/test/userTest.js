"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../src/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-undef */
_chai.default.use(_chaiHttp.default);

var expect = _chai.default.expect; // eslint-disable-next-line no-undef

describe("/All User Endpoint Tests", function () {
  // eslint-disable-next-line no-undef
  it("Create a new user on /api/v2/auth/signup POST", function (done) {
    var User = {
      id: 1,
      email: 'meee@epic.com',
      firstname: 'Ikechukwu',
      lastname: 'Okoro',
      password: 'C00ljoe.',
      phone: '08138891291'
    };

    _chai.default.request(_index.default).post('/api/v2/auth/signup').send(User).end(function (err, res) {
      expect(res.body).to.haveOwnProperty('status');
      expect(res.status).to.equal(201);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.all.keys('status', 'data');
      expect(res.body).to.haveOwnProperty('status').that.equals(201);
      expect(res.body).to.haveOwnProperty('data').that.is.an('array');
      expect(res.body.data).to.be.an('array');
      expect(User).to.have.property('email');
      expect(User).to.have.property('firstname');
      expect(User).to.have.property('lastname');
      expect(User).to.have.property('password');
      expect(User).to.have.property('phone');
      expect(res.body);
      done();
    });
  });
  it("Login a user on /api/v2/auth/login POST", function (done) {
    var User = {
      email: 'meee@epic.com',
      password: 'C00ljoe.'
    };

    _chai.default.request(_index.default).post('/api/v2/auth/login').send(User).end(function (err, res) {
      expect(res.body).to.haveOwnProperty('status');
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.all.keys('status', 'data');
      expect(res.body).to.haveOwnProperty('status').that.equals(200);
      expect(res.body).to.haveOwnProperty('data').that.is.an('array');
      expect(res.body.data).to.be.an('array');
      expect(User).to.have.property('email');
      expect(User).to.have.property('password');
      expect(res.body);
      done();
    });
  });
});