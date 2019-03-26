const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Telefoane",
				weight: 12.3
			}, {
				text: "Aur",
				weight: 8
			}, {
				text: "Ceasuri",
				weight: 14
			}, {
				text: "Țigări",
				weight: 3
			}, {
				text: "Mașini",
				weight: 7
			}, {
				text: "Bani",
				weight: 10
			}, {
				text: "Carduri",
				weight: 9
			}, {
				text: "Laptopuri",
				weight: 15
			}, 
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 300});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"te aștept alături de mine", "pentru momente de neuitat împreună.", "fac și pizza.", "NU VEI REGRETA!"
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "rgb(255, 103, 68)"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
