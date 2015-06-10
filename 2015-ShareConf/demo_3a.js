(function () {
	// ################
	// prepare NameSpaces
	// ################
	Type.registerNamespace('busitec.formJsLinkOverride');
	var busitec = {};
	busitec.formJsLinkOverride = window.busitec.formJsLinkOverride || {};
	busitec.formJsLinkOverride.Demo3a = {}
	busitec.formJsLinkOverride.Demo3a.Templates = {};
	busitec.formJsLinkOverride.Demo3a.Functions = {};

	// ################
	// define template
	// ################
	busitec.formJsLinkOverride.Demo3a.SliderFormatting = function (ctx) {
		var fieldInternalName = ctx.CurrentFieldSchema.Name;
		var controlId = fieldInternalName + "_control";

		ctx.FormContext.registerInitCallback(fieldInternalName, function () {
			$addHandler($get(controlId), "change", function (e) {
				ctx.FormContext.updateControlValue(fieldInternalName, $get(controlId).value);
			});
		});

		ctx.FormContext.registerFocusCallback(fieldInternalName, function () {
			$get(controlId).focus();
		});

		ctx.FormContext.registerValidationErrorCallback(fieldInternalName, function (errorResult) {
			SPFormControl_AppendValidationErrorMessage(controlId, errorResult);
		});

		var html = String.format('<input type="range" id="{0}" name="{0}" min="0" max="100" step="10" value="{1}">',
				controlId, ctx.CurrentFieldValue);
		return html;
	}

	busitec.formJsLinkOverride.Demo3a.Templates.Fields = {
		'ReorderLevel' : {
			EditForm : busitec.formJsLinkOverride.Demo3a.SliderFormatting,
			NewForm : busitec.formJsLinkOverride.Demo3a.SliderFormatting
		}
	};

	// ################
	// register functions
	// ################
	busitec.formJsLinkOverride.Demo3a.Functions.RegisterTemplate = function () {
		// Register the rendering template
		SPClientTemplates.TemplateManager.RegisterTemplateOverrides(busitec.formJsLinkOverride.Demo3a);
	};
	busitec.formJsLinkOverride.Demo3a.Functions.MdsRegisterTemplate = function () {
		busitec.formJsLinkOverride.Demo3a.Functions.RegisterTemplate();
		var thisScript = _spPageContextInfo.webServerRelativeUrl + "/Scripts/demo_3a.js";
		RegisterModuleInit(thisScript, busitec.formJsLinkOverride.Demo3a.Functions.RegisterTemplate);
	};

	busitec.formJsLinkOverride.Demo3a.Load = function () {
		// noop
	}

	if (typeof _spPageContextInfo != "undefined" && _spPageContextInfo != null) {
		// its an MDS page refresh
		busitec.formJsLinkOverride.Demo3a.Functions.MdsRegisterTemplate();
	} else {
		// normal page load
		busitec.formJsLinkOverride.Demo3a.Functions.RegisterTemplate();
	}

	if (typeof(_spBodyOnLoadCalled) === 'undefined' || _spBodyOnLoadCalled) {
		busitec.formJsLinkOverride.Demo3a.Load();
	} else {
		_spBodyOnLoadFunctions.push(busitec.formJsLinkOverride.Demo3a.Load);
	}
})();
