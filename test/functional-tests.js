const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = require('chai').assert
const server = require('../server')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

chai.use(chaiHttp)

describe('Intergration Testing', () =>  {

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

	// it('should not edit existing issue when there is no data change', (done) =>  {
	// 	// This should be one-for-one Db data
	// 	let data = {
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
	// 			assert.equal(res.text, 'There are no fields to update.')
	// 			done()
	// 		})
	// })

	// it('should not edit if body is empty', (done) =>  {
	// 	let id = '5b66e0d1486b6a30d0c437ed' //Insert real DB id here
	// 	chai.request(server)
	// 		.put('/edit/FCC/'+ id)
	// 		.send({})
	// 		.end((err, res) => {
	// 			assert.equal(res.status, 200)
	// 			assert.equal(res.text, 'Missing request body.')
	// 			done()
	// 		})
	// })

	// it('should get issue with no filters added', (done)  =>  {
	// 	chai.request(server)
	// 		.get('/issues/')
	// 		.query({})
	// 		.end((err, res) => {
	// 			const dom = new JSDOM(res.text)
	// 			let output = dom.window.document.body.querySelector('.display-issue').textContent
	// 			assert.equal(res.status, 200)
	// 			assert.isAtLeast(output.length, 90, 'output is greater or equal to 90')
	//
	// 			done()
	// 		})
	// })

// it('should get issue with one filter', (done)  =>  {
// 	chai.request(server)
// 		.get('/issues/')
// 		.query({ project: 'FCC' })
// 		.end((err, res) => {
// 			const dom = new JSDOM(res.text)
// 			let output = dom.window.document.body.querySelector('.display-issue').textContent
// 			console.log(output)
// 			assert.equal(res.status, 200)
// 			assert.isAtLeast(output.length, 90, 'output is greater or equal to 90')
//
// 			done()
// 		})
// })

	it('should get issue with multiple filters', (done)  =>  {
		chai.request(server)
			.get('/issues/FCC')
			.query({ project: 'FCC', filter : 'on' })
			.end((err, res) => {
				const dom = new JSDOM(res.text)
				let output = dom.window.document.body.querySelector('.display-issue').textContent
				assert.equal(res.status, 200)
				assert.isAtLeast(output.length, 90, 'output is greater or equal to 90')
				done()
			})
	})


})
