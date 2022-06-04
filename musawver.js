//Scroll Back to Home Page Button//
window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
	document.getElementById("myBtn").style.display = "none";
		}
			}
		function topFunction() {
		document.body.scrollTop = 10000;
		document.documentElement.scrollTop = 10000;
			}

//MailerLite Universal//
(function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){
	var c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
	f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);
	var _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?v'+(~~(new Date().getTime()/1000000));
	_.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');

	var ml_account = ml('accounts', '913743', 'u4j9o8g3b0', 'load');


//Facebook configurator//
(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=143070759617083";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));


//full screen menu toggle button//
function toggleMenu(ref) {
					  document.getElementById('sidebar').classList.toggle('active');
					  ref.classList.toggle('active');
					}


