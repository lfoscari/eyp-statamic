var nav = document.getElementById("nav");
 		isUnderstanding = document.querySelector(".understandingeurope") != null;
 		navbackground = isUnderstanding ? 'has-background-understanding' : 'has-background-primary';

window.addEventListener('scroll', function () {
	if (window.scrollY > 0)
		nav.classList.add(navbackground);
	else
		nav.classList.remove(navbackground);
});

document.addEventListener('DOMContentLoaded', function () {
	if (window.scrollY > 0)
		nav.classList.add(navbackground);

	var navburger = document.querySelector('.navbar-burger');
	navburger.addEventListener('click', function () {
		var navcontent = document.getElementById(navburger.dataset.target);
		console.log(navburger.dataset.target);
		nav.classList.add(navbackground);
		navburger.classList.toggle('is-active');
		navcontent.classList.toggle('is-active');
	});
});

if (document.getElementById("expandButton")) {
	var hidden = document.querySelectorAll(".is-hidden");
	var button = document.getElementById("expandButton");
	button.addEventListener("click", function () {
		hidden.forEach(function (el) {
			el.classList.toggle("is-hidden");
		});
		if (button.innerHTML == button.getAttribute("data-hide"))
			button.innerHTML = button.getAttribute("data-hide");
		else
			button.innerHTML = button.getAttribute("data-hide");
	});
}

// Home video

var video = document.querySelector("video")
if(video && window.innerWidth > 768)
	video.autoplay = true;

// Cookies

function getCookie(name) {
  var value = document.cookie,
    start = value.indexOf(" " + name + "=");
  if (start == -1) start = value.indexOf(name + "=");
  if (start == -1) value = null;
  else {
    start = value.indexOf("=", start) + 1;
    var end = value.indexOf(";", start);
    if (end == -1)
      end = value.length;
    value = unescape(value.substring(start, end));
  }
  return value;
}

var policy = getCookie("policy")
		cookie = document.querySelector(".cookie")
		close = document.getElementById("cookie-close")
if (!policy)	cookie.style.opacity = 1

if (document.querySelector('#cookie-close')) {
  close.addEventListener('click', function() {
    cookie.style.opacity = 0
    var now = new Date()
    var time = now.getTime()
    var expireTime = time + 1000 * 36000
    now.setTime(expireTime)
    var tempExp = 'Wed, 31 Oct 2012 08:50:17 GMT'
    document.cookie = 'policy=false;expires=' + now.toGMTString() + ';path=/'
  });
}

// if (navItems.offsetWidth >= window.innerWidth) {
// 	window.addEventListener('scroll', function () {
// 		var amount = document.querySelector(".nav-logo").offsetHeight;
// 		if (window.scrollY > amount)
// 			nav.style.marginTop = -1 * amount + "px";
// 		else
// 			nav.style.marginTop = "0px";
// 	});
// } else {
// 	window.addEventListener('scroll', function () {
// 		if (window.scrollY > amount)
// 			nav.classList.add("background");
// 		else
// 			nav.classList.remove("background");
// 	});
// }

// var navHeight = nav.offsetHeight + 20;
// if (!(document.querySelector(".page-chi-siamo")) && !(document.querySelector(".home-template")))
// 	nav.nextElementSibling.style.paddingTop = 50 + navHeight + "px";
// else if (document.querySelector(".timeline-item"))
// 	document.querySelector(".timeline-item").style.paddingTop = 1.5 * navHeight + "px";

// Expand FAQ
//
// if (document.querySelector('.secondary__main--sections--faq')) {
// 	const expandButton = document.querySelector("#expandButton");
// 	const expanded = document.querySelector("#expanded");
//
// 	expandButton.addEventListener('click', function () {
// 		expandButton.remove();
// 		expanded.style.display = "block";
// 	});
// }
//
// // Cookie
//
// function getCookie(name) {
// 	var value = document.cookie,
// 		start = value.indexOf(" " + name + "=");
// 	if (start == -1) start = value.indexOf(name + "=");
// 	if (start == -1) value = null;
// 	else {
// 		start = value.indexOf("=", start) + 1;
// 		var end = value.indexOf(";", start);
// 		if (end == -1)
// 			end = value.length;
// 		value = unescape(value.substring(start, end));
// 	}
// 	return value;
// }
//
// var acookie = getCookie("policy");
// if (!acookie)
// 	document.querySelector('.cookies').style.display = "block";
//
// if (document.querySelector('#cookie-close')) {
// 	document.querySelector("#cookie-close").addEventListener('click', function () {
// 		document.querySelector('.cookies').style.display = "none";
// 		var now = new Date();
// 		var time = now.getTime();
// 		var expireTime = time + 1000 * 36000;
// 		now.setTime(expireTime);
// 		var tempExp = 'Wed, 31 Oct 2012 08:50:17 GMT';
// 		document.cookie = 'policy=false;expires=' + now.toGMTString() + ';path=/';
// 	});
// }
//
// // Siemas...
//
// if (document.querySelector('.siema-cards')) {
// 	const siemaCards = new Siema({
// 		selector: '.siema-cards',
// 		perPage: {
// 			0: 1,
// 			768: 3,
// 			1024: 3,
// 		}
// 	});
//
// 	document.querySelector('.pagination__button--prev').addEventListener('click', () => siemaCards.prev());
// 	document.querySelector('.pagination__button--next').addEventListener('click', () => siemaCards.next());
// }
//
// if (document.querySelector('.siema-pastEvents')) {
// 	const siemaPastEvents = new Siema({
// 		selector: '.siema-pastEvents',
// 		loop: true,
// 		perPage: {
// 			0: 1,
// 			768: 4,
// 			1024: 4,
// 		}
// 	});
//
// 	document.querySelector('.pagination__button--prev--pastEvents').addEventListener('click', () => siemaPastEvents.prev());
// 	document.querySelector('.pagination__button--next--pastEvents').addEventListener('click', () => siemaPastEvents.next());
// }
//
// if (document.querySelector('.siema-sponsor')) {
// 	const siemaSponsor = new Siema({
// 		selector: '.siema-sponsor',
// 		perPage: {
// 			0: 2,
// 			768: 3,
// 			1024: 6,
// 		},
// 		loop: true
// 	});
//
// 	function next() {
// 		siema.next();
// 	}
//
// 	setInterval(() => siemaSponsor.next(), 1500)
// }
//
// if (document.querySelector('.sessionsType--siema')) {
// 	const siemaTypesOfSession = new Siema({
// 		selector: '.sessionsType--siema',
// 		loop: true,
// 		autoplay: true,
// 	});
// 	setInterval(() => siemaTypesOfSession.next(), 7000)
//
// 	const btn0 = document.querySelector('#nsc');
// 	const btn1 = document.querySelector('#if');
// 	const btn2 = document.querySelector('#is');
// 	const btn3 = document.querySelector('#gaday');
//
// 	btn0.addEventListener('click', () => siemaTypesOfSession.goTo(0));
// 	btn1.addEventListener('click', () => siemaTypesOfSession.goTo(1));
// 	btn2.addEventListener('click', () => siemaTypesOfSession.goTo(2));
// 	btn3.addEventListener('click', () => siemaTypesOfSession.goTo(3));
// }
//
// if (document.querySelector('.siema--debug')) {
// 	const secondaryIntroTimeline = new Siema({
// 		selector: '.secondary__intro--timeline',
// 		perPage: 1,
// 		loop: true
// 	});
//
// 	const nextTimeline = document.querySelector('#right');
// 	const previousTimeline = document.querySelector('#left');
//
// 	nextTimeline.addEventListener('click', () => secondaryIntroTimeline.next());
// 	previousTimeline.addEventListener('click', () => secondaryIntroTimeline.prev());
//
// 	function next() {
// 		siema.next();
// 	}
// }
//
// // External articles
//
// function gatherArticles() {
// 	var requests = new Array();
//
// 	requests = new Array();
// 	var urls = new Array(
// 		'http://www.politico.eu/feed/',
// 		'https://www.economist.com/topics/european-union/index.xml',
// 		'http://feeds.feedburner.com/euronews/en/home/',
// 		'http://www.aljazeera.com/xml/rss/all.xml',
// 		'https://www.theguardian.com/world/europe-news/rss'
// 	);
//
// 	for (i = 0; i < urls.length; i++)
// 		requests.push(new ProcessUrl(urls[i], i));
// }
//
// function ProcessUrl(url, index) {
// 	var http = new XMLHttpRequest();
// 	http.open("POST", "https://api.rss2json.com/v1/api.json?rss_url=" + url, true);
// 	http.onreadystatechange = function () {
// 		if (http.status === 200)
// 			try {
//
// 				var j;
// 				switch (index) {
// 				case 0:
// 					j = "Politico EU";
// 					break;
// 				case 1:
// 					j = "The Economist";
// 					break;
// 				case 2:
// 					j = "Euronews";
// 					break;
// 				case 3:
// 					j = "Aljazeera";
// 					break;
// 				case 4:
// 					j = "The Guardian";
// 					break;
// 				}
//
// 				var rssFeed = JSON.parse(http.responseText)['items'];
// 				var print = document.getElementById("newsEurope");
// 				var title = "",
// 					url, description;
//
// 				for (i = 0; i < 2; i++) {
// 					if (rssFeed[i]['title'] == title) continue; // avoid possible duplicates
// 					title = rssFeed[i]['title'];
// 					url = rssFeed[i]['link'];
// 					description = rssFeed[i]['description'].length > 300 ? "" : rssFeed[i]['description'];
// 					print.innerHTML +=
// 						'<div class="card xs-p2"> \
//             <a href="' + url + '" target="_blank"> \
//               <div class="card--text"> \
//                 <span>' + j + '</span> \
//                 <h3>' + title + '</h3> \
//                 <p>' + description + '</p> \
//               </div> \
//             </a> \
//           </div>';
// 				}
//
// 			} catch (bugfix) {}
// 		else
// 			console.log('Error: ' + http.status);
// 	};
// 	http.send(null);
// }
//
// if (document.querySelector(".page-articoli"))
// 	gatherArticles();
