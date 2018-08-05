const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = require('chai').assert
const server = require('../server')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

chai.use(chaiHttp)

describe('Testing functions', () =>  {
	// after(() => {
// 	process.exit()
// })

	// it('should create issue with all fields', (done)  =>  {
	// 	let data = {
	// 		project: 'FCC',
	// 		title: 'The button does not work',
	// 		description: 'Nothing happens when I click the button',
	// 		creator: 'Teddy Wells',
	// 		assignee: 'Brian Smith',
	// 		open: true,
	// 		status: 'In-progress'
	// 	}
	// 	chai.request(server)
	// 		.post('/new/FCC')
	// 		.set('content-type', 'application/x-www-form-urlencoded')
	// 		.send(data)
	// 		.end((err, res) => {
	// 			assert.equal(res.status, 200)
	// 			done()
	// 		})
	// })

	// it('should create issue with only mandatory fields', (done)  =>  {
	// 	let data = {
	// 		project: 'FCC',
	// 		title: 'Missing text from intructions',
	// 		description: 'There is no instruction on the carsharing section',
	// 		creator: 'Brian Smith',
	// 		assignee: null,
	// 		open: null,
	// 		status: null
	// 	}
	// 	chai.request(server)
	// 		.post('/new/FCC')
	// 		.set('content-type', 'application/x-www-form-urlencoded')
	// 		.send(data)
	// 		.end((err, res) => {
	// 			assert.equal(res.status, 200)
	// 			done()
	// 		})
	// })

	// it('should not create issue with only mandatory fields', (done)  =>  {
	// 	let data = {
	// 		project: 'FCC',
	// 		title: null,
	// 		description: null,
	// 		creator: null,
	// 		assignee: 'Brian Smith',
	// 		open: true,
	// 		status: 'In-progress'
	// 	}
	// 	chai.request(server)
	// 		.post('/new/FCC')
	// 		.set('content-type', 'application/x-www-form-urlencoded')
	// 		.send(data)
	// 		.end((err, res) => {
	// 			assert.equal(res.status, 200)
	// 			assert.equal(res.text, 'These fields cannot be empty.')
	// 			done()
	// 		})
	// })

// it('should edit issue when one field is changed', (done) =>  {
// 	// change one field
//   	let data = {
// 		project: 'FCC',
// 		title: 'We are testing and issue' ,
// 		description: 'Test has no description',
// 		creator: 'Teddy Wells',
// 		assignee: 'Brian Smith',
// 		open: true,
// 		status: 'In-progress'
// 	}
// 	let id = '5b66e0fa69a96330d435f604' //Insert real DB id here
// 	chai.request(server)
// 		.put('/edit/FCC/'+ id)
// 		.send(data)
// 		.end((err, res) => {
// 			assert.equal(res.status, 200)
// 			assert.equal(res.text, 'Issue ' + id + ' was successfully updated.')
// 			done()
// 		})
// })

	it('should not edit existing issue when there is no data change', (done) =>  {
		// This should be one-for-one Db data
		let data = {
			project: 'FCC',
			title: 'We are testing and issue' ,
			description: 'Test has no description',
			creator: 'Teddy Wells',
			assignee: 'Brian Smith',
			open: true,
			status: 'In-progress'
		}
		let id = '5b66e0fa69a96330d435f604' //Insert real DB id here
		chai.request(server)
			.put('/edit/FCC/'+ id)
			.send(data)
			.end((err, res) => {
				assert.equal(res.status, 200)
				assert.equal(res.text, 'There are no fields to update.')
				done()
			})
	})

	it('should not edit if body is empty', (done) =>  {
		let data = {}
		let id = '5b66e0d1486b6a30d0c437ed' //Insert real DB id here
		chai.request(server)
			.put('/edit/FCC/'+ id)
			.send(data)
			.end((err, res) => {
				assert.equal(res.status, 200)
				assert.equal(res.text, 'Missing request body.')
				done()
			})
	})

	// it('Add issue to databse', (done) =>  {
	// 	let data = {
	// 		project: 'FCC',
	// 		title: 'We are testing',
	// 		description: 'Test has no description',
	// 		creator: 'Teddy Wells',
	// 		assignee: 'Brian Smith',
	// 		open: true,
	// 		status: 'In-progress'
	// 	}
	// 	chai.request(server)
	// 		.post('/new/FCC')
	// 		.set('content-type', 'application/x-www-form-urlencoded')
	// 		.send(data)
	// 		.end((err, res) => {
	// 			assert.equal(res.status, 200)
	// 			done()
	// 		})
	// })

	// it('Edit issue in database', (done) =>  {
	// 	  let randomNumber = Math.random()
	//   	let data = {
	// 		project: 'FCC',
	// 		title: 'We are testing' + randomNumber ,
	// 		description: 'Test has no description',
	// 		creator: 'Teddy Wells',
	// 		assignee: 'Brian Smith',
	// 		open: true,
	// 		status: 'In-progress'
	// 	}
	// 	let id = '5b548e8dbd6bb713d6cc3310' //Insert real DB id here
	// 	chai.request(server)
	// 		.put('/edit/FCC/'+ id)
	// 		.send(data)
	// 		.end((err, res) => {
	// 			assert.equal(res.status, 200)
	// 			assert.equal(res.text, 'Issue ' + id + ' was successfully updated.')
	// 			done()
	// 		})
	// })

	// it('Issue should not be deleted', (done) =>  {
	// 	let id = '5b548e6562ad2813d18679d5'
	// 	chai.request(server)
	// 		.delete('/issues/FCC/'+ id)
	// 		.end((err, res) => {
	// 			assert.equal(res.text, 'Could not find issue indatabse.')
	// 			done()
	// 		})
	// })
	//


})
