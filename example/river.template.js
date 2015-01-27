(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['river.hbs'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <li class=\"widget-river--results--item\">\n          <span class=\"widget-river--results--number\">"
    + escapeExpression(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"count","hash":{},"data":data}) : helper)))
    + "</span>\n\n          <div class=\"widget-river--results--type\">\n            <span class=\""
    + escapeExpression(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"icon","hash":{},"data":data}) : helper)))
    + "\"></span>\n            "
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\n          </div>\n        </li>\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <li><a href=\""
    + escapeExpression(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"location","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.linkTitle || (depth0 != null ? depth0.linkTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkTitle","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing, buffer = "<div class=\"widget-river\">\n  <header class=\"widget-river--header\">\n    <h1 class=\"widget-river--title\">I want content from</h1>\n    <select>\n      <option>This week</option>\n      <option>This month</option>\n      <option>This year</option>\n    </select>\n  </header>\n  <div class=\"widget-river--results clearfix\">\n    <div class=\"widget-river--results--graph\">\n      <ul class=\"widget-river--results-tabs clearfix\">\n";
  stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helperMissing),(options={"name":"content","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.content) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  buffer += "      </ul>\n      <div class=\"placeholder\">\n\n        <p class=\"graph--heading\">Week of January 5, 2015</p>\n        <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n   viewBox=\"58.5 102.8 760 421.7\" enable-background=\"new 58.5 102.8 760 421.7\" xml:space=\"preserve\">\n<line fill=\"none\" stroke=\"#DDDDDD\" stroke-miterlimit=\"10\" x1=\"99\" y1=\"501.2\" x2=\"99\" y2=\"108.3\"/>\n<text transform=\"matrix(1 0 0 1 82.9038 519.9932)\" fill=\"#8C8E93\"  font-size=\"10.5432\">5 JAN</text>\n<line fill=\"none\" stroke=\"#DDDDDD\" stroke-miterlimit=\"10\" x1=\"201.3\" y1=\"501.2\" x2=\"201.3\" y2=\"108.3\"/>\n<text transform=\"matrix(1 0 0 1 184.9966 519.9932)\" fill=\"#8C8E93\"  font-size=\"10.5432\">6 JAN</text>\n<line fill=\"none\" stroke=\"#DDDDDD\" stroke-miterlimit=\"10\" x1=\"302.7\" y1=\"501.2\" x2=\"302.7\" y2=\"108.3\"/>\n<text transform=\"matrix(1 0 0 1 285.3296 519.9932)\" fill=\"#8C8E93\"  font-size=\"10.5432\">7 JAN</text>\n<line fill=\"none\" stroke=\"#DDDDDD\" stroke-miterlimit=\"10\" x1=\"404\" y1=\"501.2\" x2=\"404\" y2=\"108.3\"/>\n<text transform=\"matrix(1 0 0 1 387.6631 519.9932)\" fill=\"#8C8E93\"  font-size=\"10.5432\">8 JAN</text>\n<line fill=\"none\" stroke=\"#DDDDDD\" stroke-miterlimit=\"10\" x1=\"505.3\" y1=\"501.2\" x2=\"505.3\" y2=\"108.3\"/>\n<text transform=\"matrix(1 0 0 1 489.9961 519.9932)\" fill=\"#8C8E93\"  font-size=\"10.5432\">9 JAN</text>\n<line fill=\"none\" stroke=\"#DDDDDD\" stroke-miterlimit=\"10\" x1=\"606.7\" y1=\"501.2\" x2=\"606.7\" y2=\"108.3\"/>\n<text transform=\"matrix(1 0 0 1 586.9932 519.9932)\" fill=\"#8C8E93\"  font-size=\"10.5432\">10 JAN</text>\n<line fill=\"none\" stroke=\"#DDDDDD\" stroke-miterlimit=\"10\" x1=\"708\" y1=\"501.2\" x2=\"708\" y2=\"108.3\"/>\n<text transform=\"matrix(1 0 0 1 688.3262 519.9932)\" fill=\"#8C8E93\"  font-size=\"10.5432\">11 JAN</text>\n<line fill=\"none\" stroke=\"#DDDDDD\" stroke-miterlimit=\"10\" x1=\"810.3\" y1=\"501.2\" x2=\"810.3\" y2=\"108.3\"/>\n<path fill=\"#8C8E93\" d=\"M100,501L100,501h710.4l0,0\"/>\n<g transform=\"translate(0,450)\">\n  <line fill=\"none\" stroke=\"#DDDDDD\" stroke-miterlimit=\"10\" x1=\"98.5\" y1=\"51\" x2=\"810.4\" y2=\"51\"/>\n</g>\n<line fill=\"none\" stroke=\"#DDDDDD\" stroke-miterlimit=\"10\" x1=\"98.5\" y1=\"444.8\" x2=\"810.4\" y2=\"444.8\"/>\n<text transform=\"matrix(1 0 0 1 73.3262 448.59)\" fill=\"#8C8E93\"  font-size=\"12\">0%</text>\n<line fill=\"none\" stroke=\"#DDDDDD\" stroke-miterlimit=\"10\" x1=\"98.5\" y1=\"388.5\" x2=\"810.4\" y2=\"388.5\"/>\n<text transform=\"matrix(0.9367 0 0 1 66.6524 392.3398)\" fill=\"#8C8E93\"  font-size=\"12\">20%</text>\n<line fill=\"none\" stroke=\"#DDDDDD\" stroke-miterlimit=\"10\" x1=\"98.5\" y1=\"332.2\" x2=\"810.4\" y2=\"332.2\"/>\n<text transform=\"matrix(0.9367 0 0 1 66.6524 336.0898)\" fill=\"#8C8E93\"  font-size=\"12\">40%</text>\n<line fill=\"none\" stroke=\"#DDDDDD\" stroke-miterlimit=\"10\" x1=\"98.5\" y1=\"276\" x2=\"810.4\" y2=\"276\"/>\n<text transform=\"matrix(0.9367 0 0 1 66.6524 279.8398)\" fill=\"#8C8E93\"  font-size=\"12\">60%</text>\n<line fill=\"none\" stroke=\"#DDDDDD\" stroke-miterlimit=\"10\" x1=\"98.5\" y1=\"219.8\" x2=\"810.4\" y2=\"219.8\"/>\n<text transform=\"matrix(0.9367 0 0 1 66.6524 223.5898)\" fill=\"#8C8E93\"  font-size=\"12\">80%</text>\n<line fill=\"none\" stroke=\"#DDDDDD\" stroke-miterlimit=\"10\" x1=\"98.5\" y1=\"163.5\" x2=\"810.4\" y2=\"163.5\"/>\n<text transform=\"matrix(0.9367 0 0 1 66.6524 167.3398)\" fill=\"#8C8E93\"  font-size=\"12\">100%</text>\n<line fill=\"none\" stroke=\"#DDDDDD\" stroke-miterlimit=\"10\" x1=\"98.5\" y1=\"107.2\" x2=\"810.4\" y2=\"107.2\"/>\n<path fill=\"none\" class=\"graph-maps\" stroke-width=\"6\" stroke-miterlimit=\"10\" d=\"M100,444.8l50.7-33.8l50.7-56.2L252,366l50.7-45\n  l50.7,13.8l50.7,93.8l50.7-56.2l50.7-11.2l50.7-45l50.7-78.8l50.7,56.2L708,271l50.7-45l50.7-35\"/>\n<path fill=\"none\" class=\"graph-jobs\" stroke-width=\"6\" stroke-miterlimit=\"10\" d=\"M100,233.5l50.7-22.5l50.7,185l50.7-95l50.7,22.5\n  l50.7-56.2L404,346l50.7,45l50.7,11.2l50.7,56.2l50.7-73.8l50.7-13.8l50.7-55l50.7-11.2l50.7,56.2\"/>\n<path fill=\"none\" class=\"graph-reports\" stroke-width=\"6\" stroke-miterlimit=\"10\" d=\"M809.3,214.8L758.7,271L708,259.8l-50.7-55\n  L606.7,361L556,227.2l-50.7,56.2l-50.7,11.2l-50.7,45l-50.7,48.8l-50.7-116.2L252,254.8l-50.7-35l-50.7,125L100,322.2\"/>\n</svg>\n\n\n      </div>\n    </div>\n    <div class=\"widget-river--filters\">\n      <h5>Filter Results <span class=\"close\"></span></h5>\n      <ul>\n";
  stack1 = ((helper = (helper = helpers.defaultFilters || (depth0 != null ? depth0.defaultFilters : depth0)) != null ? helper : helperMissing),(options={"name":"defaultFilters","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.defaultFilters) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  return buffer + "      </ul>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
})();