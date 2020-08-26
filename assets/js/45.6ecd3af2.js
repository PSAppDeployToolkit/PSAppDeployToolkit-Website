(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{600:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"synopsis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#synopsis"}},[t._v("#")]),t._v(" SYNOPSIS")]),t._v(" "),s("p",[t._v("Get all of the properties from a Windows Installer database table or the Summary Information stream and return as a custom object.")]),t._v(" "),s("h2",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" SYNTAX")]),t._v(" "),s("h3",{attrs:{id:"tableinfo-default"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tableinfo-default"}},[t._v("#")]),t._v(" TableInfo (Default)")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Get-MsiTableProperty -Path <String> [-TransformPath <String[]>] [-Table <String>]\n [-TablePropertyNameColumnNum <Int32>] [-TablePropertyValueColumnNum <Int32>] [-ContinueOnError <Boolean>]\n [<CommonParameters>]\n")])])]),s("h3",{attrs:{id:"summaryinfo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summaryinfo"}},[t._v("#")]),t._v(" SummaryInfo")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Get-MsiTableProperty -Path <String> [-TransformPath <String[]>] [-GetSummaryInformation]\n [-ContinueOnError <Boolean>] [<CommonParameters>]\n")])])]),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" DESCRIPTION")]),t._v(" "),s("p",[t._v("Use the Windows Installer object to read all of the properties from a Windows Installer database table or the Summary Information stream.")]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" EXAMPLES")]),t._v(" "),s("h3",{attrs:{id:"example-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-1"}},[t._v("#")]),t._v(" EXAMPLE 1")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Get-MsiTableProperty -Path 'C:\\Package\\AppDeploy.msi' -TransformPath 'C:\\Package\\AppDeploy.mst'\n")])])]),s("p",[t._v("Retrieve all of the properties from the default 'Property' table.")]),t._v(" "),s("h3",{attrs:{id:"example-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" EXAMPLE 2")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Get-MsiTableProperty -Path 'C:\\Package\\AppDeploy.msi' -TransformPath 'C:\\Package\\AppDeploy.mst' -Table 'Property' | Select-Object -ExpandProperty ProductCode\n")])])]),s("p",[t._v("Retrieve all of the properties from the 'Property' table and then pipe to Select-Object to select the ProductCode property.")]),t._v(" "),s("h3",{attrs:{id:"example-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" EXAMPLE 3")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Get-MsiTableProperty -Path 'C:\\Package\\AppDeploy.msi' -GetSummaryInformation\n")])])]),s("p",[t._v("Retrieves the Summary Information for the Windows Installer database.")]),t._v(" "),s("h2",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" PARAMETERS")]),t._v(" "),s("h3",{attrs:{id:"path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[t._v("#")]),t._v(" -Path")]),t._v(" "),s("p",[t._v("The fully qualified path to an database file.\nSupports .msi and .msp files.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" (All)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("True")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Named\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" None\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),s("h3",{attrs:{id:"transformpath"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transformpath"}},[t._v("#")]),t._v(" -TransformPath")]),t._v(" "),s("p",[t._v("The fully qualified path to a list of MST file(s) which should be applied to the MSI file.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" (All)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Named\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" None\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),s("h3",{attrs:{id:"table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[t._v("#")]),t._v(" -Table")]),t._v(" "),s("p",[t._v("The name of the the MSI table from which all of the properties must be retrieved.\nDefault is: 'Property'.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TableInfo\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Named\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $(If ("),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("IO.Path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("GetExtension($Path) "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("eq '.msi') "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Property'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" Else "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MsiPatchMetadata'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(")\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),s("h3",{attrs:{id:"tablepropertynamecolumnnum"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tablepropertynamecolumnnum"}},[t._v("#")]),t._v(" -TablePropertyNameColumnNum")]),t._v(" "),s("p",[t._v("Specify the table column number which contains the name of the properties.\nDefault is: 1 for MSIs and 2 for MSPs.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Int32\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TableInfo\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Named\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $(If ("),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("IO.Path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("GetExtension($Path) "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("eq '.msi') "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" Else "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(")\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),s("h3",{attrs:{id:"tablepropertyvaluecolumnnum"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tablepropertyvaluecolumnnum"}},[t._v("#")]),t._v(" -TablePropertyValueColumnNum")]),t._v(" "),s("p",[t._v("Specify the table column number which contains the value of the properties.\nDefault is: 2 for MSIs and 3 for MSPs.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Int32\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TableInfo\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Named\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $(If ("),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("IO.Path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("GetExtension($Path) "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("eq '.msi') "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" Else "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(")\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),s("h3",{attrs:{id:"getsummaryinformation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getsummaryinformation"}},[t._v("#")]),t._v(" -GetSummaryInformation")]),t._v(" "),s("p",[t._v("Retrieves the Summary Information for the Windows Installer database.\nSummary Information property descriptions: https://msdn.microsoft.com/en-us/library/aa372049(v=vs.85).aspx")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SwitchParameter\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SummaryInfo\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("True")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Named\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),s("h3",{attrs:{id:"continueonerror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#continueonerror"}},[t._v("#")]),t._v(" -ContinueOnError")]),t._v(" "),s("p",[t._v("Continue if an error is encountered.\nDefault is: $true.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Boolean\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" (All)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Named\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("True")]),t._v("\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),s("h3",{attrs:{id:"commonparameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commonparameters"}},[t._v("#")]),t._v(" CommonParameters")]),t._v(" "),s("p",[t._v("This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see "),s("a",{attrs:{href:"http://go.microsoft.com/fwlink/?LinkID=113216",target:"_blank",rel:"noopener noreferrer"}},[t._v("about_CommonParameters"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"inputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" INPUTS")]),t._v(" "),s("h2",{attrs:{id:"outputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" OUTPUTS")]),t._v(" "),s("h2",{attrs:{id:"notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" NOTES")]),t._v(" "),s("p",[t._v("This is an internal script function and should typically not be called directly.")]),t._v(" "),s("h2",{attrs:{id:"related-links"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-links"}},[t._v("#")]),t._v(" RELATED LINKS")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://psappdeploytoolkit.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://psappdeploytoolkit.com"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);