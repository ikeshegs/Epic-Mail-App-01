import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
const expect = chai.expect;

describe(`/All User Endpoint Tests`, () => {
  it(`Create a new user on /api/v1/createuser POST`, done => {
    let User = {
      email: "ikeshegs@epic.com",
      firstname: "Ikechukwu",
      lastname: "Okoro",
      password: "C00ljoe.",
      phone: "08138891291"
    }
    chai
      .request(app)
      .post('/api/v1/createuser')
      .send(User)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(User).to.have.property('email');
        expect(User).to.have.property('firstname');
        expect(User).to.have.property('lastname');
        expect(User).to.have.property('phone');
        done();
      });
  });

  it(`It should fetch all the USERS /api/v1/allusers GET`, done => {
    chai
      .request(app)
      .get('/api/v1/allusers')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        done(err);
      });
  });
});