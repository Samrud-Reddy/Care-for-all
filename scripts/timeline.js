// Runs when the dom is ready
$(function(){
	var inputs = $('.not_end');
	var paras = $('.journey_content');

	inputs.click(function(){
		var t = $(this)
		ind = t.index()-1
		matchedPara = paras.eq(ind)
		
		t.add(matchedPara).addClass('active');
		inputs.not(t).add(paras.not(matchedPara)).removeClass('active');
	});
});