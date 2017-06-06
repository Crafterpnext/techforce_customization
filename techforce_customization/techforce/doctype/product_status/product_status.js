// Copyright (c) 2017, Akshay and contributors
// For license information, please see license.txt

frappe.ui.form.on('Product Status', {
	onload: function(frm) {
		//frm.events.hide_unhide_fields(frm);
	},
	refresh: function(frm) {
		//frm.events.hide_unhide_fields(frm);
	},
	after_save: function(frm) {
		if (custom.serial_no.get_called_from() != null) {
                        frappe.set_route(custom.serial_no.get_called_from());
                        custom.serial_no.set_called_from(null);
		}
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

frappe.ui.form.on('Product Status', 'serial_no', function(frm) {
	frm.add_fetch("serial_no", "product_code", "product_code");
});
