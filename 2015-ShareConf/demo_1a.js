var busitec = {};
busitec.fieldJsLinkOverride = {};
busitec.fieldJsLinkOverride.Templates = {};

busitec.fieldJsLinkOverride.Templates.Fields = {
	'UnitsInStock' : {
		'View' : ConditionalFormatting
	}
};
// Register the rendering template
SPClientTemplates.TemplateManager.RegisterTemplateOverrides(busitec.fieldJsLinkOverride);

function ConditionalFormatting(ctx) {
	var unitsInStock = ctx.CurrentItem.UnitsInStock;
	var myColor = "blue";
	if (unitsInStock < 10)
		myColor = "red";
	else
		myColor = "green";
	return "<span style='color:" + myColor + "'>" + unitsInStock + "</span>";
}