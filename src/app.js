(function(){
	'use strict';

	var express = require('express');
	var app = express();
	var blogs = require('./mocks/blogs.json');
	var team =require('./mocks/team.json');
	var pug = require('pug');

	var convert = require('./helpers/convert.js');

	var pageTitle;

	var blogList = convert.objToArray(blogs);
	var teamList = convert.objToArray(team);

	// static server
	app.use('/static', express.static(__dirname + '/public'));

	// configuration
	app.set('view engine', 'pug');
	app.set('views', __dirname + '/views');

	// routing
	app.get('/', function(req, res) {
		res.locals.isActive = true;
		res.render('index', {pageTitle: 'Home', url: req.url});
	});
	app.get('/about', function(req, res) {
		res.render('about', {pageTitle: 'About', url: req.url});
	});
	app.get('/team/:name?', function(req, res) {
		var teammate = team[req.params.name] || {};
		res.locals.url = req.url;

		if(req.query.raw) {
			res.json(teamList);
			return;
		}

		if (Object.keys(teammate).length === 0) {
			res.locals.teamList = teamList;
			res.locals.pageTitle = 'Team';
			res.render('team');
		} else {
			res.locals.teammate = teammate;
			res.locals.pageTitle = teammate.name;
			res.render('team_details');			
		}
		
	});
	app.get('/blogs/:title?', function(req, res) {
		var blog = blogs[req.params.title] || {};
		res.locals.url = req.url;

		if (req.query.raw) {
			res.json(blogList);
			return;
		}

		if (Object.keys(blog).length === 0) {
			res.locals.pageTitle = 'Blogs';
			res.locals.blogList = blogList;
			res.render('blogs');
		} else {
			res.locals.pageTitle = '/blogs';
			res.locals.blog = blog;
			res.render('blog_post', {
				pageTitle: blog.title, 
				blog: blog, 
				url: '/blogs'}
			);
		}
	});
	app.listen(3000, function() {
		console.log('Front end server running on port 3000');
	});
}());