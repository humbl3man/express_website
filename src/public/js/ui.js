var NS = (function() {
	'use strict';

	var teamPage = (function(){
		function attachEvents() {
			$('.expand-teammate-details').on('click', function(event) {
				event.preventDefault();
				var t, s;
				
				t = $(this);
				s = t.siblings('.teammate-details');
				
				s.toggleClass('hidden');
				
				if (s.hasClass('hidden')) {
					t.html('More Details');
				} else {
					t.html('Less Details');
				}
			});
		}

		function load() {
			attachEvents();
		}
		return {
			load: load
		};
	}());

	function init() {
		console.log('Running NS');
		// team page
		teamPage.load();
	}

	return {
		init: init
	};
}());

$(document).ready(NS.init);