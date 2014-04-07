// JavaScript Document

// MDEditor info
var mdepath;
var mdebasename;
var mdeditor;
mdepath = document.getElementsByTagName('script');
mdepath = mdepath[mdepath.length-1];
mdepath = mdepath.src;
mdebasename = mdepath.split('/').reverse()[0];
var mdeditor = {
	url: mdepath.replace(mdebasename, ''),
	lang: null,
	elementName: null
};

// Word counter
$.fn.textareaWordCounter = function (elementName) {
	var msg;
	var words;
	msg = $(this).val();
	if (msg != '') {
		words = msg.trim().replace(/(\s)\s+/g, ' ').replace(/\t/g, ' ').replace(/\r\n/g, ' ').replace(/\r/g, ' ').replace(/\n/g, ' ').split(' ');
		$('#MDEditor_' + elementName + '_footer_wordcounter').html(words.length);
	} else {
		$('#MDEditor_' + elementName + '_footer_wordcounter').html(0);
	}
};

// Buttons
function mdeditorButtonTable (elementName) {
	$('#MDEditor_' + elementName + '_body_optioncontainer_content').empty().css('vertical-align', 'middle').html("<img class='MDEditor_ajaxloader' src='" + mdeditor.url + "img/ajax.gif' alt='AJAX load' />");
	$('#MDEditor_' + elementName + '_body_optioncontainer').fadeIn(200);
	$('#MDEditor_' + elementName + '_body_actioncontainer').fadeOut(200, function () {
		$('#MDEditor_' + elementName + '_body_actioncontainer_content').empty().css('vertical-align', 'top');
	});
}

function mdeditorButtonQuotation (elementName) {
	$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('insert', "> " + $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().text);
	$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('set', $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().end, 0);
}

function mdeditorButtonAnchor (elementName) {
	$('#MDEditor_' + elementName + '_body_optioncontainer_content').empty().css('vertical-align', 'middle').html("<img class='MDEditor_ajaxloader' src='" + mdeditor.url + "img/ajax.gif' alt='AJAX load' />");
	$('#MDEditor_' + elementName + '_body_optioncontainer').fadeIn(200);
	$('#MDEditor_' + elementName + '_body_actioncontainer').fadeOut(200, function () {
		$('#MDEditor_' + elementName + '_body_actioncontainer_content').empty().css('vertical-align', 'top');
	});
}

function mdeditorButtonHr (elementName) {
	$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('insert', "\r\n*****\r\n");
	$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('set', $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().end, 0);
}

function mdeditorButtonYoutube (elementName) {
	$('#MDEditor_' + elementName + '_body_optioncontainer_content').empty().css('vertical-align', 'middle').html("<img class='MDEditor_ajaxloader' src='" + mdeditor.url + "img/ajax.gif' alt='AJAX load' />");
	$('#MDEditor_' + elementName + '_body_optioncontainer').fadeIn(200);
	$('#MDEditor_' + elementName + '_body_actioncontainer').fadeOut(200, function () {
		$('#MDEditor_' + elementName + '_body_actioncontainer_content').empty().css('vertical-align', 'top');
	});
}

function mdeditorButtonCode (elementName) {
	if (typeof $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().text == undefined || $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().text == '') {
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('insert', "``````");
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('set', $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().end-3, 0);
	} else {
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('insert', "```" + $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().text + "```");
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('set', $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().end, 0);
	}
}

function mdeditorButtonMail (elementName) {
	$('#MDEditor_' + elementName + '_body_optioncontainer_content').empty().css('vertical-align', 'middle').html("<img class='MDEditor_ajaxloader' src='" + mdeditor.url + "img/ajax.gif' alt='AJAX load' />");
	$('#MDEditor_' + elementName + '_body_optioncontainer').fadeIn(200);
	$('#MDEditor_' + elementName + '_body_actioncontainer').fadeOut(200, function () {
		$('#MDEditor_' + elementName + '_body_actioncontainer_content').empty().css('vertical-align', 'top');
	});
}

function mdeditorButtonPhone (elementName) {
	$('#MDEditor_' + elementName + '_body_optioncontainer_content').empty().css('vertical-align', 'middle').html("<img class='MDEditor_ajaxloader' src='" + mdeditor.url + "img/ajax.gif' alt='AJAX load' />");
	$('#MDEditor_' + elementName + '_body_optioncontainer').fadeIn(200);
	$('#MDEditor_' + elementName + '_body_actioncontainer').fadeOut(200, function () {
		$('#MDEditor_' + elementName + '_body_actioncontainer_content').empty().css('vertical-align', 'top');
	});
}

function mdeditorButtonIcons (elementName) {
	$('#MDEditor_' + elementName + '_body_optioncontainer_content').empty().css('vertical-align', 'middle').html("<img class='MDEditor_ajaxloader' src='" + mdeditor.url + "img/ajax.gif' alt='AJAX load' />");
	$('#MDEditor_' + elementName + '_body_optioncontainer').fadeIn(200);
	$('#MDEditor_' + elementName + '_body_actioncontainer').fadeOut(200, function () {
		$('#MDEditor_' + elementName + '_body_actioncontainer_content').empty().css('vertical-align', 'top');
	});
}

function mdeditorButtonAttachment (elementName) {
	$('#MDEditor_' + elementName + '_body_actioncontainer_content').empty().css('vertical-align', 'middle').html("<img class='MDEditor_ajaxloader' src='" + mdeditor.url + "img/ajax.gif' alt='AJAX load' />");
	$('#MDEditor_' + elementName + '_body_actioncontainer').fadeIn(200);
	$('#MDEditor_' + elementName + '_body_optioncontainer').fadeOut(200, function () {
		$('#MDEditor_' + elementName + '_body_optioncontainer_content').empty().css('vertical-align', 'top');
	});
}

function mdeditorButtonBold (elementName) {
	if (typeof $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().text == undefined || $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().text == '') {
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('insert', "____");
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('set', $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().end-2, 0);
	} else {
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('insert', "__" + $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().text + "__");
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('set', $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().end, 0);
	}
}

function mdeditorButtonItalic (elementName) {
	if (typeof $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().text == undefined || $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().text == '') {
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('insert', "**");
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('set', $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().end-1, 0);
	} else {
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('insert', "*" + $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().text + "*");
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('set', $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().end, 0);
	}
}

function mdeditorButtonUnderline (elementName) {
	if (typeof $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().text == undefined || $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().text == '') {
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('insert', "<u></u>");
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('set', $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().end-4, 0);
	} else {
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('insert', "<u>" + $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().text + "</u>");
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('set', $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().end, 0);
	}
}

function mdeditorButtonStrikethrough (elementName) {
	if (typeof $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().text == undefined || $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().text == '') {
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('insert', "<s></s>");
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('set', $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().end-4, 0);
	} else {
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('insert', "<s>" + $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().text + "</s>");
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('set', $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().end, 0);
	}
}

function mdeditorButtonOList (elementName) {
	if (typeof $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().text == undefined || $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().text == '') {
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('insert', "1. ");
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('set', $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().end, 0);
	} else {
		var value;
		value = $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().text;

		value.split();
	}
}

function mdeditorButtonUList (elementName) {
}

function mdeditorButtonHyperlink (elementName) {
	$('#MDEditor_' + elementName + '_body_optioncontainer_content').empty().css('vertical-align', 'middle').html("<img class='MDEditor_ajaxloader' src='" + mdeditor.url + "img/ajax.gif' alt='AJAX load' />");
	$('#MDEditor_' + elementName + '_body_optioncontainer').fadeIn(200);
	$('#MDEditor_' + elementName + '_body_actioncontainer').fadeOut(200, function () {
		$('#MDEditor_' + elementName + '_body_actioncontainer_content').empty().css('vertical-align', 'top');
	});
}

function mdeditorButtonUnlink (elementName) {
	if (typeof $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().text != undefined && $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().text != '') {
		var value;
		value = $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().text;
		value = value.replace('[', '').replace(/\]\(.*\)/g, '');
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('replace', value);
		$('#MDEditor_' + elementName + '_body_edit_textarea').textrange('set', $('#MDEditor_' + elementName + '_body_edit_textarea').textrange().end, 0);
	}
}

function mdeditorButtonImage (elementName) {
	$('#MDEditor_' + elementName + '_body_optioncontainer_content').empty().css('vertical-align', 'middle').html("<img class='MDEditor_ajaxloader' src='" + mdeditor.url + "img/ajax.gif' alt='AJAX load' />");
	$('#MDEditor_' + elementName + '_body_optioncontainer').fadeIn(200);
	$('#MDEditor_' + elementName + '_body_actioncontainer').fadeOut(200, function () {
		$('#MDEditor_' + elementName + '_body_actioncontainer_content').empty().css('vertical-align', 'top');
	});
}

function mdeditorButtonPreview (elementName) {
	$('#MDEditor_' + elementName + '_body_actioncontainer_content').empty().css('vertical-align', 'middle').html("<img class='MDEditor_ajaxloader' src='" + mdeditor.url + "img/ajax.gif' alt='AJAX load' />");
	$('#MDEditor_' + elementName + '_body_actioncontainer').fadeIn(200);
	$('#MDEditor_' + elementName + '_body_optioncontainer').fadeOut(200, function () {
		$('#MDEditor_' + elementName + '_body_optioncontainer_content').empty().css('vertical-align', 'top');
	});

	var editorValue;
	var language;
	language = mdeditor.lang;
	editorValue = $('#MDEditor_' + elementName + '_body_edit_textarea').val();
	if (typeof editorValue == 'undefined' || editorValue == '') {
		editorValue = '<div class="alert alert-info"><i class="fa fa-info-circle"></i> ' + language.message.preview.empty + '</div>';
	}

	var websitePath;
	websitePath = location.href;

	$.ajax({
		type: 'GET',
		url: mdeditor.url + 'core/source/preview.php?markup=' + encodeURIComponent(editorValue),
		data: 'returnData',
		success: function (returnData) {
			$('#MDEditor_' + elementName + '_body_actioncontainer_content').fadeOut(80, function () {
				$('#MDEditor_' + elementName + '_body_actioncontainer_content').empty().css('vertical-align', 'top').html(returnData).fadeIn(80);
			});
		},
		error: function () {
			$('#MDEditor_' + elementName + '_body_actioncontainer_content').fadeOut(80, function () {
				$('#MDEditor_' + elementName + '_body_actioncontainer_content').empty().css('vertical-align', 'top').html('<div class="MDEditor_body_actioncontainer_content_error"><div class="alert alert-danger"><i class="fa fa-info-circle"></i> ' + language.message.error + '</div></div>').fadeIn(80);
			});
		}
	});
}

function mdeditorButtonHelp (elementName) {
	$('#MDEditor_' + elementName + '_body_actioncontainer_content').empty().css('vertical-align', 'middle').html("<img class='MDEditor_ajaxloader' src='" + mdeditor.url + "img/ajax.gif' alt='AJAX load' />");
	$('#MDEditor_' + elementName + '_body_actioncontainer').fadeIn(200);
	$('#MDEditor_' + elementName + '_body_optioncontainer').fadeOut(200, function () {
		$('#MDEditor_' + elementName + '_body_optioncontainer_content').empty().css('vertical-align', 'top');
	});

	var language;
	language = mdeditor.lang;

	$.ajax({
		type: 'GET',
		url: mdeditor.url + 'core/source/help.html',
		data: 'returnData',
		success: function (returnData) {
			$('#MDEditor_' + elementName + '_body_actioncontainer_content').fadeOut(80, function () {
				$('#MDEditor_' + elementName + '_body_actioncontainer_content').empty().css('vertical-align', 'top').html(returnData).fadeIn(80);
			});
		},
		error: function () {
			$('#MDEditor_' + elementName + '_body_actioncontainer_content').fadeOut(80, function () {
				$('#MDEditor_' + elementName + '_body_actioncontainer_content').empty().css('vertical-align', 'top').html('<div class="MDEditor_body_actioncontainer_content_error"><div class="alert alert-danger"><i class="fa fa-info-circle"></i> ' + language.message.error + '</div></div>').fadeIn(80);
			});
		}
	});
}

function mdeditorButtonCopyright (elementName) {
	$('#MDEditor_' + elementName + '_body_actioncontainer_content').empty().css('vertical-align', 'middle').html("<img class='MDEditor_ajaxloader' src='" + mdeditor.url + "img/ajax.gif' alt='AJAX load' />");
	$('#MDEditor_' + elementName + '_body_actioncontainer').fadeIn(200);
	$('#MDEditor_' + elementName + '_body_optioncontainer').fadeOut(200, function () {
		$('#MDEditor_' + elementName + '_body_optioncontainer_content').empty().css('vertical-align', 'top');
	});

	var language;
	language = mdeditor.lang;

	$.ajax({
		type: 'GET',
		url: mdeditor.url + 'core/source/copyright.html',
		data: 'returnData',
		success: function (returnData) {
			$('#MDEditor_' + elementName + '_body_actioncontainer_content').fadeOut(80, function () {
				$('#MDEditor_' + elementName + '_body_actioncontainer_content').empty().css('vertical-align', 'top').html('<div class="MDEditor_body_actioncontainer_content_copyright">' + returnData + '</div>').fadeIn(80);
			});
		},
		error: function () {
			$('#MDEditor_' + elementName + '_body_actioncontainer_content').fadeOut(80, function () {
				$('#MDEditor_' + elementName + '_body_actioncontainer_content').empty().css('vertical-align', 'top').html('<div class="MDEditor_body_actioncontainer_content_error"><div class="alert alert-danger"><i class="fa fa-info-circle"></i> ' + language.message.error + '</div></div>').fadeIn(80);
			});
		}
	});
}

// Option container buttons
function mdeditorOptioncontainerCancel (elementName) {
	$('#MDEditor_' + elementName + '_body_optioncontainer').fadeOut(200, function () {
		$('#MDEditor_' + elementName + '_body_optioncontainer_content').empty().css('vertical-align', 'top');
	});
	$('#MDEditor_' + elementName + '_hiddenarea').val('');
}

function mdeditorOptioncontainerInsertElement (elementName) {
	$('#MDEditor_' + elementName + '_body_optioncontainer').fadeOut(200, function () {
		$('#MDEditor_' + elementName + '_body_optioncontainer_content').empty().css('vertical-align', 'top');
	});
	$('#MDEditor_' + elementName + '_hiddenarea').val('');
}

// Action container buttons
function mdeditorActioncontainerCancel (elementName) {
	$('#MDEditor_' + elementName + '_body_actioncontainer').fadeOut(200, function () {
		$('#MDEditor_' + elementName + '_body_actioncontainer_content').empty().css('vertical-align', 'top');
	});
}

// Create the Editor
$.fn.mdeditor = function (settings) {
	var elementName;
	elementName = $(this).attr('name');
	mdeditor.elementName = elementName;

	if (typeof settings == 'undefined') {
		settings = {};
	}

	if (typeof settings.language == 'undefined') {
		settings.language = 'en-US';
	}

	if (typeof settings.width == 'undefined') {
		settings.width = '100%';
	}

	if (typeof settings.height == 'undefined') {
		settings.height = '250px';
	}

	if (typeof settings.specialBar == 'undefined') {
		settings.specialBar = false;
	}

	if (typeof settings.formControl == 'undefined') {
		settings.formControl = true;
	}

	if (typeof settings.codeIcon == 'undefined') {
		settings.codeIcon = true;
	}

	if (typeof settings.mailIcon == 'undefined') {
		settings.mailIcon = true;
	}

	if (typeof settings.phoneIcon == 'undefined') {
		settings.phoneIcon = false;
	}

	if (typeof settings.iconsIcon == 'undefined') {
		settings.iconsIcon = false;
	}

	if (typeof settings.helpIcon == 'undefined') {
		settings.helpIcon = true;
	}

	if (typeof settings.attachment == 'undefined') {
		settings.attachment = false;
	}

	if (typeof settings.preview == 'undefined') {
		settings.preview = true;
	}

	if (typeof settings.wordCounter == 'undefined') {
		settings.wordCounter = true;
	}

	if (typeof settings.includeTipsy == 'undefined') {
		settings.includeTipsy = true;
	}

	if (typeof settings.wordWrap == 'undefined') {
		settings.wordWrap = true;
	}

	if (typeof settings.theme == 'undefined') {
		settings.theme = false;
	}

	if (settings.theme !== false) {
		$('head').html($('head').html() + '<!-- MDEditor theme ' + settings.theme + ' --><link rel="stylesheet" type="text/css" href="' + mdeditor.url + 'themes/' + settings.theme + '/mdtheme.css" /><!-- MDEditor theme end -->');
	}

	if (settings.wordWrap === true) {
		settingsWordWrap = "wrap='on'";
	} else {
		settingsWordWrap = "wrap='off'";
	}

	var language;
	function getLang () {
		var returnVal;
		$.ajax({
			url: mdeditor.url + 'core/lang/' + settings.language + '.json',
			type: 'POST',
			dataType: 'json',
			data: 'data',
			async: false,
			success: function (data) {
				returnVal = data;
			}
		});
		return returnVal;
	}
	language = getLang();
	mdeditor.lang = language;

	if (settings.formControl === true) {
		settingsFormControl = "<div class='btn-group' style='float: left;'><button type='submit' class='btn btn-default tipNDelay' title='" + language.button.save + "'><i class='fa fa-save'></i></button><button type='reset' class='btn btn-default tipNDelay' title='" + language.button.reset + "'><i class='fa fa-trash-o'></i></button><button type='button' class='btn btn-default tipNDelay' title='" + language.button.cancel + "' onclick='history.back();'><i class='fa fa-times'></i></button></div>";
	} else {
		settingsFormControl = '';
	}

	if (settings.codeIcon === true) {
		settingsCodeIcon = "<button id='MDEditor_" + elementName + "_buttons_button_code' type='button' class='btn btn-default tipNDelay' title='" + language.button.code + "' onclick='mdeditorButtonCode(\"" + elementName + "\");'><i class='fa fa-code'></i></button>";
	} else {
		settingsCodeIcon = '';
	}

	if (settings.mailIcon === true) {
		settingsMailIcon = "<button id='MDEditor_" + elementName + "_buttons_button_mail' type='button' class='btn btn-default tipNDelay' title='" + language.button.mail + "' onclick='mdeditorButtonMail(\"" + elementName + "\");'><i class='fa fa-envelope-o'></i></button>";
	} else {
		settingsMailIcon = '';
	}

	if (settings.phoneIcon === true) {
		settingsPhoneIcon = "<button id='MDEditor_" + elementName + "_buttons_button_phone' type='button' class='btn btn-default tipNDelay' title='" + language.button.phone + "' onclick='mdeditorButtonPhone(\"" + elementName + "\");'><i class='fa fa-phone'></i></button>";
	} else {
		settingsPhoneIcon = '';
	}

	if (settings.mailIcon === false && settings.phoneIcon === false) {
		settingsMailIconPhoneIcon = '';
	} else {
		settingsMailIconPhoneIcon = "<div class='btn-group' style='float: left;'>" + settingsMailIcon + settingsPhoneIcon + "</div>";
	}

	if (settings.iconsIcon === true) {
		settingsIconsIcon = "<div class='btn-group' style='float: left;'><button id='MDEditor_" + elementName + "_buttons_button_icons' type='button' class='btn btn-default tipNDelay' title='" + language.button.icons + "' onclick='mdeditorButtonIcons(\"" + elementName + "\");'><i class='fa fa-flag'></i></button></div>";
	} else {
		settingsIconsIcon = '';
	}

	if (settings.helpIcon === true) {
		settingsHelpIcon = "<button id='MDEditor_" + elementName + "_buttons_button_help' type='button' class='btn btn-default tipN' title='" + language.button.help + "' onclick='mdeditorButtonHelp(\"" + elementName + "\");'><i class='fa fa-question'></i></button>";
	} else {
		settingsHelpIcon = '';
	}

	if (settings.preview === true) {
		settingsPreview = "<button id='MDEditor_" + elementName + "_buttons_button_preview' type='button' class='btn btn-default' onclick='mdeditorButtonPreview(\"" + elementName + "\");'><i class='fa fa-laptop'></i> " + language.button.preview + "</button>";
	} else {
		settingsPreview = '';
	}

	if (settings.helpIcon === false && settings.preview === false) {
		settingsHelpIconPreview = '';
	} else {
		settingsHelpIconPreview = "<div class='btn-group' style='float: right;'>" + settingsPreview + settingsHelpIcon + "</div>";
	}

	if (settings.attachment === true) {
		settingsAttachment = "<div class='btn-group' style='float: right;'><button id='MDEditor_" + elementName + "_buttons_button_attachment' type='button' class='btn btn-default' onclick='mdeditorButtonAttachment(\"" + elementName + "\");'><i class='fa fa-paperclip'></i> " + language.button.attachment + "</button></div>";
	} else {
		settingsAttachment = '';
	}

	if (settings.wordCounter === true) {
		settingsWordCounter = "<p style='display: inline; float: left;'><b>" + language.label.wordCounter + ":</b> <span id='MDEditor_" + elementName + "_footer_wordcounter'>0</span></p>";
	} else {
		settingsWordCounter = "<p style='display: none; float: left;'><b>" + language.label.wordCounter + ":</b> <span id='MDEditor_" + elementName + "_footer_wordcounter'>0</span></p>";
	}

	if (settings.specialBar === true) {
		settingsSpecialBar = "<div id='MDEditor_" + elementName + "_buttons_toolbar_special' class='btn-toolbar' style='margin-bottom: 5px;'>" + settingsFormControl + "<div class='btn-group' style='float: left;'><button id='MDEditor_" + elementName + "_buttons_button_table' type='button' class='btn btn-default tipNDelay' title='" + language.button.table + "' onclick='mdeditorButtonTable(\"" + elementName + "\");'><i class='fa fa-table'></i></button><button id='MDEditor_" + elementName + "_buttons_button_quotation' type='button' class='btn btn-default tipNDelay' title='" + language.button.quotation + "' onclick='mdeditorButtonQuotation(\"" + elementName + "\");'><i class='fa fa-quote-left'></i></button><button id='MDEditor_" + elementName + "_buttons_button_anchor' type='button' class='btn btn-default tipNDelay' title='" + language.button.anchor + "' onclick='mdeditorButtonAnchor(\"" + elementName + "\");'><i class='fa fa-anchor'></i></button><button id='MDEditor_" + elementName + "_buttons_button_hr' type='button' class='btn btn-default tipNDelay' title='" + language.button.hr + "' onclick='mdeditorButtonHr(\"" + elementName + "\");'><i class='fa fa-minus'></i></button></div><div class='btn-group' style='float: left;'><button id='MDEditor_" + elementName + "_buttons_button_youtube' type='button' class='btn btn-default tipNDelay' title='" + language.button.youtube + "' onclick='mdeditorButtonYoutube(\"" + elementName + "\");'><i class='fa fa-youtube-play'></i></button>" + settingsCodeIcon + "</div>" + settingsMailIconPhoneIcon + settingsIconsIcon + settingsAttachment + "</div>";
	} else {
		settingsSpecialBar = '';
	}

	if (settings.includeTipsy === true) {
		settingsIncludeTipsy = "<script type='text/javascript' language='javascript' src='" + mdeditor.url + "core/tipsy.js'></script>";
	} else {
		settingsIncludeTipsy = '';
	}

	var value;
	value = $(this).val();

	var date;
	date = new Date();

	var EditorHTMLCode;
	EditorHTMLCode = "<!-- MD Editor start © 2014 Andre Sieverding -->";
	EditorHTMLCode += "<div id='MDEditor_" + elementName + "' class='MDEditor' style='width: " + settings.width + ";'><textarea id='MDEditor_" + elementName + "_hiddenarea' style='display: none !important;'></textarea><div id='MDEditor_" + elementName + "_buttons' class='MDEditor_buttons'>" + settingsSpecialBar + "<div id='MDEditor_" + elementName + "_buttons_toolbar_basic' class='btn-toolbar'><div class='btn-group' style='float: left;'><button id='MDEditor_" + elementName + "_buttons_button_bold' type='button' class='btn btn-default tipNDelay' title='" + language.button.bold + "' onclick='mdeditorButtonBold(\"" + elementName + "\");'><i class='fa fa-bold'></i></button><button id='MDEditor_" + elementName + "_buttons_button_italic' type='button' class='btn btn-default tipNDelay' title='" + language.button.italic + "' onclick='mdeditorButtonItalic(\"" + elementName + "\");'><i class='fa fa-italic'></i></button><button id='MDEditor_" + elementName + "_buttons_button_underline' type='button' class='btn btn-default tipNDelay' title='" + language.button.underline + "' onclick='mdeditorButtonUnderline(\"" + elementName + "\");'><i class='fa fa-underline'></i></button><button id='MDEditor_" + elementName + "_buttons_button_strikethrough' type='button' class='btn btn-default tipNDelay' title='" + language.button.strikethrough + "' onclick='mdeditorButtonStrikethrough(\"" + elementName + "\");'><i class='fa fa-strikethrough'></i></button></div><div class='btn-group' style='float: left;'><button id='MDEditor_" + elementName + "_buttons_button_olist' type='button' class='btn btn-default tipNDelay' title='" + language.button.olist + "' onclick='mdeditorButtonOList(\"" + elementName + "\");'><i class='fa fa-list-ol'></i></button><button id='MDEditor_" + elementName + "_buttons_button_ulist' type='button' class='btn btn-default tipNDelay' title='" + language.button.ulist + "' onclick='mdeditorButtonUList(\"" + elementName + "\");'><i class='fa fa-list-ul'></i></button></div><div class='btn-group' style='float: left;'><button id='MDEditor_" + elementName + "_buttons_button_hyperlink' type='button' class='btn btn-default tipNDelay' title='" + language.button.hyperlink + "' onclick='mdeditorButtonHyperlink(\"" + elementName + "\");'><i class='fa fa-chain'></i></button><button id='MDEditor_" + elementName + "_buttons_button_unlink' type='button' class='btn btn-default tipNDelay' title='" + language.button.unlink + "' onclick='mdeditorButtonUnlink(\"" + elementName + "\");'><i class='fa fa-unlink'></i></button><button id='MDEditor_" + elementName + "_buttons_button_image' type='button' class='btn btn-default tipNDelay' title='" + language.button.image + "' onclick='mdeditorButtonImage(\"" + elementName + "\");'><i class='fa fa-picture-o'></i></button></div>" + settingsHelpIconPreview + "</div></div><div id='MDEditor_" + elementName + "_body' class='MDEditor_body'><div id='MDEditor_" + elementName + "_body_edit'><textarea id='MDEditor_" + elementName + "_body_edit_textarea' class='MDEditor_body_edit_textarea' name='" + elementName + "' style='height: " + settings.height + ";' onclick='$(\"#MDEditor_" + elementName + "_body_edit_textarea\").textareaWordCounter(\"" + elementName + "\");' onchange='$(\"#MDEditor_" + elementName + "_body_edit_textarea\").textareaWordCounter(\"" + elementName + "\");' onkeyup='$(\"#MDEditor_" + elementName + "_body_edit_textarea\").textareaWordCounter(\"" + elementName + "\");' " + settingsWordWrap + ">" + value + "</textarea></div><div id='MDEditor_" + elementName + "_body_actioncontainer' class='MDEditor_body_actioncontainer'><div><div><a onclick='mdeditorActioncontainerCancel(\"" + elementName + "\");' class='tipW' title='" + language.tooltip.close + "'><i class='fa fa-times'></i></a></div><div><div id='MDEditor_" + elementName + "_body_actioncontainer_content' class='MDEditor_body_actioncontainer_content'></div></div></div></div><div id='MDEditor_" + elementName + "_body_optioncontainer' class='MDEditor_body_optioncontainer'><div><div><div id='MDEditor_" + elementName + "_body_optioncontainer_content' class='MDEditor_body_optioncontainer_content'></div></div><div><div id='MDEditor_" + elementName + "_body_optioncontainer_buttons' class='MDEditor_body_optioncontainer_buttons'><button type='button' class='btn btn-default' onclick='mdeditorOptioncontainerCancel(\"" + elementName + "\");'>" + language.button.frame.cancel + "</button> <button type='button' class='btn btn-primary' onclick='mdeditorOptioncontainerInsertElement(\"" + elementName + "\");'>" + language.button.frame.insert + "</button></div></div></div></div></div></div><div id='MDEditor_" + elementName + "_footer' class='MDEditor_footer'>" + settingsWordCounter + "<p style='display: inline; float: right;'>© " + date.getFullYear() + " <a onclick='mdeditorButtonCopyright(\"" + elementName + "\")'>Andre Sieverding</a></p></div><div id='MDEditor_" + elementName + "_jsarea'>" + settingsIncludeTipsy + "<script type='text/javascript' language='javascript' src='" + mdeditor.url + "core/tooltips.js'></script><script type='text/javascript' language='javascript' src='" + mdeditor.url + "core/textrange.js'></script></div></div>";
	EditorHTMLCode += "<!-- MD Editor end -->";

	$(this).replaceWith(EditorHTMLCode);
};