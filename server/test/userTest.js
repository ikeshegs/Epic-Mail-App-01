/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';

chai.use(chaiHttp);
const { expect } = chai;

// eslint-disable-next-line no-undef
describe(`/All User Endpoint Tests`, () => {
  // eslint-disable-next-line no-undef
  it(`Create a new user on /api/v2/auth/signup POST`, done => {
    const User = {
      id: 1,
      email: 'meee@epic.com',
      firstname: 'Ikechukwu',
      lastname: 'Okoro',
      password: 'C00ljoe.',
      phone: '08138891291'
    };
    chai
      .request(app)
      .post('/api/v2/auth/signup')
      .send(User)
      .end((err, res) => {
        expect(res.body).to.haveOwnProperty('status');
        expect(res.status).to.equal(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.all.keys('status', 'data');
        expect(res.body)
          .to.haveOwnProperty('status')
          .that.equals(201);
        expect(res.body)
          .to.haveOwnProperty('data')
          .that.is.an('array');
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

  it(`Login a user on /api/v2/auth/login POST`, done => {
    const User = {
      email: 'meee@epic.com',
      password: 'C00ljoe.'
    };
    chai
      .request(app)
      .post('/api/v2/auth/login')
      .send(User)
      .end((err, res) => {
        expect(res.body).to.haveOwnProperty('status');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.all.keys('status', 'data');
        expect(res.body)
          .to.haveOwnProperty('status')
          .that.equals(200);
        expect(res.body)
          .to.haveOwnProperty('data')
          .that.is.an('array');
        expect(res.body.data).to.be.an('array');
        expect(User).to.have.property('email');
        expect(User).to.have.property('password');
        expect(res.body);
        done();
      });
  });
});
