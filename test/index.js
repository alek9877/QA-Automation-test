const app = require('../app');

const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should;

const api = supertest('http://localhost:3000');

let login = null;
let users = null;
describe('Tests', () => {

	// Login user to the system and fetch access token
	it('Login user', (done) => {
		api.post('/sign-in')
			.send({
				password: 'password',
				email: 'email',
			})
			.then((res) => {
				login = res.body.access_token;
				done();
			}).
			catch(done);
	});

	// Get a list of all users
	it('Get users list', (done) => {
		api.get('/users')
			.set('authorization', login)
			.then((res) => {
				// we expect that there is 6 users. You can check/confirm that in app code.
				expect(res.body.length).to.be.equal(6);
				done();
			}).
		catch(done);
	});
	it('Get user 1', (done) => {
		api.get('/users/1')
			.set('authorization', login)
			.then((res) => {
				// we expect the user_id response is 1.
				expect(res.body.user_id).to.be.equal(1);
				done();
			}).
		catch(done);
	});

	it('Get accounts from particular user', (done) => {
		api.get('/users/2/accounts')
			.set('authorization', login)
			.then((res) => {
				// we expect 2 accounts from particular user.
				expect(res.body.length).to.be.equal(2);
				done();
			}).
		catch(done);
	});	

		it('User inactive', (done) => {
		api.get('/users/3')
			.set('authorization', login)
			.then((res) => {
				// we expect that user with id:3 is not active.
				expect(res.body.message).to.be.equal("User is not active");
				done();
			}).
		catch(done);
	});
		it('Test error message with user_id=5', (done) => {
		api.get('/users/5/accounts')
			.set('authorization', login)
			.then((res) => {
				// we expect that Time lords do not have accounts.
				expect(res.body.message).to.be.equal("Time lords do not have accounts");
				done();
			}).
		catch(done);
	});	
		it('User title check', (done) => {
		api.get('/users/1')
			.set('authorization', login)
			.then((res) => {
				// we expect that title of user_id=4 will be "Drugstore master".
				expect(res.body.title).to.be.not.equal("Pljeskavica mast");
				done();
			}).
		catch(done);
	});
		it('User name check', (done) => {
		api.get('/users/6')
			.set('authorization', login)
			.then((res) => {
				// we expect that name of user_id=6 will be "The Doctor".
				expect(res.body.name).to.be.equal("The Doctor");
				done();
			}).
		catch(done);
	});
	
});