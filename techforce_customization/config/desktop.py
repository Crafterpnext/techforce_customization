# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from frappe import _

def get_data():
	return {
		"Techforce": {
			"module_name": "techforce",
			"color": "grey",
			"icon": "octicon octicon-file-directory",
			"type": "module",
			"label": _("Techforce")
		},
		"Product Search": {
			"module_name": "techforce",
			"color": "blue",
			"type": "page",
			"link": "product-search",
			"label": "Product Search"
		}
	}
