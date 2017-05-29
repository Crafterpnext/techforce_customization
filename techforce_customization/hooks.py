# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "techforce_customization"
app_title = "Techforce Customization"
app_publisher = "Akshay"
app_description = "Customizations for Techforce"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "mehta.akshay@gmail.com"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/techforce_customization/css/techforce_customization.css"
app_include_js = ["/assets/techforce_customization/js/custom.js"]

# include js, css files in header of web template
# web_include_css = "/assets/techforce_customization/css/techforce_customization.css"
# web_include_js = "/assets/techforce_customization/js/techforce_customization.js"

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "techforce_customization.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "techforce_customization.install.before_install"
# after_install = "techforce_customization.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "techforce_customization.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"techforce_customization.tasks.all"
# 	],
# 	"daily": [
# 		"techforce_customization.tasks.daily"
# 	],
# 	"hourly": [
# 		"techforce_customization.tasks.hourly"
# 	],
# 	"weekly": [
# 		"techforce_customization.tasks.weekly"
# 	]
# 	"monthly": [
# 		"techforce_customization.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "techforce_customization.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "techforce_customization.event.get_events"
# }

