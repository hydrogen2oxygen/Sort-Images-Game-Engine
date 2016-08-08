var sigEngine = {};

sigEngine.phpMode = true;
sigEngine.points = 0;
sigEngine.previousOrder = 0;
sigEngine.sortableContainer = '';
sigEngine.checkOrderButton = '';
sigEngine.resultSpan = '';
sigEngine.fullPoints = 0;
sigEngine.halfPoints = 0;
sigEngine.progressBar = '';

sigEngine.checkOrder = function() {
	sigEngine.points = 0;
	sigEngine.previousOrder = 0;

	$('#sortableContainer').children().each(
			function(index, listObject) {

				var expectedOrder = parseInt($(listObject).attr('order'));
				var x = index + 1;

				// correct order means 10 points
				if (x == expectedOrder) {
					sigEngine.points += sigEngine.fullPoints;
				} else if (sigEngine.previousOrder > 0
						&& (sigEngine.previousOrder + 1) == expectedOrder) {
					sigEngine.points += sigEngine.halfPoints;
				}

				sigEngine.previousOrder = expectedOrder;
			});

	$('#' + sigEngine.resultSpan).html(sigEngine.points);
	sigEngine.initProgressBar();
};

sigEngine.init = function(sortableContainer, checkOrderButton, resultSpan,
		fullPoints, halfPoints, progressBar) {

	sigEngine.sortableContainer = sortableContainer;
	sigEngine.checkOrderButton = checkOrderButton;
	sigEngine.resultSpan = resultSpan;
	sigEngine.fullPoints = fullPoints;
	sigEngine.halfPoints = halfPoints;
	sigEngine.progressBar = progressBar;

	$('#' + checkOrderButton).click(function() {
		sigEngine.checkOrder();
	});

	sigEngine.checkOrder();
	sigEngine.initProgressBar();
};

sigEngine.initProgressBar = function() {
	var elementCount = $('#sortableContainer').children().size();
	var totalPoints = elementCount * sigEngine.fullPoints;
	var percent = (100 / totalPoints) * sigEngine.points;
	console.log(elementCount + " " + totalPoints + " " + sigEngine.points);
	$('#' + sigEngine.progressBar).attr('aria-valuemax', totalPoints);
	$('#' + sigEngine.progressBar).css('width', percent + '%').attr(
			'aria-valuenow', sigEngine.points).html(percent + '%');
};

sigEngine.saveAndStopGame = function() {

	$.ajax({
		type : "POST",
		url : "server.php",
		data : {
			points : '100',
			name : 'test1'
		},
		success : function(data) {
			console.debug(data);
		},
		dataType : "json"
	});
};