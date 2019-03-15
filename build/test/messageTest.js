"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../src/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai.default.use(_chaiHttp.default);

var expect = _chai.default.expect;
describe("/All Message Endpoint Tests", function () {
  it("Create a new Message on /api/v1/messages POST", function (done) {
    var newMsg = {
      id: 1,
      createdOn: new Date(),
      subject: 'bootcamp',
      message: 'jhgokaj iuaqbjdv rhapuihv dvuboa sbdvui o',
      email: 'ikeshegs@epic.com',
      parentMessengerId: 2,
      status: 'sent.'
    };

    _chai.default.request(_index.default).post('/api/v1/messages').send(newMsg).end(function (err, res) {
      expect(res).to.have.status(201);
      expect(newMsg).to.have.property('id');
      expect(newMsg).to.have.property('createdOn');
      expect(newMsg).to.have.property('subject');
      expect(newMsg).to.have.property('message');
      expect(newMsg).to.have.property('email');
      expect(newMsg).to.have.property('parentMessengerId');
      expect(newMsg).to.have.property('status');
      done();
    });
  });
  it('Filter all received messages on api/v1/messages GET', function (done) {
    _chai.default.request(_index.default).get('/api/v1/messages').end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.an('object');
      done(err);
    });
  });
  it('Filter all sent messages on api/v1/messages/sent GET', function (done) {
    _chai.default.request(_index.default).get('/api/v1/messages/sent').end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.an('object');
      done(err);
    });
  });
  it('Filter all unread messages on api/v1/messages/unread GET', function (done) {
    _chai.default.request(_index.default).get('/api/v1/messages/unread').end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.an('object');
      done(err);
    });
  });
  it('Get a specific email on api/v1/messages/:id GET', function (done) {
    _chai.default.request(_index.default).get('/api/v1/messages/2').end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.an('object');
      done(err);
    });
  });
  it('Delete email from inbox on api/v1/messages/:id GET', function (done) {
    _chai.default.request(_index.default).delete('/api/v1/messages/2').end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.an('object');
      done(err);
    });
  });
});