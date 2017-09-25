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
	it('Check user with id:1 for "user_id"', (done) => {
		api.get('/users/1')
			.set('authorization', login)
			.then((res) => {
				// we expect that user_id of user will be 1.
				expect(res.body.user_id).to.be.equal(1);
				done();
			}).
		catch(done);
	});
	it('Check user with id:1 for "name"', (done) => {
		api.get('/users/1')
			.set('authorization', login)
			.then((res) => {
				// we expect that name of user will be "User The One" .
				expect(res.body.name).to.be.equal("User The One");
				done();
			}).
		catch(done);
	});
	it('Check user with id:1 for "title"', (done) => {
		api.get('/users/1')
			.set('authorization', login)
			.then((res) => {
				// we expect that title of user will be "Pljeskavica master" .
				expect(res.body.title).to.be.equal("Pljeskavica master");
				done();
			}).
		catch(done);
	});
	it('Check user with id:1 for "active"', (done) => {
		api.get('/users/1')
			.set('authorization', login)
			.then((res) => {
				// we expect that active of user will be true .
				expect(res.body.active).to.be.true;
				done();
			}).
		catch(done);
	});


	it('Check user with id:2 for "user_id"', (done) => {
		api.get('/users/2')
			.set('authorization', login)
			.then((res) => {
				// we expect that user_id of user will be 2.
				expect(res.body.user_id).to.be.equal(2);
				done();
			}).
		catch(done);
	});
	it('Check user with id:2 for "name"', (done) => {
		api.get('/users/2')
			.set('authorization', login)
			.then((res) => {
				// we expect that name of user will be "User The Two" .
				expect(res.body.name).to.be.equal("User The Two");
				done();
			}).
		catch(done);
	});
	it('Check user with id:2 for "title"', (done) => {
		api.get('/users/2')
			.set('authorization', login)
			.then((res) => {
				// we expect that title of user will be "Rakija master" .
				expect(res.body.title).to.be.equal("Rakija master");
				done();
			}).
		catch(done);
	});
	it('Check user with id:2 for "active"', (done) => {
		api.get('/users/2')
			.set('authorization', login)
			.then((res) => {
				// we expect that active of user will be true .
				expect(res.body.active).to.be.true;
				done();
			}).
		catch(done);
	});


	it('Check user with id:3 for "user_id"', (done) => {
		api.get('/users/3')
			.set('authorization', login)
			.then((res) => {
				// we expect that user_id of user will be undefined.
				expect(res.body.user_id).to.equal(undefined);
				done();
			}).
		catch(done);
	});

	it('Check user with id:3 for "name"', (done) => {
		api.get('/users/3')
			.set('authorization', login)
			.then((res) => {
				// we expect that name of user will be undefined .
				expect(res.body.name).to.be.equal(undefined);
				done();
			}).
		catch(done);
	});
	it('Check user with id:3 for "title"', (done) => {
		api.get('/users/3')
			.set('authorization', login)
			.then((res) => {
				// we expect that title of user will be undefined .
				expect(res.body.title).to.be.equal(undefined);
				done();
			}).
		catch(done);
	});
	it('Check user with id:3 for "active"', (done) => {
		api.get('/users/3')
			.set('authorization', login)
			.then((res) => {
				// we expect that active of user will be undefined .
				expect(res.body.active).to.be.equal(undefined);
				done();
			}).
		catch(done);
	});


	it('Check user with id:4 for "user_id"', (done) => {
		api.get('/users/4')
			.set('authorization', login)
			.then((res) => {
				// we expect that user_id of user will be undefined.
				expect(res.body.user_id).to.equal(undefined);
				done();
			}).
		catch(done);
	});

	it('Check user with id:4 for "name"', (done) => {
		api.get('/users/4')
			.set('authorization', login)
			.then((res) => {
				// we expect that name of user will be undefined .
				expect(res.body.name).to.be.equal(undefined);
				done();
			}).
		catch(done);
	});
	it('Check user with id:4 for "title"', (done) => {
		api.get('/users/4')
			.set('authorization', login)
			.then((res) => {
				// we expect that title of user will be undefined .
				expect(res.body.title).to.be.equal(undefined);
				done();
			}).
		catch(done);
	});
	it('Check user with id:4 for "active"', (done) => {
		api.get('/users/4')
			.set('authorization', login)
			.then((res) => {
				// we expect that active of user will be undefined .
				expect(res.body.active).to.be.equal(undefined);
				done();
			}).
		catch(done);
	});

	it('Check user with id:5 for "user_id"', (done) => {
		api.get('/users/5')
			.set('authorization', login)
			.then((res) => {
				// we expect that user_id of user will be 5.
				expect(res.body.user_id).to.be.equal(5);
				done();
			}).
		catch(done);
	});
	it('Check user with id:5 for "name"', (done) => {
		api.get('/users/5')
			.set('authorization', login)
			.then((res) => {
				// we expect that name of user will be "The Master" .
				expect(res.body.name).to.be.equal("The Master");
				done();
			}).
		catch(done);
	});
	it('Check user with id:5 for "title"', (done) => {
		api.get('/users/5')
			.set('authorization', login)
			.then((res) => {
				// we expect that title of user will be "Evil timelord" .
				expect(res.body.title).to.be.equal("Evil timelord");
				done();
			}).
		catch(done);
	});
	it('Check user with id:5 for "active"', (done) => {
		api.get('/users/5')
			.set('authorization', login)
			.then((res) => {
				// we expect that active of user will be true .
				expect(res.body.active).to.be.true;
				done();
			}).
		catch(done);
	});


	it('Check user with id:6 for "user_id"', (done) => {
		api.get('/users/6')
			.set('authorization', login)
			.then((res) => {
				// we expect that user_id of user will be 5.
				expect(res.body.user_id).to.be.equal(6);
				done();
			}).
		catch(done);
	});
	it('Check user with id:6 for "name"', (done) => {
		api.get('/users/6')
			.set('authorization', login)
			.then((res) => {
				// we expect that name of user will be "The Doctor" .
				expect(res.body.name).to.be.equal("The Doctor");
				done();
			}).
		catch(done);
	});
	it('Check user with id:6 for "title"', (done) => {
		api.get('/users/6')
			.set('authorization', login)
			.then((res) => {
				// we expect that title of user will be "Good timelord" .
				expect(res.body.title).to.be.equal("Good timelord");
				done();
			}).
		catch(done);
	});
	it('Check user with id:6 for "active"', (done) => {
		api.get('/users/6')
			.set('authorization', login)
			.then((res) => {
				// we expect that active of user will be true .
				expect(res.body.active).to.be.true;
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

//Accounts 

	it('Check account with id:1 for "account_id"', (done) => {
		api.get('/accounts/1')
			.set('authorization', login)
			.then((res) => {
				// we expect that account_id of account_id=1 will be 1.
				expect(res.body.account_id).to.be.equal(1);
				done();
			}).
		catch(done);
	});
	it('Check account with id:1 for "name"', (done) => {
		api.get('/accounts/1')
			.set('authorization', login)
			.then((res) => {
				// we expect that name of account_id=1 will be "Wife's account".
				expect(res.body.name).to.be.equal("Wife's account");
				done();
			}).
		catch(done);
	});
	it('Check account with id:1 for "active"', (done) => {
		api.get('/accounts/1')
			.set('authorization', login)
			.then((res) => {
				// we expect that active of account_id=1 will be true.
				expect(res.body.active).to.be.true;
				done();
			}).
		catch(done);
	});

	it('Check account with id:1 for "money"', (done) => {
		api.get('/accounts/1')
			.set('authorization', login)
			.then((res) => {
				// we expect that money of account_id=1 will be 100.
				expect(res.body.money).to.be.equal(100);
				done();
			}).
		catch(done);
	});

	it('Check account with id:2 for "account_id"', (done) => {
		api.get('/accounts/2')
			.set('authorization', login)
			.then((res) => {
				// we expect that account_id of account_id=2 will be 2.
				expect(res.body.account_id).to.be.equal(2);
				done();
			}).
		catch(done);
	});

	it('Check account with id:2 for "name"', (done) => {
		api.get('/accounts/2')
			.set('authorization', login)
			.then((res) => {
				// we expect that name of account_id=2 will be "Cat's account".
				expect(res.body.name).to.be.equal("Cat's account");
				done();
			}).
		catch(done);
	});
	it('Check account with id:2 for "active"', (done) => {
		api.get('/accounts/2')
			.set('authorization', login)
			.then((res) => {
				// we expect that active of account_id=1 will be true.
				expect(res.body.active).to.be.true;
				done();
			}).
		catch(done);
	});
	it('Check account with id:2 for "money"', (done) => {
		api.get('/accounts/2')
			.set('authorization', login)
			.then((res) => {
				// we expect that money of account_id=1 will be 150.
				expect(res.body.money).to.be.equal(150);
				done();
			}).
		catch(done);
	});
	it('Check account with id:3 for "account_id"', (done) => {
		api.get('/accounts/3')
			.set('authorization', login)
			.then((res) => {
				// we expect that account_id of account_id=3 will be 3.
				expect(res.body.account_id).to.be.equal(3);
				done();
			}).
		catch(done);
	});
	it('Check account with id:3 for "name"', (done) => {
		api.get('/accounts/3')
			.set('authorization', login)
			.then((res) => {
				// we expect that name of account_id=3 will be "Dog's account".
				expect(res.body.name).to.be.equal("Dog's account");
				done();
			}).
		catch(done);
	});
	it('Check account with id:3 for "active"', (done) => {
		api.get('/accounts/3')
			.set('authorization', login)
			.then((res) => {
				// we expect that active of account_id=1 will be false.
				expect(res.body.active).to.be.false;
				done();
			}).
		catch(done);
	});
	it('Check account with id:3 for "money"', (done) => {
		api.get('/accounts/3')
			.set('authorization', login)
			.then((res) => {
				// we expect that money of account_id=1 will be 100.
				expect(res.body.money).to.be.equal(100);
				done();
			}).
		catch(done);
	});
	it('Check account with id:4', (done) => {
		api.get('/accounts/4')
			.set('authorization', login)
			.then((res) => {
				// we expect that response of account_id=4 will be false.
				expect(res.body).to.be.false;
				done();
			}).
		catch(done);
	});
});