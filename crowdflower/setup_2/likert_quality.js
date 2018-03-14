// CF JQuery Hack
require(['jquery-noconflict'], function($) {

  //Ensure MooTools is where it must be
  Window.implement('$', function(el, nc){
    return document.id(el, nc, this.document);
  });

  var $ = window.jQuery;
  //jQuery goes here


// -------------------------
// Actual code


function validate(element){
  // get values of all checked checkboxes in an array
  var checked = $(element).closest('.checkboxes').find('input:checkbox:checked').map(function(){return $(this).val()}).get();;
  // the actual check
  if ((checked.indexOf('missing') > -1 || checked.indexOf('added') > -1) && checked.indexOf('ok') > -1){
    return false;
  }
  return true;
}


// CrowdFlower-recommended custom validation
// see https://success.crowdflower.com/hc/en-us/articles/201855879-Javascript-Guide-to-Customizing-a-CrowdFlower-Validator
// This if/else block is used to hijack the functionality of an existing validator (specifically: yext_no_international_url)
if (!_cf_cml.digging_gold) {
  CMLFormValidator.addAllThese([
    ['yext_no_international_url', {
      errorMessage: function(element) {
        return 'Your selection is not valid (perfect coverage and added/missing information are not compatible).';
      },
      validate: function(element, props) {
        // validate must return true or false
        return validate(element);
      }
    }]
  ]);
}
else {
  CMLFormValidator.addAllThese([
    ['yext_no_international_url', {
      validate: function(element, props) {
        return true;
      }
    }]
  ]);
}

// End CF JQuery hack
});
