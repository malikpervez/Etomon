$(document).ready(function() {
    //add more languages
    $("#add-lang-button").click(function() {
    	var lastField = $("#addlanguage div:last");
        var intId = (lastField && lastField.length && lastField.data("idx") + 1) || 1;
        var fieldWrapper = $("<div class=\"fieldwrapper custom-select-sm form-radius\" id=\"field" + intId + "\"/>");
        fieldWrapper.data("idx", intId);
        var fType = $("<select class=\"fieldtype\"><option value=\"checkbox\">English</option><option value=\"textbox\">Text</option><option value=\"textarea\">Paragraph</option></select>");
        var removeButton = $("<input type=\"button\" class=\"remove\" value=\"delete\" />");
        removeButton.click(function() {
            $(this).parent().remove();
        });
        fieldWrapper.append(fType);
        fieldWrapper.append(removeButton);
        $("#addlanguage").append(fieldWrapper);
    });
    //add more degrees
    $("#add-degree-button").click(function() {
        var lastField = $("#add-degree div:last");
        var intId = (lastField && lastField.length && lastField.data("idx") + 1) || 1;
        var fieldWrapper = $("<div class=\"fieldwrapper custom-select-sm form-radius\" id=\"field" + intId + "\"/>");
        fieldWrapper.data("idx", intId);
        var fType = $("<select class=\"fieldtype\"><option value=\"checkbox\">English</option><option value=\"textbox\">Text</option><option value=\"textarea\">Paragraph</option></select>");
        var removeButton = $("<input type=\"button\" class=\"remove\" value=\"delete\" />");
        removeButton.click(function() {
            $(this).parent().remove();
        });
        fieldWrapper.append(fType);
        fieldWrapper.append(removeButton);
        $("#add-degree").append(fieldWrapper);
    });

    $("#add-field-button").click(function() {
        var lastField = $("#add-field div:last");
        var intId = (lastField && lastField.length && lastField.data("idx") + 1) || 1;
        var fieldWrapper = $("<div class=\"fieldwrapper custom-select-sm form-radius\" id=\"field" + intId + "\"/>");
        fieldWrapper.data("idx", intId);
        var fType = $("<select class=\"fieldtype\"><option value=\"checkbox\">English</option><option value=\"textbox\">Text</option><option value=\"textarea\">Paragraph</option></select>");
        var removeButton = $("<input type=\"button\" class=\"remove\" value=\"delete\" />");
        removeButton.click(function() {
            $(this).parent().remove();
        });
        fieldWrapper.append(fType);
        fieldWrapper.append(removeButton);
        $("#add-field").append(fieldWrapper);
    });
});