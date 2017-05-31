# -*- coding: utf-8 -*-
# Copyright (c) 2017, Akshay and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class ProductStatus(Document):
	def validate(self):
		if self.dispatched_on and self.dispatched_on < self.painting_completed_on:
			frappe.throw("Dispatch Date Cannot be less then Painting Date")

		if self.painting_completed_on and self.painting_completed_on < self.cutting_completed_on:
			frappe.throw("Painting Date Cannot be less then Cutting Date")

		if self.cutting_completed_on and self.cutting_completed_on < self.moulding_completed_on:
			frappe.throw("Cutting Date Cannot be less then Moulding Date") 
