const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = require('chai').assert

const server = require('../server')
chai.use(chaiHttp)

describe('Testing functions', () =>  {
	it('Get all closed all closed Issues', (done) =>  {
		chai.request(server)
			.get('/issues/All')
			.query({ project:'FCC', filter:'on' })
			.end((err, res) => {
				assert.equal(res.status, 200)
				done()
			})
	})

it('Add issue to databse', (done) =>  {
	let data = {
		project: 'FCC',
		title: 'We are testing',
		description: 'Test has no description',
		creator: 'Teddy Wells',
		assignee: 'Brian Smith',
		open: true,
		status: 'In-progress'
	}
	chai.request(server)
		.post('/new/FCC')
		.set('content-type', 'application/x-www-form-urlencoded')
		.send(data)
		.end((err, res) => {
			assert.equal(res.status, 200)
			done()
		})
})

	it('Edit issue in database', (done) =>  {
	  //data should be duplicate database data.
	  	let data = {
			project: 'FCC',
			title: 'We are testing' ,
			description: 'Test has no description',
			creator: 'Teddy Wells',
			assignee: 'Brian Smith',
			open: true,
			status: 'In-progress'
		}
		let id = '5b548e9bb7c7ba13da282f21' //Insert real DB id here
		chai.request(server)
			.put('/edit/FCC/'+ id)
			.send(data)
			.end((err, res) => {
				assert.equal(res.status, 200)
				assert.equal(res.text, 'There are no fields to update.')
				done()
			})
	})

	it('Edit issue in database', (done) =>  {
		  let randomNumber = Math.random()
	  	let data = {
			project: 'FCC',
			title: 'We are testing' + randomNumber ,
			description: 'Test has no description',
			creator: 'Teddy Wells',
			assignee: 'Brian Smith',
			open: true,
			status: 'In-progress'
		}
		let id = '5b548e8dbd6bb713d6cc3310' //Insert real DB id here
		chai.request(server)
			.put('/edit/FCC/'+ id)
			.send(data)
			.end((err, res) => {
				assert.equal(res.status, 200)
				assert.equal(res.text, 'Issue ' + id + ' was successfully updated.')
				done()
			})
	})

	it('Issue should not be deleted', (done) =>  {
		let id = '5b548e6562ad2813d18679d5'
		chai.request(server)
			.delete('/issues/FCC/'+ id)
			.end((err, res) => {
				assert.equal(res.text, 'Could not find issue indatabse.')
				done()
			})
	})



})
