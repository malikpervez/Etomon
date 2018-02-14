//these functions add more dropdowns to a form as well as have delete and validations to max number of dropdowns needed
//to remove validations for max numbers take all js out of the 'else' statement and put it outside the if statement entirely
//then just remove the if statement. 
$(document).ready(function() {
    //add more languages
    $("#add-lang-button").click(function() {
    	var lastField = $("#addlanguage div:last");
        var intId = (lastField && lastField.length && lastField.data("idx") + 1) || 1;
        if(intId>=3){
            alert("Max 3 languages")
        } else {
            var fieldWrapper = $("<div class=\"fieldwrapper custom-select-sm form-radius\" id=\"field" + intId + "\"/>");
            fieldWrapper.data("idx", intId);
            var fType = $("<select style=\"height: 29px; width: 151px;\" class=\"fieldtype form-radius\"><option value=\"checkbox\">English</option><option value=\"textbox\">Text</option><option value=\"textarea\">Paragraph</option></select>");
            var removeButton = $("<input type=\"button\" class=\"remove delete-button\" value=\"Delete\" />");
            removeButton.click(function() {
                $(this).parent().remove();
            });
            fieldWrapper.append(fType);
            fieldWrapper.append(removeButton);
            $("#addlanguage").append(fieldWrapper);
        }
    });
    //add more degrees
    $("#add-degree-button").click(function() {
        var lastField = $("#add-degree div:last");
        var intId = (lastField && lastField.length && lastField.data("idx") + 1) || 1;
        if(intId>=2){
            alert("Max degrees is 2")
        } else {
        var fieldWrapper = $("<div class=\"fieldwrapper custom-select-sm form-radius\" id=\"field" + intId + "\"/>");
            fieldWrapper.data("idx", intId);
            var fType = $("<select style=\"height: 29px; width: 151px;\" class=\"fieldtype form-radius\"><option value=\"checkbox\">English</option><option value=\"textbox\">Text</option><option value=\"textarea\">Paragraph</option></select>");
            var removeButton = $("<input type=\"button\" class=\"remove delete-button\" value=\"Delete\" />");
            removeButton.click(function() {
                $(this).parent().remove();
            });
            fieldWrapper.append(fType);
            fieldWrapper.append(removeButton);
            $("#add-degree").append(fieldWrapper);
        }
    });
    //add more fields
    $("#add-field-button").click(function() {
        var lastField = $("#add-field div:last");
        var intId = (lastField && lastField.length && lastField.data("idx") + 1) || 1;
        if(intId>=5){
            alert("Max 5 Field of Study")
        } else {
            var fieldWrapper = $("<div class=\"fieldwrapper custom-select-sm form-radius\" id=\"field" + intId + "\"/>");
            fieldWrapper.data("idx", intId);
            var fType = $("<select style=\"height: 29px; width: 151px;\" class=\"fieldtype form-radius\"><option value=\"text\">English</option><option value=\"textbox\">Text</option><option value=\"textarea\">Paragraph</option></select>");
            var removeButton = $("<input type=\"button\" class=\"remove delete-button\" value=\"Delete\" />");
            removeButton.click(function() {
                $(this).parent().remove();
            });
            fieldWrapper.append(fType);
            fieldWrapper.append(removeButton);
            $("#add-field").append(fieldWrapper);
        }
    });
});