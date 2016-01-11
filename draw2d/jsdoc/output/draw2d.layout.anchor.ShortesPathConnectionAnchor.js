Ext.data.JsonP.draw2d_layout_anchor_ShortesPathConnectionAnchor({"tagname":"class","name":"draw2d.layout.anchor.ShortesPathConnectionAnchor","autodetected":{},"files":[{"filename":"ShortesPathConnectionAnchor.js","href":"ShortesPathConnectionAnchor.html#draw2d-layout-anchor-ShortesPathConnectionAnchor"}],"inheritable":true,"author":[{"tagname":"author","name":"Andreas Herz","email":null}],"extends":"draw2d.layout.anchor.ConnectionAnchor","members":[{"name":"constructor","tagname":"method","owner":"draw2d.layout.anchor.ShortesPathConnectionAnchor","id":"method-constructor","meta":{}},{"name":"getBox","tagname":"method","owner":"draw2d.layout.anchor.ShortesPathConnectionAnchor","id":"method-getBox","meta":{}},{"name":"getLocation","tagname":"method","owner":"draw2d.layout.anchor.ShortesPathConnectionAnchor","id":"method-getLocation","meta":{}},{"name":"getOwner","tagname":"method","owner":"draw2d.layout.anchor.ConnectionAnchor","id":"method-getOwner","meta":{}},{"name":"getReferencePoint","tagname":"method","owner":"draw2d.layout.anchor.ShortesPathConnectionAnchor","id":"method-getReferencePoint","meta":{}},{"name":"setOwner","tagname":"method","owner":"draw2d.layout.anchor.ConnectionAnchor","id":"method-setOwner","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-draw2d.layout.anchor.ShortesPathConnectionAnchor","short_doc":"The ChopboxAnchor's location is found by calculating the intersection of a\nline drawn from the center point of its ow...","component":false,"superclasses":["draw2d.layout.anchor.ConnectionAnchor"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/draw2d.layout.anchor.ConnectionAnchor' rel='draw2d.layout.anchor.ConnectionAnchor' class='docClass'>draw2d.layout.anchor.ConnectionAnchor</a><div class='subclass '><strong>draw2d.layout.anchor.ShortesPathConnectionAnchor</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/ShortesPathConnectionAnchor.html#draw2d-layout-anchor-ShortesPathConnectionAnchor' target='_blank'>ShortesPathConnectionAnchor.js</a></div></pre><div class='doc-contents'><p>The ChopboxAnchor's location is found by calculating the intersection of a\nline drawn from the center point of its owner's box (the parent of the\nconnection port) to a reference point on that box. A Connection using the\nChopBoxAnchor will be oriented such that they point to their port owner's\ncenter.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.anchor.ShortesPathConnectionAnchor'>draw2d.layout.anchor.ShortesPathConnectionAnchor</span><br/><a href='source/ShortesPathConnectionAnchor.html#draw2d-layout-anchor-ShortesPathConnectionAnchor-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.layout.anchor.ShortesPathConnectionAnchor-method-constructor' class='name expandable'>draw2d.layout.anchor.ShortesPathConnectionAnchor</a>( <span class='pre'>[owner]</span> ) : <a href=\"#!/api/draw2d.layout.anchor.ShortesPathConnectionAnchor\" rel=\"draw2d.layout.anchor.ShortesPathConnectionAnchor\" class=\"docClass\">draw2d.layout.anchor.ShortesPathConnectionAnchor</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>owner</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a> (optional)<div class='sub-desc'><p>the figure to use for the anchor calculation</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.layout.anchor.ShortesPathConnectionAnchor\" rel=\"draw2d.layout.anchor.ShortesPathConnectionAnchor\" class=\"docClass\">draw2d.layout.anchor.ShortesPathConnectionAnchor</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.layout.anchor.ConnectionAnchor-method-constructor\" rel=\"draw2d.layout.anchor.ConnectionAnchor-method-constructor\" class=\"docClass\">draw2d.layout.anchor.ConnectionAnchor.constructor</a></p></div></div></div><div id='method-getBox' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.anchor.ShortesPathConnectionAnchor'>draw2d.layout.anchor.ShortesPathConnectionAnchor</span><br/><a href='source/ShortesPathConnectionAnchor.html#draw2d-layout-anchor-ShortesPathConnectionAnchor-method-getBox' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.anchor.ShortesPathConnectionAnchor-method-getBox' class='name expandable'>getBox</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the bounds of this Anchor's owner. ...</div><div class='long'><p>Returns the bounds of this Anchor's owner. Subclasses can\noverride this method to adjust the box. Maybe you return the box\nof the port parent (the parent figure)</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The bounds of this Anchor's owner</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.layout.anchor.ConnectionAnchor-method-getBox\" rel=\"draw2d.layout.anchor.ConnectionAnchor-method-getBox\" class=\"docClass\">draw2d.layout.anchor.ConnectionAnchor.getBox</a></p></div></div></div><div id='method-getLocation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.anchor.ShortesPathConnectionAnchor'>draw2d.layout.anchor.ShortesPathConnectionAnchor</span><br/><a href='source/ShortesPathConnectionAnchor.html#draw2d-layout-anchor-ShortesPathConnectionAnchor-method-getLocation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.anchor.ShortesPathConnectionAnchor-method-getLocation' class='name expandable'>getLocation</a>( <span class='pre'>ref, inquiringConnection</span> ) : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the location where the Connection should be anchored in\nabsolute coordinates. ...</div><div class='long'><p>Returns the location where the Connection should be anchored in\nabsolute coordinates. The anchor may use the given reference\nPoint to calculate this location.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ref</span> : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><div class='sub-desc'><p>The reference Point in absolute coordinates</p>\n</div></li><li><span class='pre'>inquiringConnection</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>the connection who ask for the location.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a></span><div class='sub-desc'><p>The anchor's location</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.layout.anchor.ConnectionAnchor-method-getLocation\" rel=\"draw2d.layout.anchor.ConnectionAnchor-method-getLocation\" class=\"docClass\">draw2d.layout.anchor.ConnectionAnchor.getLocation</a></p></div></div></div><div id='method-getOwner' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.anchor.ConnectionAnchor' rel='draw2d.layout.anchor.ConnectionAnchor' class='defined-in docClass'>draw2d.layout.anchor.ConnectionAnchor</a><br/><a href='source/ConnectionAnchor.html#draw2d-layout-anchor-ConnectionAnchor-method-getOwner' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.anchor.ConnectionAnchor-method-getOwner' class='name expandable'>getOwner</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the Figure that contains this ConnectionAnchor. ...</div><div class='long'><p>Returns the Figure that contains this ConnectionAnchor.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a></span><div class='sub-desc'><p>The Figure that contains this ConnectionAnchor</p>\n</div></li></ul></div></div></div><div id='method-getReferencePoint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.anchor.ShortesPathConnectionAnchor'>draw2d.layout.anchor.ShortesPathConnectionAnchor</span><br/><a href='source/ShortesPathConnectionAnchor.html#draw2d-layout-anchor-ShortesPathConnectionAnchor-method-getReferencePoint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.anchor.ShortesPathConnectionAnchor-method-getReferencePoint' class='name expandable'>getReferencePoint</a>( <span class='pre'>inquiringConnection</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the bounds of this Anchor's owner. ...</div><div class='long'><p>Returns the bounds of this Anchor's owner. Subclasses can\noverride this method to adjust the box. Maybe you return the box\nof the port parent (the parent figure)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>inquiringConnection</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>the connection who ask for the location.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The bounds of this Anchor's owner</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.layout.anchor.ConnectionAnchor-method-getReferencePoint\" rel=\"draw2d.layout.anchor.ConnectionAnchor-method-getReferencePoint\" class=\"docClass\">draw2d.layout.anchor.ConnectionAnchor.getReferencePoint</a></p></div></div></div><div id='method-setOwner' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.anchor.ConnectionAnchor' rel='draw2d.layout.anchor.ConnectionAnchor' class='defined-in docClass'>draw2d.layout.anchor.ConnectionAnchor</a><br/><a href='source/ConnectionAnchor.html#draw2d-layout-anchor-ConnectionAnchor-method-setOwner' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.anchor.ConnectionAnchor-method-setOwner' class='name expandable'>setOwner</a>( <span class='pre'>owner</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the owner of the Anchor. ...</div><div class='long'><p>Set the owner of the Anchor.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>owner</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>the new owner of the anchor locator</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});