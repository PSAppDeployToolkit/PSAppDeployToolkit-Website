(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{554:function(t,a,e){"use strict";e.r(a);var s=e(4),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"synopsis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#synopsis"}},[t._v("#")]),t._v(" SYNOPSIS")]),t._v(" "),e("p",[t._v("Test if a registry value exists.")]),t._v(" "),e("h2",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" SYNTAX")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Test-RegistryValue [-Key] <Object> [-Value] <Object> [[-SID] <String>] [<CommonParameters>]\n")])])]),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" DESCRIPTION")]),t._v(" "),e("p",[t._v("Checks a registry key path to see if it has a value with a given name.\nCan correctly handle cases where a value simply has an empty or null value.")]),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" EXAMPLES")]),t._v(" "),e("h3",{attrs:{id:"example-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-1"}},[t._v("#")]),t._v(" EXAMPLE 1")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Test-RegistryValue -Key 'HKLM:SYSTEM\\CurrentControlSet\\Control\\Session Manager' -Value 'PendingFileRenameOperations'\n")])])]),e("h2",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" PARAMETERS")]),t._v(" "),e("h3",{attrs:{id:"key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#key"}},[t._v("#")]),t._v(" -Key")]),t._v(" "),e("p",[t._v("Path of the registry key.")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object\nParameter Sets"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" (All)\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("True")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nDefault value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" None\nAccept pipeline input"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" True (ByPropertyName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ByValue)\nAccept wildcard characters"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),e("h3",{attrs:{id:"value"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#value"}},[t._v("#")]),t._v(" -Value")]),t._v(" "),e("p",[t._v("Specify the registry key value to check the existence of.")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object\nParameter Sets"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" (All)\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("True")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nDefault value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" None\nAccept pipeline input"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept wildcard characters"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),e("h3",{attrs:{id:"sid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sid"}},[t._v("#")]),t._v(" -SID")]),t._v(" "),e("p",[t._v("The security identifier (SID) for a user.\nSpecifying this parameter will convert a HKEY_CURRENT_USER registry key to the HKEY_USERS$SID format.\nSpecify this parameter from the Invoke-HKCURegistrySettingsForAllUsers function to read/edit HKCU registry settings for all users on the system.")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String\nParameter Sets"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" (All)\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nDefault value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" None\nAccept pipeline input"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept wildcard characters"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),e("h3",{attrs:{id:"commonparameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commonparameters"}},[t._v("#")]),t._v(" CommonParameters")]),t._v(" "),e("p",[t._v("This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see "),e("a",{attrs:{href:"http://go.microsoft.com/fwlink/?LinkID=113216",target:"_blank",rel:"noopener noreferrer"}},[t._v("about_CommonParameters"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"inputs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" INPUTS")]),t._v(" "),e("h2",{attrs:{id:"outputs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" OUTPUTS")]),t._v(" "),e("h2",{attrs:{id:"notes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" NOTES")]),t._v(" "),e("p",[t._v("To test if registry key exists, use Test-Path function like so:\nTest-Path -Path $Key -PathType 'Container'")]),t._v(" "),e("h2",{attrs:{id:"related-links"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#related-links"}},[t._v("#")]),t._v(" RELATED LINKS")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://psappdeploytoolkit.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://psappdeploytoolkit.com"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);