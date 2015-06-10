(function() {
// ################
// prepare NameSpaces
// ################
Type.registerNamespace('busitec.listJsLinkOverride');
var busitec = {};
busitec.listJsLinkOverride = window.busitec.listJsLinkOverride || {};
busitec.listJsLinkOverride.Demo2b = {}
busitec.listJsLinkOverride.Demo2b.Templates = {};
busitec.listJsLinkOverride.Demo2b.Functions = {};

// ################
// define template
// ################
busitec.listJsLinkOverride.Demo2b.BoardViewItem = function (ctx) {
	var html = "<div class='grid-item'>" + ctx.CurrentItem.Title + "</div>";
	return html;
}

busitec.listJsLinkOverride.Demo2b.Templates.Header = "<div class='grid'>";
busitec.listJsLinkOverride.Demo2b.Templates.Item = busitec.listJsLinkOverride.Demo2b.BoardViewItem;
busitec.listJsLinkOverride.Demo2b.Templates.Footer = "</div>";

busitec.listJsLinkOverride.Demo2b.BaseViewID = 1;

// ################
// register functions
// ################
busitec.listJsLinkOverride.Demo2b.Functions.RegisterTemplate = function () {
	// Register the rendering template
	SPClientTemplates.TemplateManager.RegisterTemplateOverrides(busitec.listJsLinkOverride.Demo2b);
};
busitec.listJsLinkOverride.Demo2b.Functions.MdsRegisterTemplate = function () {
	busitec.listJsLinkOverride.Demo2b.Functions.RegisterTemplate();
	var thisScript = _spPageContextInfo.siteServerRelativeUrl + "Scripts/demo_2b.js";
	RegisterModuleInit(thisScript, busitec.listJsLinkOverride.Demo2b.Functions.RegisterTemplate);
};

// ################
// initialize
// ################
busitec.listJsLinkOverride.Demo2b.Load = function () {
	// add style-sheet
	var style = document.createElement("link");
	document.head.appendChild(style);
	style.rel  = 'stylesheet';
	style.type = 'text/css';
	style.href = _spPageContextInfo.webServerRelativeUrl + '/SiteAssets/board.css';
	
	SP.SOD.registerSod("masonry", _spPageContextInfo.webServerRelativeUrl + "/SiteAssets/masonry.pkgd.min.js");
	SP.SOD.executeFunc("masonry", null, function () {
		var elem = document.querySelector('.grid');
		var msnry = new Masonry(elem, {
				// options
				itemSelector : '.grid-item',
				columnWidth : 100,
				gutter: 20
			});
	});	
}

if (typeof _spPageContextInfo != "undefined" && _spPageContextInfo != null) {
	// its an MDS page refresh
	busitec.listJsLinkOverride.Demo2b.Functions.MdsRegisterTemplate();
} else {
	// normal page load
	busitec.listJsLinkOverride.Demo2b.Functions.RegisterTemplate();
}

if (typeof(_spBodyOnLoadCalled) === 'undefined' || _spBodyOnLoadCalled) {
	busitec.listJsLinkOverride.Demo2b.Load();
} else {
	_spBodyOnLoadFunctions.push(busitec.listJsLinkOverride.Demo2b.Load);
}
})();