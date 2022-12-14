(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{285:function(t,a,n){"use strict";n.r(a);var r=n(13),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"how-to-create-a-public-mirror-for-almalinux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-a-public-mirror-for-almalinux"}},[t._v("#")]),t._v(" How to create a public mirror for AlmaLinux")]),t._v(" "),a("p",[t._v("Mirrors are extremely important to provide a fast and reliable\ninfrastructure, and we are very grateful to people and organizations that\nhelp us with this. The current list of public mirrors can be found on the\n"),a("a",{attrs:{href:"https://mirrors.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mirrors.almalinux.org"),a("OutboundLink")],1),t._v(" website.")]),t._v(" "),a("p",[t._v("You can create a public AlmaLinux mirror in 6 easy steps:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Make sure that you have enough free space: 700GB is the absolute minimum\nbut we recommend reserving at least 800GB.")])]),t._v(" "),a("li",[a("p",[t._v("Synchronize with the official AlmaLinux mirror via rsync:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("/usr/bin/rsync "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-avSH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'R .~tmp~'")]),t._v(" --delete-delay --delay-updates rsync://rsync.repo.almalinux.org/almalinux/ /almalinux/dir/on/your/server/\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Create a cron task to sync it periodically (we recommend updating the\nmirror every 3 hours):")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("0 */3 * * * sleep $(((RANDOM\\%3500)+1)) && /usr/bin/flock -n /var/run/almalinux_rsync.lock -c \"/usr/bin/rsync -avSH -f 'R .~tmp~' --delete-delay --delay-updates rsync://rsync.repo.almalinux.org/almalinux/ /almalinux/dir/on/your/server/\"\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Ensure the accuracy of GeoIP city, longitude, and latitude data for your mirror IP(s) with MaxMind at\n"),a("a",{attrs:{href:"https://www.maxmind.com/en/geoip-demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.maxmind.com/en/geoip-demo"),a("OutboundLink")],1),t._v(".\nSubmit a "),a("a",{attrs:{href:"https://www.maxmind.com/en/geoip-location-correction",target:"_blank",rel:"noopener noreferrer"}},[t._v("correction request"),a("OutboundLink")],1),t._v(" with accurate city data\nif the information is incorrect.")]),t._v(" "),a("p",[t._v("Our mirrorlist URL tries to serve the best mirror to a client based on GeoIP data\nso having accurate GeoIP data ensures the best possible experience for users.")])]),t._v(" "),a("li",[a("p",[t._v("Join the "),a("a",{attrs:{href:"https://lists.almalinux.org/mailman3/lists/mirror-announce.lists.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mirror-announce"),a("OutboundLink")],1),t._v(" mailing list to receive\nimportant mirror-related updates from the AlmaLinux team.")]),t._v(" "),a("p",[t._v("You may also consider joining the "),a("a",{attrs:{href:"https://lists.almalinux.org/mailman3/lists/mirror.lists.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mirror"),a("OutboundLink")],1),t._v(" mailing list for\ngeneral discussion/help related to mirrors.")]),t._v(" "),a("p",[t._v("We recommend joining the "),a("a",{attrs:{href:"https://chat.almalinux.org/almalinux/channels/mirrors",target:"_blank",rel:"noopener noreferrer"}},[t._v("mirrors channel on Mattermost"),a("OutboundLink")],1),t._v(" for any questions\nas well as updates from our team that impact mirror hosts in a live interactive format.")])]),t._v(" "),a("li",[a("p",[t._v("Fork the "),a("a",{attrs:{href:"https://github.com/AlmaLinux/mirrors/",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/AlmaLinux/mirrors"),a("OutboundLink")],1),t._v("\nrepository and create a pull request that will add a YAML file describing\nyour mirror to the "),a("code",[t._v("mirrors.d")]),t._v(" directory.\nYou can use the "),a("a",{attrs:{href:"https://github.com/AlmaLinux/mirrors/blob/master/mirrors.d/repo.almalinux.org.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("official AlmaLinux repo file"),a("OutboundLink")],1),t._v("\nas an example. Your mirror does not have to provide all the protocols\nthat our main mirror provides, but either HTTP or HTTPS is required. Format of a mirror's config is described below.\nAlso, you can validate your config to use some JSON online validator using "),a("a",{attrs:{href:"https://github.com/AlmaLinux/mirrors/blob/yaml_snippets/json_schemas/mirror_config.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("that JSON schema"),a("OutboundLink")],1),t._v(" and converting your config to JSON.")]),t._v(" "),a("div",{staticClass:"language-YAML extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <domain name of a mirror"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. almalinux.mirror.link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud_type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <azure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("aws. It'll be required if a mirror is located in AWS/Azure cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <http URL to a mirror"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//almalinux.mirror.link/almalinux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("https")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <https URL to a mirror"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//almalinux.mirror.link/almalinux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <rsync URL to a mirror"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. rsync"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//almalinux.mirror.link/almalinux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ftp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <ftp URL to a mirror"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. ftp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//almalinux.mirror.link/almalinux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("update_frequency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <update frequency of a mirror"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. 1h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sponsor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <Name of a mirror's sponsor/holder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. Some company name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sponsor_url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <URL of a mirror's sponsor/holder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//some.company.name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("email")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("mail of a mirror's sponsor/holder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. admin@some.company.name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("geolocation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("continent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <name of a continent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. North America; than field is not mandatory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("country")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <two"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("letter name of a country"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. US"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("state_province")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <name of a province"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. New York"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("city")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <name of a city"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. New York"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("private")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("false. A mirror is available in some local network if the param is true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("monopoly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("false. The mirrors list contains only this private mirror for a suitable client if param is true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The list will be required if a mirror is local or cloud.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# It contains subnets behind which located a private mirror.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Also, it can be string and contains URL which returns json list with subnets")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("subnets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" <network mask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# That parameter can specify ASN which is maintained by a mirror is located in cloud")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# It can be number or list of numbers:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# asn: 40162")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# asn:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   - 41222")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   - 91213")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# asn: [12345, 98765]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("asn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <ASN number or list of ASN numbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" see https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//en.wikipedia.org/wiki/Autonomous_system_(Internet)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(". \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The list will be required if a mirror is located in Azure/AWS cloud")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud_regions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" <cloud_region of Azure/AWS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. australiacentral2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n")])])]),a("p",[t._v("You could find more information about creating a pull request in\n"),a("a",{attrs:{href:"https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub documentation"),a("OutboundLink")],1),t._v(".\nAfter reviewing the pull request your mirror will be published at the\n"),a("a",{attrs:{href:"https://mirrors.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mirrors.almalinux.org"),a("OutboundLink")],1),t._v(" page and will\nbe added to the mirrorlists that dnf package manager works with.")])])]),t._v(" "),a("p",[t._v("All mirror hosts are eligible for membership to the AlmaLinux OS Foundation.\nMake sure you submit your "),a("a",{attrs:{href:"https://almalinux.org/foundation/members/",target:"_blank",rel:"noopener noreferrer"}},[t._v("application for membership"),a("OutboundLink")],1),t._v("!")])])}),[],!1,null,null,null);a.default=e.exports}}]);