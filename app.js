var http = require('http');
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require("fs");
var multer = require('multer');
var request = require('request');

//app.use(multer({ dest: '/tmp/'}).array('image'));


var GoogleAuth = require('google-auth-library');


app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//app.use(multer('/tmp').array('image'));

app.get("/home", function(req,res){
	res.render("lander.ejs")
});

app.get("/registration", function(req,res){
	res.render("registration.ejs")
});

app.get("/complete-profile", function(req,res){
	res.render("signup.ejs")
})

app.get("/teacher-signup", function(req,res){
	res.render("teacher_signup.ejs")
});

app.get("/notification", function(req,res){
	res.render("notification.ejs");

});

app.get("/teachers/payment", function(req,res){
	res.render("teacher_payment.ejs")
});

// app.get("/profile", function (req, res) {
// 	var userinfo = {
// 		firstname: "Steph",
// 		lastname: "efg",
// 		dateofbirth: {
// 			month: "December",
// 			year: "1991"
// 		},
// 		gender: "male",
// 		email: "abc@etomon.com",
// 		fieldofstudy: ["Computer Science", "Mathematic", "Music"],
// 		phonenum: "111-111-1111",
// 		photourl: "photo.jpeg",
// 		selfintro: "this is a selfinto",
// 		facebookurl: "fb.com",
// 		linkedinurl: "linkedin",
// 		gmail: "",
// 		personalweb: "",
// 		wechatID: "weeechaaat"
// 	};
// 	var slider = [
// 		{ url: "photo.jpeg", caption: "1" },
// 		{ url: "https://placehold.it/300x300?text=IMAGE", caption: "2" },
// 		{ url: "https://placehold.it/300x300?text=IMAGE", caption: "3" },
// 		{ url: "https://placehold.it/300x300?text=IMAGE", caption: "4" },
// 		{ url: "https://placehold.it/300x300?text=IMAGE", caption: "5" }
// 	]
// 	res.render("profile.ejs", { userinfo, slider });
// });

// app.get("/dashboard", function (req, res) {
// 	var status_color = "#41bc82";
// 	var status_text = "Good";
// 	var notifications = [
// 		{ name: "sarah M", photourl: "http://via.placeholder.com/60x60.jpeg", caption: "Web Designer A", lastviewday: 7 },
// 		{ name: "sarah A", photourl: "http://via.placeholder.com/60x60.jpeg", caption: "Web Designer B", lastviewday: 1 },
// 		{ name: "sarah B", photourl: "http://via.placeholder.com/60x60.jpeg", caption: "Web Designer C", lastviewday: 2 },
// 		{ name: "sarah C", photourl: "http://via.placeholder.com/60x60.jpeg", caption: "Web Designer D", lastviewday: 3 },
// 		{ name: "sarah D", photourl: "http://via.placeholder.com/60x60.jpeg", caption: "Web Designer E", lastviewday: 4 },
// 		{ name: "sarah E", photourl: "http://via.placeholder.com/60x60.jpeg", caption: "Web Designer F", lastviewday: 5 },
// 		{ name: "sarah F", photourl: "http://via.placeholder.com/60x60.jpeg", caption: "Web Designer G", lastviewday: 9 }
// 	];
// 	var respond_rates = { last7days: 87, last14days: 91, last30days: 18 };
// 	var respond_color = { last7days: "#41bc82", last14days: "#41bc82", last30days: "orange" };
// 	var overall_rating = 91;
// 	var overall_status = { color: "#41bc82", caption: "good" };
// 	var sstartreview_rate = 24;
// 	var total_reviews = 78;
// 	var total_earning = 3542;
// 	var earning = [
// 		{ caption: "Tax", amount: 943, percent: 25, color: "orange" },
// 		{ caption: "S.Security + MediCare", amount: 217, percent: 10, color: "#FFEF00" },
// 		{ caption: "Take-Home Earning", amount: 2382, percent: 65, color: "#41bc82" }
// 	];

// 	var class_info = [
// 		{
// 			class_name: "Algebra",
// 			dates: ["Tue-Wed from 9 A.M. till 11 A.M", "Tue-Wed from 9 A.M. till 11 A.M", "Tue-Wed from 9 A.M. till 11 A.M", "Tue-Wed from 9 A.M. till 11 A.M"],
// 			credits: 4,
// 			options: ["TBD1", "TBD2", "TBD3"]
// 		},
// 		{
// 			class_name: "Algebra",
// 			dates: ["Tue-Wed from 9 A.M. till 11 A.M", "Tue-Wed from 9 A.M. till 11 A.M", "Tue-Wed from 9 A.M. till 11 A.M", "Tue-Wed from 9 A.M. till 11 A.M"],
// 			credits: 4,
// 			options: ["TBD1", "TBD2", "TBD3"]
// 		},
// 		{
// 			class_name: "Algebra",
// 			dates: ["Tue-Wed from 9 A.M. till 11 A.M", "Tue-Wed from 9 A.M. till 11 A.M", "Tue-Wed from 9 A.M. till 11 A.M", "Tue-Wed from 9 A.M. till 11 A.M"],
// 			credits: 4,
// 			options: ["TBD1", "TBD2", "TBD3"]
// 		},
// 		{
// 			class_name: "Algebra",
// 			dates: ["Tue-Wed from 9 A.M. till 11 A.M", "Tue-Wed from 9 A.M. till 11 A.M", "Tue-Wed from 9 A.M. till 11 A.M", "Tue-Wed from 9 A.M. till 11 A.M"],
// 			credits: 4,
// 			options: ["TBD1", "TBD2", "TBD3"]
// 		}
// 	];

// 	var upcoming_courses_start_date = "February 19th, 2018";
// 	var upcoming_courses = [
// 		{
// 			class_name: "Algebra",
// 			date: "Tue-Wed from 9 A.M. till 11 A.M",
// 			credits: 4,
// 			class_avaliability: 1,
// 			class_size: 4,
// 			students: [
// 				{
// 					name: "John S.",
// 					caption: "Web Designer",
// 					photourl: "http://via.placeholder.com/60x60.jpeg",
// 					id: "abcdefg"
// 				},
// 				{
// 					name: "John S.",
// 					caption: "Web Designer",
// 					photourl: "http://via.placeholder.com/60x60.jpeg",
// 					id: "abcdefg"
// 				},
// 				{
// 					name: "John S.",
// 					caption: "Web Designer",
// 					photourl: "http://via.placeholder.com/60x60.jpeg",
// 					id: "abcdefg"
// 				}
// 			]
// 		},
// 		{
// 			class_name: "Algebra",
// 			date: "Mon-Fri from 5 P.M. till 7 P.M",
// 			credits: 4,
// 			class_avaliability: 1,
// 			class_size: 1,
// 			students: [
// 				{
// 					name: "John S.",
// 					caption: "Web Designer",
// 					photourl: "http://via.placeholder.com/60x60.jpeg",
// 					id: "abcdefg"
// 				}
// 			]
// 		},
// 		{
// 			class_name: "Algebra",
// 			date: "Mon-Wed from 12:30 P.M. till 2:30 P.M.",
// 			credits: 4,
// 			class_avaliability: 2,
// 			class_size: 4,
// 			students: [
// 				{
// 					name: "John S.",
// 					caption: "Web Designer",
// 					photourl: "http://via.placeholder.com/60x60.jpeg",
// 					id: "abcdefg"
// 				},
// 				{
// 					name: "John S.",
// 					caption: "Web Designer",
// 					photourl: "http://via.placeholder.com/60x60.jpeg",
// 					id: "abcdefg"
// 				}]
// 		},
// 		{
// 			class_name: "Algebra",
// 			date: "Mon-Wed from 12:30 P.M. till 2:30 P.M.",
// 			credits: 4,
// 			class_avaliability: 3,
// 			class_size: 4,
// 			students: [
// 				{
// 					name: "John S.",
// 					caption: "Web Designer",
// 					photourl: "http://via.placeholder.com/60x60.jpeg",
// 					id: "abcdefg"
// 				}]
// 		}

// 	];



// 	res.render("dashboard.ejs", {
// 		status_color,
// 		status_text,
// 		notifications,
// 		respond_rates,
// 		respond_color,
// 		overall_status,
// 		overall_rating,
// 		sstartreview_rate,
// 		earning,
// 		total_reviews,
// 		total_earning,
// 		class_info,
// 		upcoming_courses_start_date,
// 		upcoming_courses,
// 	});
// });

// app.get("/finished-courses", function (req, res) {
// 	var total_gpa = 4.5;
// 	var acedemic_withdrawal = 0;
// 	var courses_grade = [{
// 		course_name: "JavaScript 1",
// 		course_date: "Mon-Fri from 3 P.M. till 5 P.M.",
// 		credits: 4,
// 		student_name: "Christine A",
// 		student_photo_url: "img/photo-square.png",
// 		grade: "A+"
// 	},
// 	{
// 		course_name: "JavaScript 2",
// 		course_date: "Mon-Fri from 3 P.M. till 5 P.M.",
// 		credits: 4,
// 		student_name: "Christine A",
// 		student_photo_url: "img/photo-square.png",
// 		grade: "B+"
// 	},
// 	{
// 		course_name: "JavaScript 3",
// 		course_date: "Mon-Fri from 3 P.M. till 5 P.M.",
// 		credits: 4,
// 		student_name: "Christine A",
// 		student_photo_url: "img/photo-square.png",
// 		grade: "C+"
// 	},
// 	{
// 		course_name: "JavaScript 4",
// 		course_date: "Mon-Fri from 3 P.M. till 5 P.M.",
// 		credits: 4,
// 		student_name: "Christine A",
// 		student_photo_url: "img/photo-square.png",
// 		grade: "D+"
// 	},
// 	{
// 		course_name: "JavaScript 5",
// 		course_date: "Mon-Fri from 3 P.M. till 5 P.M.",
// 		credits: 4,
// 		student_name: "Christine A",
// 		student_photo_url: "img/photo-square.png",
// 		grade: "E+"
// 	}
// 	];
// 	res.render("finished-courses.ejs", { courses_grade, total_gpa, acedemic_withdrawal });
// });

// app.get("/enrolled-courses", function (req, res) {
// 	var current_courses = [{
// 		course_name: "Javascript 1",
// 		course_date: "Mon-Fri from 3 P.M. till 5 P.M.",
// 		credits: 2,
// 		student_name: "Christine A",
// 		student_photo_url: "img/photo-square.png"
// 	},
// 	{
// 		course_name: "Javascript 2",
// 		course_date: "Mon-Fri from 3 P.M. till 5 P.M.",
// 		credits: 3,
// 		student_name: "Christine B",
// 		student_photo_url: "img/photo-square.png"
// 	},
// 	{
// 		course_name: "Javascript 3",
// 		course_date: "Mon-Fri from 3 P.M. till 5 P.M.",
// 		credits: 5,
// 		student_name: "Christine C",
// 		student_photo_url: "img/photo-square.png"
// 	},
// 	{
// 		course_name: "Javascript 4",
// 		course_date: "Mon-Fri from 3 P.M. till 5 P.M.",
// 		credits: 6,
// 		student_name: "Christine D",
// 		student_photo_url: "img/photo-square.png"
// 	}];
// 	res.render("enrolled-courses", { current_courses, future_courses: current_courses });
// });

// app.get("/privacy-security", function (req, res) {
// 	var blocklists = [{
// 		name: "Sarah A",
// 		caption: "Wea Designer",
// 		photourl: "http://via.placeholder.com/60x60.jpeg",
// 		id: "TBD"
// 	},
// 	{
// 		name: "Sarah B",
// 		caption: "Web Designer",
// 		photourl: "http://via.placeholder.com/60x60.jpeg",
// 		id: "TBD"
// 	},
// 	{
// 		name: "Sarah C",
// 		caption: "Wec Designer",
// 		photourl: "http://via.placeholder.com/60x60.jpeg",
// 		id: "TBD"
// 	},
// 	{
// 		name: "Sarah D",
// 		caption: "Wed Designer",
// 		photourl: "http://via.placeholder.com/60x60.jpeg",
// 		id: "TBD"
// 	}];

// 	var loginlogs = [{
// 		browser_device: "Safari/MacBook Pro 15'",
// 		ip_address: "192.53.43.6",
// 		last_activity: "5 hours ago"
// 	},
// 	{
// 		browser_device: "Safari/MacBook Pro 14'",
// 		ip_address: "192.53.43.6",
// 		last_activity: "3 hours ago"
// 	},
// 	{
// 		browser_device: "Safari/MacBook Pro 13'",
// 		ip_address: "192.53.41.6",
// 		last_activity: "2 hours ago"
// 	}];
// 	res.render("privacy-security",{blocklists,loginlogs});
// });

// app.get("/notification", function (req, res) {
// 	res.render("notification");
// });

// app.get("/myblog", function (req, res) {
// 	var blogs = [{
// 		poster: "Sara MM",
// 		posterCaption: "Web Designer",
// 		content: ""
// 	},
// 	{
// 		poster: "Sara NN",
// 		posterCaption: "Manager",
// 		content: ""
// 	}
// 	];
// 	res.render("myblog", { blogs });
// });

// app.get("/transaction", function (req, res) {
// 	var total_recent_transaction_amount = "4,343$";
// 	var recent_transactions = [
// 		{ date: "1/23/2017", course_name: "1D Animation", credits: 4, amount: "1,234$" },
// 		{ date: "2/23/2017", course_name: "2D Animation", credits: 3, amount: "1,234$" },
// 		{ date: "3/23/2017", course_name: "3D Animation", credits: 2, amount: "1,234$" },
// 		{ date: "4/23/2017", course_name: "4D Animation", credits: 1, amount: "1,234$" }
// 	];
// 	var total_past_transaction_amount = "4,343$";
// 	var past_transactions = recent_transactions;
// 	res.render("transaction", {
// 		total_recent_transaction_amount,
// 		recent_transactions,
// 		total_past_transaction_amount,
// 		past_transactions
// 	});
// });

// app.get("/cancel-account", function (req, res) {
// 	res.render("cancel-account.ejs");
// });

// var upload = multer({ dest: 'tmp/' });

// app.post("/google-signin", function (req, res, next) {
// 	console.log(req.body);
// 	var id_token = req.body.idtoken;
// 	var CLIENT_ID = '794497445132-d8j4m8ljusgis4u473f2upb0ac2iukle.apps.googleusercontent.com';
// 	var auth = new GoogleAuth;
// 	var client = new auth.OAuth2(CLIENT_ID, '', '');
// 	client.verifyIdToken(
// 		id_token,
// 		CLIENT_ID,
// 		// Or, if multiple clients access the backend:
// 		//[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3],
// 		function (e, login) {
// 			var payload = login.getPayload();
// 			var userid = payload['sub'];
// 			console.log(payload);
// 			// If request specified a G Suite domain:
// 			//var domain = payload['hd'];
// 		});
// });

// app.get("/payment", function (req, res) {
// 	res.render("payment.ejs")
// });


var socketServer = http.createServer(app).listen(3000, function () {
	console.log("Server is running on port 3000");
});

require('./signaling-server.js')(socketServer, function (socket) {
	try {
		var params = socket.handshake.query;
		if (!params.socketCustomEvent) {
			params.socketCustomEvent = 'custom-message';
		}
		socket.on(params.socketCustomEvent, function (message) {
			try {
				socket.broadcast.emit(params.socketCustomEvent, message);
			} catch (e) { }
		});
	} catch (e) { }
});
