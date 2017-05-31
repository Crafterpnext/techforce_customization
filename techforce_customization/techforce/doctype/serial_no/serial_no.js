// Copyright (c) 2017, Akshay and contributors
// For license information, please see license.txt

frappe.ui.form.on('Serial No', {
	refresh: function(frm) {

	},
	after_save: function(frm) {
                frappe.model.with_doc('Product Status', frm.doc.serial_no, function() {
                        var status_doc = frappe.model.get_doc('Product Status', frm.doc.serial_no);
			if (status_doc == null) {
	  	                frappe.new_doc('Product Status',{'serial_no':frm.doc.serial_no});
			} else {
				frappe.set_route(status_doc);
			}
		});
	}
});
