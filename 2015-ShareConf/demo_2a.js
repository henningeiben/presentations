var head = document.getElementsByTagName("head")[0];
var style = document.createElement("link");
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = '/personal/eiben_busitec_de/demo/SiteAssets/jquery-ui.css';
head.appendChild(style);

var busitec = {};
busitec.listJsLinkOverride = {};
busitec.listJsLinkOverride.Demo2a = {}
busitec.listJsLinkOverride.Demo2a.Templates = {};

busitec.listJsLinkOverride.Demo2a.Templates.Header = "<div id=\"accordion\">";
busitec.listJsLinkOverride.Demo2a.Templates.Item = AccordionFormat;
busitec.listJsLinkOverride.Demo2a.Templates.Footer = "</div>";
busitec.listJsLinkOverride.Demo2a.OnPostRender = ShowAccordion;

busitec.listJsLinkOverride.Demo2a.BaseViewID = 1;

// Register the rendering template
SPClientTemplates.TemplateManager.RegisterTemplateOverrides(busitec.listJsLinkOverride.Demo2a);

function AccordionFormat(ctx) {
	var html = "<h3>" + ctx.CurrentItem.Title + "</h3>";
	html += "<div>" + ctx.CurrentItem.QuantityPerUnit + "</div>";
	return html;
}

function ShowAccordion() {
	SP.SOD.executeFunc("jquery-ui", null, function () {
		$("#accordion").find('#scriptBodyWPQ2').remove();
		$("#accordion").accordion();
	});
};
