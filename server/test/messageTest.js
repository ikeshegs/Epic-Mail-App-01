import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';

chai.use(chaiHttp);
const expect = chai.expect;

describe(`/All Message Endpoint Tests`, () => {
  it(`Create a new Message on /api/v1/messages POST`, done => {
    let newMsg = {
      id: 1,
      createdOn: new Date(),
      subject: 'bootcamp',
      message: 'jhgokaj iuaqbjdv rhapuihv dvuboa sbdvui o',
      email: 'ikeshegs@epic.com',
      parentMessengerId: 2,
      status: 'sent.'
    };
    chai
      .request(app)
      .post('/api/v1/messages')
      .send(newMsg)
      .end((err, res) => {
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

  it('Filter all received messages on api/v1/messages GET', done => {
    chai
      .request(app)
      .get('/api/v1/messages')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        done(err);
      });
  });

  it('Filter all sent messages on api/v1/messages/sent GET', done => {
    chai
      .request(app)
      .get('/api/v1/messages/sent')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        done(err);
      });
  });

  it('Filter all unread messages on api/v1/messages/unread GET', done => {
    chai
      .request(app)
      .get('/api/v1/messages/unread')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        done(err);
      });
  });

  it('Get a specific email on api/v1/messages/:id GET', done => {
    chai
      .request(app)
      .get('/api/v1/messages/2')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        done(err);
      });
  });

  it('Delete email from inbox on api/v1/messages/:id GET', done => {
    chai
      .request(app)
      .delete('/api/v1/messages/2')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        done(err);
      });
  });
});
