// Copyright (c) 2017, Akshay and contributors
// For license information, please see license.txt

frappe.ui.form.on('Product Status', {
	onload: function(frm) {
		//frm.events.hide_unhide_fields(frm);
	},
	refresh: function(frm) {
		//frm.events.hide_unhide_fields(frm);
	},
	hide_unhide_fields: function(frm) {
		if (frm.doc.moulding_completed_by == null || frm.__islocal) {
			frm.toggle_display("cutting", false);
			frm.toggle_display("painting", false);
			frm.toggle_display("dispatch", false);
		} else if (frm.doc.cutting_completed_by == null) {
			frm.toggle_display("painting", false);
			frm.toggle_display("dispatch", false);
		} else if (frm.doc.painting_completed_by == null) {
			frm.toggle_display("dispatch", false);
		} 
	}
});
