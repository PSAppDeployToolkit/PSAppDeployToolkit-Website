﻿---
title: Get-WindowTitle
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Search for an open window title and return details about the window.

## SYNTAX

### SearchWinTitle
```
Get-WindowTitle -WindowTitle <String> [-DisableFunctionLogging] [<CommonParameters>]
```

### GetAllWinTitles
```
Get-WindowTitle [-GetAllWindowTitles] [-DisableFunctionLogging] [<CommonParameters>]
```

## DESCRIPTION
Search for a window title.
If window title searched for returns more than one result, then details for each window will be displayed.
Returns the following properties for each window: WindowTitle, WindowHandle, ParentProcess, ParentProcessMainWindowHandle, ParentProcessId.
Function does not work in SYSTEM context unless launched with "psexec.exe -s -i" to run it as an interactive process under the SYSTEM account.

## EXAMPLES

### EXAMPLE 1
```
Get-WindowTitle -WindowTitle 'Microsoft Word'
```

Gets details for each window that has the words "Microsoft Word" in the title.

### EXAMPLE 2
```
Get-WindowTitle -GetAllWindowTitles
```

Gets details for all windows with a title.

### EXAMPLE 3
```
Get-WindowTitle -GetAllWindowTitles | Where-Object { $_.ParentProcess -eq 'WINWORD' }
```

Get details for all windows belonging to Microsoft Word process with name "WINWORD".

## PARAMETERS

### -WindowTitle
The title of the application window to search for using regex matching.

```yaml
Type: String
Parameter Sets: SearchWinTitle
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GetAllWindowTitles
Get titles for all open windows on the system.

```yaml
Type: SwitchParameter
Parameter Sets: GetAllWinTitles
Aliases:

Required: True
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableFunctionLogging
Disables logging messages to the script log file.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

