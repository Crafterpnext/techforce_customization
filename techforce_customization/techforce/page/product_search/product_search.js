frappe.pages['product-search'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Product Search',
		single_column: true
	});
	$(frappe.render_template("product_search_main", this)).appendTo(this.page.main);

	this.page.main.find('#search_button').on('click', function() {
			var serial_no = $("div").find(`[data-fieldname='part_name']`)[0].value;

			frappe.model.with_doc('Product Status', serial_no, function() {
				var status_doc = frappe.model.get_doc('Product Status', serial_no);

				if (status_doc) {
					custom.serial_no.set_called_from(frappe.get_route());
					frappe.set_route("Form","Product Status", serial_no);
				} else {
		                        frappe.model.with_doc('Serial No', serial_no, function() {
                		                var serial_doc = frappe.model.get_doc('Serial No', serial_no);

						if (serial_doc) {
							custom.serial_no.set_called_from(frappe.get_route());
							frappe.new_doc('Product Status', {'serial_no':serial_no});
						} else { 
							custom.serial_no.set_called_from(frappe.get_route());
							frappe.new_doc('Serial No',{'serial_no':serial_no});
						}
					});
				}
			});
	});

}
