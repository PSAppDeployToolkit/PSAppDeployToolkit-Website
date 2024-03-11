(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{632:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"synopsis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#synopsis"}},[t._v("#")]),t._v(" SYNOPSIS")]),t._v(" "),s("p",[t._v("Write messages to a log file in CMTrace.exe compatible format or Legacy text file format.")]),t._v(" "),s("h2",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" SYNTAX")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Write-Log [-Message] <String[]> [[-Severity] <Int16>] [[-Source] <String>] [[-ScriptSection] <String>]\n [[-LogType] <String>] [[-LogFileDirectory] <String>] [[-LogFileName] <String>] [[-MaxLogFileSizeMB] <Decimal>]\n [[-WriteHost] <Boolean>] [[-ContinueOnError] <Boolean>] [-PassThru] [-DebugMessage]\n [[-LogDebugMessage] <Boolean>] [<CommonParameters>]\n")])])]),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" DESCRIPTION")]),t._v(" "),s("p",[t._v("Write messages to a log file in CMTrace.exe compatible format or Legacy text file format and optionally display in the console.")]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" EXAMPLES")]),t._v(" "),s("h3",{attrs:{id:"example-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-1"}},[t._v("#")]),t._v(" EXAMPLE 1")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Write-Log -Message \"Installing patch MS15-031\" -Source 'Add-Patch' -LogType 'CMTrace'\n")])])]),s("h3",{attrs:{id:"example-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" EXAMPLE 2")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Write-Log -Message \"Script is running on Windows 8\" -Source 'Test-ValidOS' -LogType 'Legacy'\n")])])]),s("h2",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" PARAMETERS")]),t._v(" "),s("h3",{attrs:{id:"message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#message"}},[t._v("#")]),t._v(" -Message")]),t._v(" "),s("p",[t._v("The message to write to the log file or output to the console.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" (All)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Text\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("True")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" None\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" True (ByPropertyName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ByValue)\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),s("h3",{attrs:{id:"severity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#severity"}},[t._v("#")]),t._v(" -Severity")]),t._v(" "),s("p",[t._v("Defines message type.\nWhen writing to console or CMTrace.exe log format, it allows highlighting of message type.\nOptions: 1 = Information (default), 2 = Warning (highlighted in yellow), 3 = Error (highlighted in red)")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Int16\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" (All)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),s("h3",{attrs:{id:"source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#source"}},[t._v("#")]),t._v(" -Source")]),t._v(" "),s("p",[t._v("The source of the message being logged.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" (All)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" None\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),s("h3",{attrs:{id:"scriptsection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scriptsection"}},[t._v("#")]),t._v(" -ScriptSection")]),t._v(" "),s("p",[t._v("The heading for the portion of the script that is being executed.\nDefault is: $script:installPhase.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" (All)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("installPhase\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),s("h3",{attrs:{id:"logtype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logtype"}},[t._v("#")]),t._v(" -LogType")]),t._v(" "),s("p",[t._v("Choose whether to write a CMTrace.exe compatible log file or a Legacy text log file.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" (All)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $configToolkitLogStyle\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),s("h3",{attrs:{id:"logfiledirectory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logfiledirectory"}},[t._v("#")]),t._v(" -LogFileDirectory")]),t._v(" "),s("p",[t._v("Set the directory where the log file will be saved.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" (All)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $(If ($configToolkitCompressLogs) "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" $logTempFolder "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" Else "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" $configToolkitLogDir "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(")\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),s("h3",{attrs:{id:"logfilename"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logfilename"}},[t._v("#")]),t._v(" -LogFileName")]),t._v(" "),s("p",[t._v("Set the name of the log file.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" (All)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $logName\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),s("h3",{attrs:{id:"maxlogfilesizemb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maxlogfilesizemb"}},[t._v("#")]),t._v(" -MaxLogFileSizeMB")]),t._v(" "),s("p",[t._v("Maximum file size limit for log file in megabytes (MB).\nDefault is 10 MB.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Decimal\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" (All)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $configToolkitLogMaxSize\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),s("h3",{attrs:{id:"writehost"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#writehost"}},[t._v("#")]),t._v(" -WriteHost")]),t._v(" "),s("p",[t._v("Write the log message to the console.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Boolean\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" (All)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $configToolkitLogWriteToHost\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),s("h3",{attrs:{id:"continueonerror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#continueonerror"}},[t._v("#")]),t._v(" -ContinueOnError")]),t._v(" "),s("p",[t._v("Suppress writing log message to console on failure to write message to log file.\nDefault is: $true.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Boolean\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" (All)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("True")]),t._v("\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),s("h3",{attrs:{id:"passthru"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#passthru"}},[t._v("#")]),t._v(" -PassThru")]),t._v(" "),s("p",[t._v("Return the message that was passed to the function")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SwitchParameter\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" (All)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),s("h3",{attrs:{id:"debugmessage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debugmessage"}},[t._v("#")]),t._v(" -DebugMessage")]),t._v(" "),s("p",[t._v("Specifies that the message is a debug message.\nDebug messages only get logged if -LogDebugMessage is set to $true.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SwitchParameter\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" (All)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),s("h3",{attrs:{id:"logdebugmessage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logdebugmessage"}},[t._v("#")]),t._v(" -LogDebugMessage")]),t._v(" "),s("p",[t._v("Debug messages only get logged if this parameter is set to $true in the config XML file.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Boolean\nParameter Sets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" (All)\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Aliases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\nDefault value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $configToolkitLogDebugMessage\nAccept pipeline input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\nAccept wildcard characters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("False")]),t._v("\n")])])]),s("h3",{attrs:{id:"commonparameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commonparameters"}},[t._v("#")]),t._v(" CommonParameters")]),t._v(" "),s("p",[t._v("This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see "),s("a",{attrs:{href:"http://go.microsoft.com/fwlink/?LinkID=113216",target:"_blank",rel:"noopener noreferrer"}},[t._v("about_CommonParameters"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"inputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" INPUTS")]),t._v(" "),s("h2",{attrs:{id:"outputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" OUTPUTS")]),t._v(" "),s("h2",{attrs:{id:"notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" NOTES")]),t._v(" "),s("h2",{attrs:{id:"related-links"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-links"}},[t._v("#")]),t._v(" RELATED LINKS")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://psappdeploytoolkit.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://psappdeploytoolkit.com"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);