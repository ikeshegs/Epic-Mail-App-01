import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
const expect = chai.expect;

describe(`/All Message Endpoint Tests`, () => {
  it(`Create a new Message on /api/v1/createmsg POST`, done => {
    let newMsg = {
      id: 1,
      createdOn: new Date(),
      subject: 'bootcamp',
      message: 'jhgokaj iuaqbjdv rhapuihv dvuboa sbdvui o',
      email: 'ikeshegs@epic.com',
      parentMessengerId: 2,
      status: 'sent.'
    }
    
    chai
      .request(app)
      .post('/api/v1/createmsg')
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
});