var flags = {}
flags["Argentina"]= "ar";
flags["Austria"]= "at";
flags["Belgium"]= "be";
flags["Brazil"]= "br";
flags["Canada"]= "ca";
flags["Denmark"]= "dk";
flags["Finland"]= "fi";
flags["France"]= "fr";
flags["Germany"]= "de";
flags["Ireland"]= "ir";
flags["Italy"]= "it";
flags["Mexico"]= "mx";
flags["Norway"]= "no";
flags["Poland"]= "pl";
flags["Portugal"]= "pt";
flags["Spain"]= "es";
flags["Sweden"]= "se";
flags["Switzerland"]= "ch";
flags["UK"]= "gb";
flags["USA"]= "us";
flags["Venezuela"]= "ve";

// add style-sheet
var style = document.createElement("link");
document.head.appendChild(style);
style.rel  = 'stylesheet';
style.type = 'text/css';
style.href = '/personal/eiben_busitec_de/demo/SiteAssets/flags.css';

var busitec = {};
busitec.fieldJsLinkOverride = {};
busitec.fieldJsLinkOverride.Templates = {};

busitec.fieldJsLinkOverride.Templates.Fields = {
	'Country' : {
		'View' : ConditionalFormatting
	}
};
// Register the rendering template
SPClientTemplates.TemplateManager.RegisterTemplateOverrides(busitec.fieldJsLinkOverride);

function ConditionalFormatting(ctx) {
	var country = ctx.CurrentItem.Country;
	return '<img src="blank.gif" class="flag flag-'+flags[country]+'" alt="'+country+'" />';
}