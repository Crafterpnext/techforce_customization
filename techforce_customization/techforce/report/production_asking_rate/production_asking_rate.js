
frappe.query_reports["Production Asking Rate"] = {
        "filters": [
                {
                        "fieldname":"dt",
                        "label": "Date",
                        "fieldtype": "Date",
                        "default": get_today()
                },
                {
                        "fieldname":"pcode",
                        "label": "Product Code",
                        "fieldtype": "Link",
			"options": "Product",
			"default": "%%"
                }
        ]
}

