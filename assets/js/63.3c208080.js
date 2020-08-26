(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{582:function(a,t,s){"use strict";s.r(t);var e=s(4),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"synopsis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#synopsis"}},[a._v("#")]),a._v(" SYNOPSIS")]),a._v(" "),s("p",[a._v("Create a transform file for an MSI database.")]),a._v(" "),s("h2",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" SYNTAX")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("New-MsiTransform [-MsiPath] <String> [[-ApplyTransformPath] <String>] [[-NewTransformPath] <String>]\n [-TransformProperties] <Hashtable> [[-ContinueOnError] <Boolean>] [<CommonParameters>]\n")])])]),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" DESCRIPTION")]),a._v(" "),s("p",[a._v("Create a transform file for an MSI database and create/modify properties in the Properties table.")]),a._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[a._v("#")]),a._v(" EXAMPLES")]),a._v(" "),s("h3",{attrs:{id:"example-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-1"}},[a._v("#")]),a._v(" EXAMPLE 1")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[hashtable]$TransformProperties = {\n")])])]),s("p",[a._v("'ALLUSERS' = '1'\n'AgreeToLicense' = 'Yes'\n'REBOOT' = 'ReallySuppress'\n'RebootYesNo' = 'No'\n'ROOTDRIVE' = 'C:'\n}\nNew-MsiTransform -MsiPath 'C:\\Temp\\PSADTInstall.msi' -TransformProperties $TransformProperties")]),a._v(" "),s("h2",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[a._v("#")]),a._v(" PARAMETERS")]),a._v(" "),s("h3",{attrs:{id:"msipath"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#msipath"}},[a._v("#")]),a._v(" -MsiPath")]),a._v(" "),s("p",[a._v("Specify the path to an MSI file.")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" String\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" (All)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("True")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" None\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("False")]),a._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("False")]),a._v("\n")])])]),s("h3",{attrs:{id:"applytransformpath"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#applytransformpath"}},[a._v("#")]),a._v(" -ApplyTransformPath")]),a._v(" "),s("p",[a._v("Specify the path to a transform which should be applied to the MSI database before any new properties are created or modified.")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" String\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" (All)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("False")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" None\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("False")]),a._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("False")]),a._v("\n")])])]),s("h3",{attrs:{id:"newtransformpath"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#newtransformpath"}},[a._v("#")]),a._v(" -NewTransformPath")]),a._v(" "),s("p",[a._v("Specify the path where the new transform file with the desired properties will be created.\nIf a transform file of the same name already exists, it will be deleted before a new one is created.\nDefault is: a) If -ApplyTransformPath was specified but not -NewTransformPath, then <ApplyTransformPath>.new.mst\nb) If only -MsiPath was specified, then <MsiPath>.mst")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" String\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" (All)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("False")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" None\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("False")]),a._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("False")]),a._v("\n")])])]),s("h3",{attrs:{id:"transformproperties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transformproperties"}},[a._v("#")]),a._v(" -TransformProperties")]),a._v(" "),s("p",[a._v("Hashtable which contains calls to Set-MsiProperty for configuring the desired properties which should be included in new transform file.\nExample hashtable: [hashtable]$TransformProperties = @{ 'ALLUSERS' = '1' }")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Hashtable\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" (All)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("True")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v("\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" None\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("False")]),a._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("False")]),a._v("\n")])])]),s("h3",{attrs:{id:"continueonerror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#continueonerror"}},[a._v("#")]),a._v(" -ContinueOnError")]),a._v(" "),s("p",[a._v("Continue if an error is encountered.\nDefault is: $true.")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Boolean\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" (All)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("False")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("True")]),a._v("\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("False")]),a._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("False")]),a._v("\n")])])]),s("h3",{attrs:{id:"commonparameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commonparameters"}},[a._v("#")]),a._v(" CommonParameters")]),a._v(" "),s("p",[a._v("This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see "),s("a",{attrs:{href:"http://go.microsoft.com/fwlink/?LinkID=113216",target:"_blank",rel:"noopener noreferrer"}},[a._v("about_CommonParameters"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"inputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[a._v("#")]),a._v(" INPUTS")]),a._v(" "),s("h2",{attrs:{id:"outputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[a._v("#")]),a._v(" OUTPUTS")]),a._v(" "),s("h2",{attrs:{id:"notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[a._v("#")]),a._v(" NOTES")]),a._v(" "),s("h2",{attrs:{id:"related-links"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-links"}},[a._v("#")]),a._v(" RELATED LINKS")]),a._v(" "),s("p",[s("a",{attrs:{href:"http://psappdeploytoolkit.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://psappdeploytoolkit.com"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);