﻿---
title: Show-WelcomePrompt
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Called by Show-InstallationWelcome to prompt the user to optionally do the following:
 1) Close the specified running applications.
 2) Provide an option to defer the installation.
 3) Show a countdown before applications are automatically closed.

## SYNTAX

```
Show-WelcomePrompt [[-ProcessDescriptions] <String>] [[-CloseAppsCountdown] <Int32>]
 [[-ForceCloseAppsCountdown] <Boolean>] [[-PersistPrompt] <Boolean>] [-AllowDefer] [[-DeferTimes] <String>]
 [[-DeferDeadline] <String>] [[-MinimizeWindows] <Boolean>] [[-TopMost] <Boolean>] [[-ForceCountdown] <Int32>]
 [-CustomText] [<CommonParameters>]
```

## DESCRIPTION
The user is presented with a Windows Forms dialog box to close the applications themselves and continue or to have the script close the applications for them.
If the -AllowDefer option is set to true, an optional "Defer" button will be shown to the user.
If they select this option, the script will exit and return a 1618 code (SCCM fast retry code).
The dialog box will timeout after the timeout specified in the XML configuration file (default 1 hour and 55 minutes) to prevent SCCM installations from timing out and returning a failure code to SCCM.
When the dialog times out, the script will exit and return a 1618 code (SCCM fast retry code).

## EXAMPLES

### EXAMPLE 1
```
Show-WelcomePrompt -ProcessDescriptions 'Lotus Notes, Microsoft Word' -CloseAppsCountdown 600 -AllowDefer -DeferTimes 10
```

## PARAMETERS

### -ProcessDescriptions
The descriptive names of the applications that are running and need to be closed.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CloseAppsCountdown
Specify the countdown time in seconds before running applications are automatically closed when deferral is not allowed or expired.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: 0
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceCloseAppsCountdown
Specify whether to show the countdown regardless of whether deferral is allowed.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -PersistPrompt
Specify whether to make the prompt persist in the center of the screen every couple of seconds, specified in the AppDeployToolkitConfig.xml.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowDefer
Specify whether to provide an option to defer the installation.

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

### -DeferTimes
Specify the number of times the user is allowed to defer.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeferDeadline
Specify the deadline date before the user is allowed to defer.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 6
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinimizeWindows
Specifies whether to minimize other windows when displaying prompt.
Default: $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 7
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -TopMost
Specifies whether the windows is the topmost window.
Default: $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 8
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceCountdown
Specify a countdown to display before automatically proceeding with the installation when a deferral is enabled.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 9
Default value: 0
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomText
Specify whether to display a custom message specified in the XML file.
Custom message must be populated for each language section in the XML.

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
This is an internal script function and should typically not be called directly.
It is used by the Show-InstallationWelcome prompt to display a custom prompt.

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

