// Copyright (c) 2017, Akshay and contributors
// For license information, please see license.txt

frappe.ui.form.on('Serial No', {
	refresh: function(frm) {

	},
	after_save: function(frm) {
		if (custom.serial_no.get_called_from != null) {
			frappe.set_route(custom.serial_no.get_called_from);
			custom.serial_no.set_called_from(null);
		}
	}
});
