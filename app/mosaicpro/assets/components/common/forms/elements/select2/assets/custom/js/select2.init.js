$(function()
{

/* Select2 - Advanced Select Controls */
	if (typeof $.fn.select2 != 'undefined')
	{

		// templating
		function format(state) {
		    if (!state.id) return state.text; // optgroup
		    return "<img class='flag' src='http://ivaynberg.github.com/select2/images/flags/" + state.id.toLowerCase() + ".png'/>" + state.text;
		}
		$("#countries").select2({
		    /*formatResult: format,
		    formatSelection: format,
		    escapeMarkup: function(m) { return m; }*/
		});
	}

});