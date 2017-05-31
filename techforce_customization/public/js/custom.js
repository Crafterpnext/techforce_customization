frappe.provide('frappe');
frappe.provide('custom');

custom.serial_no = {};

custom.serial_no.called_from = null;

custom.serial_no.set_called_from = function(route) {
        custom.serial_no.called_from = route;
}

custom.serial_no.get_called_from = function() {
        return custom.serial_no.called_from;
}


