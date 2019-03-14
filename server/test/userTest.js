import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';

chai.use(chaiHttp);
const expect = chai.expect;

describe(`/All User Endpoint Tests`, () => {
  it(`Create a new user on /api/v1/auth/signup POST`, done => {
    let User = {
      id: 1,
      email: 'meee@epic.com',
      firstname: 'Ikechukwu',
      lastname: 'Okoro',
      password: 'C00ljoe.',
      phone: '08138891291'
    }
    chai
      .request(app)
      .post('/api/v1/auth/signup')
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

});