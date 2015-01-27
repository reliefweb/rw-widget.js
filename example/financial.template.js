(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['financial.hbs'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "      <a href=\"\" class=\"financial-widget--data-source\">"
    + escapeExpression(((helper = (helper = helpers.dataItemTitle || (depth0 != null ? depth0.dataItemTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dataItemTitle","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"financial-widget\" id=\"widget-financial\">\n  <!--<h1 class=\"financial-widget--title\"><i class=\"un-icon-activity_financing\"></i> Financial</h1>-->\n  <div class=\"financial-widget--data-source-chooser\">\n";
  stack1 = ((helper = (helper = helpers.dataSources || (depth0 != null ? depth0.dataSources : depth0)) != null ? helper : helperMissing),(options={"name":"dataSources","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.dataSources) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\n  <div class=\"financial-widget--time\">\n      <h1>"
    + escapeExpression(((helper = (helper = helpers.dataItemTitleCurrent || (depth0 != null ? depth0.dataItemTitleCurrent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dataItemTitleCurrent","hash":{},"data":data}) : helper)))
    + "</h1>\n      <select class=\"financial-widget--time-select\" name=\"time-chooser\" id=\"\">\n      </select>\n  </div>\n  <div class=\"financial-widget--percent-funded\">\n      <div class=\"financial-widget--percent-funded--amount covered \">$2.12B Funded <span class=\"percent\">57% <span>covered</span></span></div>\n      <div class=\"financial-widget--percent-funded--amount requested \">$3.74B Requested</div>\n  </div>\n  <div class=\"financial-widget--cluster-funding\">\n    <h2>Requirements &amp; Funding Per Cluster</h2>\n    <svg id=\"finance-bubbles\" class=\"vertical\" width=\"421px\" height=\"714px\" viewBox=\"0 0 421 714\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n        <!-- Generator: Sketch 3.2.2 (9983) - http://www.bohemiancoding.com/sketch -->\n        <title>finance-bubbles</title>\n        <desc>Created with Sketch.</desc>\n        <defs></defs>\n        <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n            <g id=\"finance-bubbles\" sketch:type=\"MSLayerGroup\" transform=\"translate(-3.000000, 0.000000)\">\n                <g id=\"Page-1\">\n                    <g id=\"cluster-bubbles\">\n                        <g id=\"scale\">\n                            <path class=\"scale-line--percent\" d=\"M44.5,0.5 L44.5,713.938171\" id=\"percent-line\" stroke=\"#979797\" sketch:type=\"MSShapeGroup\"></path>\n                            <path class=\"scale-line\" d=\"M45.5,356.5 L423.501312,356.5\" id=\"Line\" stroke=\"#E7E7E7\" stroke-linecap=\"square\" sketch:type=\"MSShapeGroup\"></path>\n                            <path class=\"scale-line\" d=\"M45.5,1.5 L423.501312,1.5\" id=\"Line\" stroke=\"#E7E7E7\" stroke-linecap=\"square\" sketch:type=\"MSShapeGroup\"></path>\n                            <path class=\"scale-line\" d=\"M45.5,712.5 L423.501312,712.5\" id=\"Line\" stroke=\"#E7E7E7\" stroke-linecap=\"square\" sketch:type=\"MSShapeGroup\"></path>\n                            <path class=\"scale-line\" d=\"M45.5,640.5 L423.501312,640.5\" id=\"Line\" stroke=\"#E7E7E7\" stroke-linecap=\"square\" sketch:type=\"MSShapeGroup\"></path>\n                            <path class=\"scale-line\" d=\"M45.5,569.5 L423.501312,569.5\" id=\"Line\" stroke=\"#E7E7E7\" stroke-linecap=\"square\" sketch:type=\"MSShapeGroup\"></path>\n                            <path class=\"scale-line\" d=\"M45.5,498.5 L423.501312,498.5\" id=\"Line\" stroke=\"#E7E7E7\" stroke-linecap=\"square\" sketch:type=\"MSShapeGroup\"></path>\n                            <path class=\"scale-line\" d=\"M45.5,427.5 L423.501312,427.5\" id=\"Line\" stroke=\"#E7E7E7\" stroke-linecap=\"square\" sketch:type=\"MSShapeGroup\"></path>\n                            <path class=\"scale-line\" d=\"M45.5,285.5 L423.501312,285.5\" id=\"Line\" stroke=\"#E7E7E7\" stroke-linecap=\"square\" sketch:type=\"MSShapeGroup\"></path>\n                            <path class=\"scale-line\" d=\"M45.5,214.5 L423.501312,214.5\" id=\"Line\" stroke=\"#E7E7E7\" stroke-linecap=\"square\" sketch:type=\"MSShapeGroup\"></path>\n                            <path class=\"scale-line\" d=\"M45.5,143.5 L423.501312,143.5\" id=\"Line\" stroke=\"#E7E7E7\" stroke-linecap=\"square\" sketch:type=\"MSShapeGroup\"></path>\n                            <path class=\"scale-line\" d=\"M45.5,72.5 L423.501312,72.5\" id=\"Line\" stroke=\"#E7E7E7\" stroke-linecap=\"square\" sketch:type=\"MSShapeGroup\"></path>\n                            <text class=\"scale-number\" class=\"scale-line\" id=\"100%\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-family=\"Futura PT\" font-size=\"16\" font-weight=\"313\" sketch:alignment=\"middle\">\n                                <tspan x=\"0.692\" y=\"16\">100%</tspan>\n                            </text>\n                            <text class=\"scale-number\" id=\"0%\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-family=\"Futura PT\" font-size=\"16\" font-weight=\"313\" sketch:alignment=\"middle\">\n                                <tspan x=\"15.776\" y=\"709\">0%</tspan>\n                            </text>\n                            <text class=\"scale-number\" id=\"50%\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-family=\"Futura PT\" font-size=\"16\" font-weight=\"313\" sketch:alignment=\"middle\">\n                                <tspan x=\"7.732\" y=\"364\">50%</tspan>\n                            </text>\n                            <text class=\"scale-number\" id=\"25%\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-family=\"Futura PT\" font-size=\"16\" font-weight=\"313\" sketch:alignment=\"middle\">\n                                <tspan x=\"8.028\" y=\"542\">25%</tspan>\n                            </text>\n                            <text class=\"scale-number\" id=\"75%\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-family=\"Futura PT\" font-size=\"16\" font-weight=\"313\" sketch:alignment=\"middle\">\n                                <tspan x=\"8.436\" y=\"185\">75%</tspan>\n                            </text>\n                        </g>\n                        <g id=\"clusters\" transform=\"translate(67.000000, 36.000000)\">\n                            <g id=\"food-agriculture\" class=\"cluster-bubble\" transform=\"translate(164.000000, 283.000000)\">\n                                <circle id=\"Oval\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" cx=\"88\" cy=\"88\" r=\"88\"></circle>\n                                <g id=\"Food-&amp;-Agriculture\" transform=\"translate(32.000000, 84.000000)\" sketch:alignment=\"middle\" font-size=\"16\" font-family=\"Futura PT\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-weight=\"313\">\n                                    <text>\n                                        <tspan x=\"0.352\" y=\"16\">Food &amp; Agriculture</tspan>\n                                    </text>\n                                </g>\n                            </g>\n                            <g id=\"etc\" class=\"cluster-bubble small\" transform=\"translate(119.000000, 371.000000)\">\n                                <circle id=\"Oval\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" cx=\"15.5\" cy=\"15.5\" r=\"15.5\"></circle>\n                                <g id=\"ETC\" transform=\"translate(3.000000, 5.000000)\" sketch:alignment=\"middle\" font-size=\"16\" font-family=\"Futura PT\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-weight=\"313\">\n                                    <text>\n                                        <tspan x=\"0\" y=\"41\">ETC</tspan>\n                                    </text>\n                                </g>\n                            </g>\n                            <g id=\"nutrition\" class=\"cluster-bubble\" transform=\"translate(15.000000, 182.000000)\">\n                                <circle id=\"Oval\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" cx=\"41.5\" cy=\"41.5\" r=\"41.5\"></circle>\n                                <g id=\"Nutrition\" transform=\"translate(13.000000, 35.000000)\" sketch:alignment=\"middle\" font-size=\"16\" font-family=\"Futura PT\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-weight=\"313\">\n                                    <text>\n                                        <tspan x=\"0.7829375\" y=\"16\">Nutrition</tspan>\n                                    </text>\n                                </g>\n                            </g>\n                            <g id=\"nfi-shelter\" class=\"cluster-bubble\" transform=\"translate(92.000000, 436.000000)\">\n                                <circle id=\"Oval\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" cx=\"50\" cy=\"50\" r=\"50\"></circle>\n                                <g id=\"NFI-&amp;-Shelter\" transform=\"translate(6.000000, 41.000000)\" sketch:alignment=\"middle\" font-size=\"16\" font-family=\"Futura PT\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-weight=\"313\">\n                                    <text>\n                                        <tspan x=\"1.336375\" y=\"16\">NFI &amp; Shelter</tspan>\n                                    </text>\n                                </g>\n                            </g>\n                            <g id=\"health\" class=\"cluster-bubble\" transform=\"translate(177.000000, 0.000000)\">\n                                <circle id=\"Oval\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" cx=\"66\" cy=\"66\" r=\"66\"></circle>\n                                <g id=\"Cluster5\" transform=\"translate(38.000000, 59.000000)\" sketch:alignment=\"middle\" font-size=\"16\" font-family=\"Futura PT\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-weight=\"313\">\n                                    <text>\n                                        <tspan x=\"6.152\" y=\"16\">Health</tspan>\n                                    </text>\n                                </g>\n                            </g>\n                            <g id=\"water-sanitation\" class=\"cluster-bubble small\" transform=\"translate(86.000000, 75.000000)\">\n                                <circle id=\"Oval\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" cx=\"48.5\" cy=\"48.5\" r=\"48.5\"></circle>\n                                <g id=\"Cluster6\" transform=\"translate(22.000000, 41.000000)\" sketch:alignment=\"middle\" font-size=\"16\" font-family=\"Futura PT\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-weight=\"313\">\n                                    <text>\n                                        <tspan x=\"-30\" y=\"70\">Water &amp; Sanitation</tspan>\n                                    </text>\n                                </g>\n                            </g>\n                            <g id=\"protection\" class=\"cluster-bubble small\" transform=\"translate(22.000000, 577.000000)\">\n                                <circle id=\"Oval\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" cx=\"26\" cy=\"20\" r=\"20\"></circle>\n                                <g id=\"Cluster7\" transform=\"translate(0.000000, 9.000000)\" sketch:alignment=\"middle\" font-size=\"16\" font-family=\"Futura PT\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-weight=\"313\">\n                                    <text>\n                                        <tspan x=\"-2.8629375\" y=\"46\">Protection</tspan>\n                                    </text>\n                                </g>\n                            </g>\n                            <g id=\"camps\" class=\"cluster-bubble\" transform=\"translate(0.000000, 331.000000)\">\n                                <circle id=\"Oval\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" cx=\"51.5\" cy=\"51.5\" r=\"51.5\"></circle>\n                                <g id=\"Cluster8\" transform=\"translate(27.000000, 45.000000)\" sketch:alignment=\"middle\" font-size=\"16\" font-family=\"Futura PT\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-weight=\"313\">\n                                    <text>\n                                        <tspan x=\"0.8629375\" y=\"16\">Camps</tspan>\n                                    </text>\n                                </g>\n                            </g>\n                            <g id=\"recovery\" class=\"cluster-bubble small\" transform=\"translate(243.000000, 511.000000)\">\n                                <circle id=\"Oval\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" cx=\"24\" cy=\"24\" r=\"24\"></circle>\n                                <g id=\"Cluster9\" transform=\"translate(0.000000, 15.000000)\" sketch:alignment=\"middle\" font-size=\"16\" font-family=\"Futura PT\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-weight=\"313\">\n                                    <text>\n                                        <tspan x=\"-3.8629375\" y=\"46\">Recovery</tspan>\n                                    </text>\n                                </g>\n                            </g>\n                            <g id=\"education\" class=\"cluster-bubble\" transform=\"translate(110.000000, 206.000000)\">\n                                <circle id=\"Oval\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" cx=\"49\" cy=\"49\" r=\"49\"></circle>\n                                <g id=\"Cluster12\" transform=\"translate(14.000000, 42.000000)\" sketch:alignment=\"middle\" font-size=\"16\" font-family=\"Futura PT\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-weight=\"313\">\n                                    <text>\n                                        <tspan x=\"2.5697188\" y=\"14\">Education</tspan>\n                                    </text>\n                                </g>\n                            </g>\n                        </g>\n                        <g id=\"detail-overlay\" transform=\"translate(45.000000, 0.000000)\">\n                            <rect class=\"detail--block\" id=\"block\" fill-opacity=\"0.8\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" x=\"0\" y=\"0\" width=\"363\" height=\"714\"></rect>\n                            <circle class=\"detail--info\" id=\"info\" stroke=\"#979797\" stroke-width=\"5\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" cx=\"184\" cy=\"254\" r=\"160\"></circle>\n                            <g class=\"detail--text\" id=\"Nutrition\" transform=\"translate(122.000000, 210.000000)\" font-weight=\"313\" font-family=\"Futura PT\" fill=\"#000000\" sketch:alignment=\"middle\" font-size=\"16\" sketch:type=\"MSTextLayer\">\n                                <text class=\"detail--title\">\n                                    <tspan x=\"36.072\" y=\"16\">Nutrition</tspan>\n                                </text>\n                                <text id=\"62%-Covered\">\n                                    <tspan x=\"25.332\" y=\"38\">62% Covered</tspan>\n                                </text>\n                                <text id=\"30.0-Million-Requested\">\n                                    <tspan x=\"0.732\" y=\"60\">30.0 Million Requested</tspan>\n                                </text>\n                                <text id=\"18.5-Million-Funded\">\n                                    <tspan x=\"8.748\" y=\"82\">18.5 Million Funded</tspan>\n                                </text>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n    </svg>\n    <svg id=\"finance-bubbles\" class=\"horizontal\" width=\"714px\" height=\"403px\" viewBox=\"0 0 714 403\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n        <!-- Generator: Sketch 3.2.2 (9983) - http://www.bohemiancoding.com/sketch -->\n        <title>finance-bubbles</title>\n        <desc>Created with Sketch.</desc>\n        <defs></defs>\n        <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n            <g id=\"finance-bubbles\" sketch:type=\"MSLayerGroup\" transform=\"translate(357.000000, 203.500000) rotate(-270.000000) translate(-357.000000, -203.500000) translate(152.500000, -153.500000)\">\n                <g id=\"Page-1\">\n                    <g id=\"cluster-bubbles\">\n                        <g id=\"scale\">\n                            <path class=\"scale-line--percent\" d=\"M379,0 L379,713.438171\" id=\"percent-line\" stroke=\"#979797\" sketch:type=\"MSShapeGroup\"></path>\n                            <path class=\"scale-line\" d=\"M1.5,356.5 L379.501312,356.5\" id=\"Line\" stroke=\"#E7E7E7\" stroke-linecap=\"square\" sketch:type=\"MSShapeGroup\"></path>\n                            <path class=\"scale-line\" d=\"M1.5,1.5 L379.501312,1.5\" id=\"Line\" stroke=\"#E7E7E7\" stroke-linecap=\"square\" sketch:type=\"MSShapeGroup\"></path>\n                            <path class=\"scale-line\" d=\"M1.5,712.5 L379.501312,712.5\" id=\"Line\" stroke=\"#E7E7E7\" stroke-linecap=\"square\" sketch:type=\"MSShapeGroup\"></path>\n                            <path class=\"scale-line\" d=\"M1.5,640.5 L379.501312,640.5\" id=\"Line\" stroke=\"#E7E7E7\" stroke-linecap=\"square\" sketch:type=\"MSShapeGroup\"></path>\n                            <path class=\"scale-line\" d=\"M1.5,569.5 L379.501312,569.5\" id=\"Line\" stroke=\"#E7E7E7\" stroke-linecap=\"square\" sketch:type=\"MSShapeGroup\"></path>\n                            <path class=\"scale-line\" d=\"M1.5,498.5 L379.501312,498.5\" id=\"Line\" stroke=\"#E7E7E7\" stroke-linecap=\"square\" sketch:type=\"MSShapeGroup\"></path>\n                            <path class=\"scale-line\" d=\"M1.5,427.5 L379.501312,427.5\" id=\"Line\" stroke=\"#E7E7E7\" stroke-linecap=\"square\" sketch:type=\"MSShapeGroup\"></path>\n                            <path class=\"scale-line\" d=\"M1.5,285.5 L379.501312,285.5\" id=\"Line\" stroke=\"#E7E7E7\" stroke-linecap=\"square\" sketch:type=\"MSShapeGroup\"></path>\n                            <path class=\"scale-line\" d=\"M1.5,214.5 L379.501312,214.5\" id=\"Line\" stroke=\"#E7E7E7\" stroke-linecap=\"square\" sketch:type=\"MSShapeGroup\"></path>\n                            <path class=\"scale-line\" d=\"M1.5,143.5 L379.501312,143.5\" id=\"Line\" stroke=\"#E7E7E7\" stroke-linecap=\"square\" sketch:type=\"MSShapeGroup\"></path>\n                            <path class=\"scale-line\" d=\"M1.5,72.5 L379.501312,72.5\" id=\"Line\" stroke=\"#E7E7E7\" stroke-linecap=\"square\" sketch:type=\"MSShapeGroup\"></path>\n                            <text class=\"scale-number\" id=\"100%\" fill=\"#000000\" sketch:type=\"MSTextLayer\" transform=\"translate(394.000000, 22.000000) rotate(-90.000000) translate(-394.000000, -22.000000) \" font-family=\"Futura PT\" font-size=\"16\" font-weight=\"313\" sketch:alignment=\"middle\">\n                                <tspan x=\"375.192\" y=\"27.5\">100%</tspan>\n                            </text>\n                            <text class=\"scale-number\" id=\"0%\" fill=\"#000000\" sketch:type=\"MSTextLayer\" transform=\"translate(397.500000, 703.500000) rotate(-90.000000) translate(-397.500000, -703.500000) \" font-family=\"Futura PT\" font-size=\"16\" font-weight=\"313\" sketch:alignment=\"middle\">\n                                <tspan x=\"387.276\" y=\"709\">0%</tspan>\n                            </text>\n                            <text class=\"scale-number\" id=\"50%\" fill=\"#000000\" sketch:type=\"MSTextLayer\" transform=\"translate(394.000000, 358.500000) rotate(-90.000000) translate(-394.000000, -358.500000) \" font-family=\"Futura PT\" font-size=\"16\" font-weight=\"313\" sketch:alignment=\"middle\">\n                                <tspan x=\"379.232\" y=\"364\">50%</tspan>\n                            </text>\n                            <text class=\"scale-number\" id=\"25%\" fill=\"#000000\" sketch:type=\"MSTextLayer\" transform=\"translate(394.000000, 536.500000) rotate(-90.000000) translate(-394.000000, -536.500000) \" font-family=\"Futura PT\" font-size=\"16\" font-weight=\"313\" sketch:alignment=\"middle\">\n                                <tspan x=\"379.528\" y=\"542\">25%</tspan>\n                            </text>\n                            <text class=\"scale-number\" id=\"75%\" fill=\"#000000\" sketch:type=\"MSTextLayer\" transform=\"translate(394.000000, 179.500000) rotate(-90.000000) translate(-394.000000, -179.500000) \" font-family=\"Futura PT\" font-size=\"16\" font-weight=\"313\" sketch:alignment=\"middle\">\n                                <tspan x=\"379.936\" y=\"185\">75%</tspan>\n                            </text>\n                        </g>\n                        <g id=\"clusters\" transform=\"translate(23.000000, 34.000000)\">\n                            <g id=\"food-agriculture\" class=\"cluster-bubble\" transform=\"translate(164.000000, 285.000000)\">\n                                <circle id=\"Oval\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" cx=\"88\" cy=\"88\" r=\"88\"></circle>\n                                <g id=\"Food-&amp;-Agriculture\" transform=\"translate(80.000000, 35.000000)\" font-weight=\"313\" font-family=\"Futura PT\" fill=\"#000000\" sketch:alignment=\"middle\" font-size=\"16\" sketch:type=\"MSTextLayer\">\n                                    <text transform=\"translate(11.000000, 59.500000) rotate(-90.000000) translate(-11.000000, -59.500000) \">\n                                        <tspan x=\"-47.648\" y=\"65\">Food &amp; Agriculture</tspan>\n                                    </text>\n                                </g>\n                            </g>\n                            <g id=\"etc\" class=\"cluster-bubble small\" transform=\"translate(112.000000, 372.000000)\">\n                                <circle id=\"Oval\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" cx=\"15.5\" cy=\"16.5\" r=\"15.5\"></circle>\n                                <g id=\"ETC\" transform=\"translate(38.000000, 15.500000) rotate(-90.000000) translate(-38.000000, -15.500000) translate(25.000000, 5.000000)\" sketch:alignment=\"middle\" font-size=\"16\" font-family=\"Futura PT\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-weight=\"313\">\n                                    <text>\n                                        <tspan x=\"0.348\" y=\"16\">ETC</tspan>\n                                    </text>\n                                </g>\n                            </g>\n                            <g id=\"nutrition\" class=\"cluster-bubble\" transform=\"translate(15.000000, 184.000000)\">\n                                <circle id=\"Oval\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" cx=\"41.5\" cy=\"41.5\" r=\"41.5\"></circle>\n                                <g id=\"Nutrition\" transform=\"translate(40.500000, 45.500000) rotate(-90.000000) translate(-40.500000, -45.500000) translate(13.000000, 35.000000)\" sketch:alignment=\"middle\" font-size=\"16\" font-family=\"Futura PT\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-weight=\"313\">\n                                    <text>\n                                        <tspan x=\"0.7829375\" y=\"16\">Nutrition</tspan>\n                                    </text>\n                                </g>\n                            </g>\n                            <g id=\"nfi-shelter\" class=\"cluster-bubble\" transform=\"translate(92.000000, 438.000000)\">\n                                <circle id=\"Oval\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" cx=\"50\" cy=\"50\" r=\"50\"></circle>\n                                <g id=\"NFI-&amp;-Shelter\" transform=\"translate(48.500000, 51.500000) rotate(-90.000000) translate(-48.500000, -51.500000) translate(6.000000, 41.000000)\" sketch:alignment=\"middle\" font-size=\"16\" font-family=\"Futura PT\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-weight=\"313\">\n                                    <text>\n                                        <tspan x=\"1.336375\" y=\"16\">NFI &amp; Shelter</tspan>\n                                    </text>\n                                </g>\n                            </g>\n                            <g id=\"health\" class=\"cluster-bubble\" transform=\"translate(177.000000, 1.000000)\">\n                                <circle id=\"Oval\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" cx=\"66\" cy=\"67\" r=\"66\"></circle>\n                                <g id=\"Cluster5\" transform=\"translate(64.000000, 61.5) rotate(-90.000000) translate(-64.000000, -70.500000) translate(38.000000, 60.000000)\" sketch:alignment=\"middle\" font-size=\"16\" font-family=\"Futura PT\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-weight=\"313\">\n                                    <text>\n                                        <tspan x=\"0.152\" y=\"16\">Health</tspan>\n                                    </text>\n                                </g>\n                            </g>\n                            <g id=\"water-sanitation\" class=\"cluster-bubble small\" transform=\"translate(60.000000, 94.000000)\">\n                                <circle id=\"Oval\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" cx=\"48.5\" cy=\"48.5\" r=\"48.5\"></circle>\n                                <g id=\"Cluster6\" transform=\"translate(48.500000, 51.500000) rotate(-90.000000) translate(-48.500000, -51.500000) translate(22.000000, 41.000000)\" sketch:alignment=\"middle\" font-size=\"16\" font-family=\"Futura PT\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-weight=\"313\">\n                                    <text>\n                                        <tspan x=\"-30\" y=\"75\">Water &amp; Sanitation</tspan>\n                                    </text>\n                                </g>\n                            </g>\n                            <g id=\"protection\" class=\"cluster-bubble small\" transform=\"translate(28.000000, 572.000000)\">\n                                <circle id=\"Oval\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" cx=\"20\" cy=\"27\" r=\"20\"></circle>\n                                <g id=\"Cluster7\" transform=\"translate(48.500000, 27.000000) rotate(-90.000000) translate(-48.500000, -27.000000) translate(22.000000, 16.500000)\" sketch:alignment=\"middle\" font-size=\"16\" font-family=\"Futura PT\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-weight=\"313\">\n                                    <text>\n                                        <tspan x=\"-2.8629375\" y=\"16\">Protection</tspan>\n                                    </text>\n                                </g>\n                            </g>\n                            <g id=\"camps\" class=\"cluster-bubble\" transform=\"translate(0.000000, 333.000000)\">\n                                <circle id=\"Oval\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" cx=\"51.5\" cy=\"51.5\" r=\"51.5\"></circle>\n                                <g id=\"Cluster8\" transform=\"translate(53.500000, 55.500000) rotate(-90.000000) translate(-53.500000, -55.500000) translate(27.000000, 45.000000)\" sketch:alignment=\"middle\" font-size=\"16\" font-family=\"Futura PT\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-weight=\"313\">\n                                    <text>\n                                        <tspan x=\"0.8629375\" y=\"16\">Camps</tspan>\n                                    </text>\n                                </g>\n                            </g>\n                            <g id=\"recovery\" class=\"cluster-bubble small\" transform=\"translate(243.000000, 504.000000)\">\n                                <circle id=\"Oval\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" cx=\"24\" cy=\"33\" r=\"24\"></circle>\n                                <g id=\"Cluster9\" transform=\"translate(55.500000, 30.500000) rotate(-90.000000) translate(-55.500000, -30.500000) translate(25.000000, 21.000000)\" sketch:alignment=\"middle\" font-size=\"16\" font-family=\"Futura PT\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-weight=\"313\">\n                                    <text>\n                                        <tspan x=\"0.8629375\" y=\"16\">Recovery</tspan>\n                                    </text>\n                                </g>\n                            </g>\n                            <g id=\"education\" class=\"cluster-bubble\" transform=\"translate(110.000000, 208.000000)\">\n                                <circle id=\"Oval\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" cx=\"49\" cy=\"49\" r=\"49\"></circle>\n                                <g id=\"Cluster12\" transform=\"translate(44.000000, 52.500000) rotate(-90.000000) translate(-44.000000, -52.500000) translate(14.000000, 42.000000)\" sketch:alignment=\"middle\" font-size=\"16\" font-family=\"Futura PT\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-weight=\"313\">\n                                    <text>\n                                        <tspan x=\"2.5697188\" y=\"20\">Education</tspan>\n                                    </text>\n                                </g>\n                            </g>\n                        </g>\n                        <g id=\"detail-overlay\" transform=\"translate(1.000000, 0.000000)\">\n                            <rect class=\"detail--block\" id=\"block\" fill-opacity=\"0.8\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" x=\"0\" y=\"1.10218212e-15\" width=\"377.5\" height=\"714\"></rect>\n                            <circle class=\"detail--info\" id=\"info\" stroke=\"#979797\" stroke-width=\"5\" fill=\"#D8D8D8\" sketch:type=\"MSShapeGroup\" cx=\"181.5\" cy=\"357\" r=\"160\"></circle>\n                            <g class=\"detail--text\" id=\"Nutrition\" transform=\"translate(190.000000, 357.500000) rotate(-90.000000) translate(-190.000000, -357.500000) translate(116.500000, 314.000000)\" font-weight=\"313\" font-family=\"Futura PT\" fill=\"#000000\" sketch:alignment=\"middle\" font-size=\"16\" sketch:type=\"MSTextLayer\">\n                                <text class=\"detail--title\">\n                                    <tspan x=\"47.072\" y=\"16\">Nutrition</tspan>\n                                </text>\n                                <text id=\"62%-Covered\">\n                                    <tspan x=\"31.332\" y=\"38\">62% Covered</tspan>\n                                </text>\n                                <text id=\"30.0-Million-Requested\">\n                                    <tspan x=\"1.232\" y=\"60\">30.0 Million Requested</tspan>\n                                </text>\n                                <text id=\"18.5-Million-Funded\">\n                                    <tspan x=\"11.248\" y=\"82\">18.5 Million Funded</tspan>\n                                </text>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n    </svg>\n  </div>\n  <footer class=\"financial-widget--sources\">Data Source <cite><a href=\"\">Financial Tracking Service</a></cite></footer>\n  <footer class=\"financial-widget--explore\"><a href=\"\">Explore Funding Documents via ReliefWeb</a></footer>\n</div>";
},"useData":true});
})();