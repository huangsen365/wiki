(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{308:function(e,t,a){"use strict";a.r(t);var o=a(13),i=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"elevate-contribution-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elevate-contribution-guide"}},[e._v("#")]),e._v(" ELevate Contribution Guide")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("This guide contains information for the current Package Evolution Service set. There might be some changes soon.")])]),e._v(" "),t("h2",{attrs:{id:"about-package-evolution-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#about-package-evolution-service"}},[e._v("#")]),e._v(" About Package Evolution Service")]),e._v(" "),t("p",[e._v("AlmaLinux launched the "),t("a",{attrs:{href:"https://pes.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Package Evolution Service (PES)"),t("OutboundLink")],1),e._v(" to collect bug reports and issues and let the Community take part in the Project. This service provides the information for migration from one RHEL-based distribution to another between different major versions.")]),e._v(" "),t("p",[e._v("This guide describes how a user can contribute to the ELevate Project and helps one to proceed.")]),e._v(" "),t("h2",{attrs:{id:"service-review"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-review"}},[e._v("#")]),e._v(" Service review")]),e._v(" "),t("p",[e._v("You need to login via a GitHub account to use Package Evolution Service. If you are in any organization on GitHub, make sure that your status is public so your organization can be displayed on Package Evolution Service.")]),e._v(" "),t("p",[e._v("Let's start with the menu review to understand where to start. There are mentioned options:")]),e._v(" "),t("ul",[t("li",[e._v("Bulk upload")]),e._v(" "),t("li",[e._v("Dump")]),e._v(" "),t("li",[e._v("Add an action")]),e._v(" "),t("li",[e._v("List actions")]),e._v(" "),t("li",[e._v("List of registered users")]),e._v(" "),t("li",[e._v("Actions history")])]),e._v(" "),t("p",[e._v("Let's talk a bit about each item.")]),e._v(" "),t("p",[e._v("So, "),t("strong",[e._v("BULK UPLOAD")]),e._v(" option is only for AlmaLinux developers. It's not available for other users to work there. You'll have this result:")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/elevate_bulk-result.png",alt:"image"}})]),e._v(" "),t("p",[t("strong",[e._v("DUMP")]),e._v(" item allows you to choose what JSON to dump. There are a few more options. Source OS allows you to choose from what system you migrate. Target OS allows you to choose what system you want to migrate to - AlmaLinux, EuroLinux, CentOS Stream, Oracle Linux and Rocky Linux. The next option is GitHub organization, where you can choose migration rules for JSON. If you are in any organization that has its own migration rules, you can choose between AlmaLinux's rules and the organization's rules, or  choose all. If you are not in any organization, there are only AlmaLinux rules available.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/elevate_dump-json.png",alt:"image"}})]),e._v(" "),t("p",[e._v("After dumping is completed, the page will be automatically updated, and you'll see a JSON file. Here is an example of what you can have:")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/elevate_dump-result.png",alt:"image"}})]),e._v(" "),t("p",[t("strong",[e._v("ADD ACTION")]),e._v(" allows you to create a new action (rule) for migration and describe it. If you are not in any organization, AlmaLinux might approve your added action. If you are in an organization, you can add an already approved action.\nLet's see what you have to fill in. Here's an example:")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/elevate_add-action.png",alt:"image"}})]),e._v(" "),t("p",[e._v("First, you need to choose "),t("code",[e._v("action type")]),e._v(" depending on the action purpose.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/elevate_action-type.png",alt:"image"}})]),e._v(" "),t("ul",[t("li",[e._v("Present type indicates that a package is present already in the new version of the system you are migrating.")]),e._v(" "),t("li",[e._v("Removed type indicates that a package was removed from the OS you want to migrate, but it was present in its previous version.")]),e._v(" "),t("li",[e._v("Deprecated type indicates that a package is considered deprecated and may be removed later.")]),e._v(" "),t("li",[e._v("Replaced type indicates that a package was replaced with another in the new OS version.")]),e._v(" "),t("li",[e._v("Split type indicates that a package was split in the new OS version.")]),e._v(" "),t("li",[e._v("Merged type indicates that a few packages from the previous version were merged into one in the new OS version.")]),e._v(" "),t("li",[e._v("Moved type indicates that a package was moved to another repository in the new OS version.")]),e._v(" "),t("li",[e._v("Renamed type indicates that a package was renamed in the new OS version.")])]),e._v(" "),t("p",[e._v("The next step is to choose a "),t("code",[e._v("GitHub organization")]),e._v(" that displays what organization rules you can choose. If you are not in any organization, you have only AlmaLinux here. If you are, then you also have a list of your organizations additionally to AlmaLinux.")]),e._v(" "),t("p",[t("code",[e._v("Description")]),e._v(" item is designed to comment and describe anything about your action that helps get information about it.")]),e._v(" "),t("p",[t("code",[e._v("Source OS")]),e._v(" offers you to choose from what operating system you migrate. You also need to enter the system version here.")]),e._v(" "),t("p",[t("code",[e._v("Target OS")]),e._v(" offers you to choose to what operating system you are migrating. You can choose between AlmaLinux, EuroLinux, CentOS Stream, Oracle Linux and Rocky Linux. Again, enter the system version nearby.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("If you are adding action and the new rule works for all systems, you need to mark fields "),t("code",[e._v("source is generic")]),e._v(" and "),t("code",[e._v("target is generic")]),e._v(". If the rule works only for chosen systems, don't mark these fields.\n"),t("img",{attrs:{src:"/images/elevate_source.png",alt:"image"}})])]),e._v(" "),t("p",[e._v("Type your "),t("code",[e._v("architecture")]),e._v(" next or put them as a list via separating each item by a comma. Both x86_64 and arm64/aarch64 architectures are supported.")]),e._v(" "),t("p",[e._v("Specify what package you suggest replacing and what package removing in "),t("code",[e._v("in package set")]),e._v(" and "),t("code",[e._v("out package set")]),e._v(" options. Each package should be input as a separate row. The format of the row is name, repository, module_name, module_stream. Just leave an empty item if a package doesn't belong to a module.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Removed and Present action types don't have "),t("code",[e._v("out package set")]),e._v(".")])]),e._v(" "),t("p",[t("strong",[e._v("LIST OF ACTIONS")]),e._v(" allows you to see all the added actions, no matter their type and status. You can change all non-organization unapproved actions here if needed.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/elevate_list-of-actions.png",alt:"image"}})]),e._v(" "),t("p",[e._v("The "),t("em",[e._v('"eye"')]),e._v(" sign shows you all information about the action.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/elevate_action-ID.png",alt:"image"}})]),e._v(" "),t("p",[e._v("The "),t("em",[e._v('"clock"')]),e._v(" sign shows you the action's history if any changes have been made.")]),e._v(" "),t("p",[e._v("You'll also have the "),t("em",[e._v('"pen"')]),e._v(" sign that will allow editing all non-organization unapproved actions.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/elevate_edit-an-action.png",alt:"image"}})]),e._v(" "),t("p",[e._v("After editing is done, make sure you save it.")]),e._v(" "),t("p",[e._v("You can also search by package name - you'll see all the results for the packages that contain the name you put in the search line.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/elevate_search-an-action.png",alt:"image"}})]),e._v(" "),t("p",[t("strong",[e._v("LIST OF REGISTERED USERS")]),e._v(" allows you to see who has signed at all, no matter being in any organization. Username item links to a user's GitHub account, organization item links to an organization's GitHub account. History changes can show you what was done by the chosen user.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/elevate_list-of-users.png",alt:"image"}})]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[t("code",[e._v("Back to the list")]),e._v(" gets you to the "),t("code",[e._v("list of actions")]),e._v(", not to the "),t("code",[e._v("list of the registered users")]),e._v(".")])]),e._v(" "),t("p",[t("strong",[e._v("ACTIONS HISTORY")]),e._v(" displays all changes that users did. Username will get you user's GitHub account. Action ID will display all information about this action.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/elevate_actions-history.png",alt:"image"}})]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[t("code",[e._v("Back to the list")]),e._v(" gets you to the "),t("code",[e._v("list of actions")]),e._v(", not to the "),t("code",[e._v("actions history")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"extra-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extra-details"}},[e._v("#")]),e._v(" Extra details")]),e._v(" "),t("p",[e._v("Also, Package Evolution Service is useful that you can report an "),t("a",{attrs:{href:"https://github.com/AlmaLinux/pes",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue"),t("OutboundLink")],1),e._v(", visit "),t("a",{attrs:{href:"https://almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux home web-site"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://almalinux.org/blog//",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Blog"),t("OutboundLink")],1),e._v(", report any "),t("a",{attrs:{href:"https://bugs.almalinux.org/my_view_page.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("bug"),t("OutboundLink")],1),e._v(" and visit "),t("a",{attrs:{href:"https://github.com/AlmaLinux/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux GitHub"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/elevate_homebar.png",alt:"image"}})]),e._v(" "),t("p",[e._v("For more help and assistance, or if you want to discuss anything, you are very welcome on the "),t("a",{attrs:{href:"https://chat.almalinux.org/almalinux/channels/migration",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Community Chat"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=i.exports}}]);