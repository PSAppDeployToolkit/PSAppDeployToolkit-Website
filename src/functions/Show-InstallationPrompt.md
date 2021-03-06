﻿---
title: Show-InstallationPrompt
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Displays a custom installation prompt with the toolkit branding and optional buttons.

## SYNTAX

```
Show-InstallationPrompt [[-Title] <String>] [[-Message] <String>] [[-MessageAlignment] <String>]
 [[-ButtonRightText] <String>] [[-ButtonLeftText] <String>] [[-ButtonMiddleText] <String>] [[-Icon] <String>]
 [-NoWait] [-PersistPrompt] [[-MinimizeWindows] <Boolean>] [[-Timeout] <Int32>] [[-ExitOnTimeout] <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
Any combination of Left, Middle or Right buttons can be displayed.
The return value of the button clicked by the user is the button text specified.

## EXAMPLES

### EXAMPLE 1
```
Show-InstallationPrompt -Message 'Do you want to proceed with the installation?' -ButtonRightText 'Yes' -ButtonLeftText 'No'
```

### EXAMPLE 2
```
Show-InstallationPrompt -Title 'Funny Prompt' -Message 'How are you feeling today?' -ButtonRightText 'Good' -ButtonLeftText 'Bad' -ButtonMiddleText 'Indifferent'
```

### EXAMPLE 3
```
Show-InstallationPrompt -Message 'You can customize text to appear at the end of an install, or remove it completely for unattended installations.' -Icon Information -NoWait
```

## PARAMETERS

### -Title
Title of the prompt.
Default: the application installation name.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: $installTitle
Accept pipeline input: False
Accept wildcard characters: False
```

### -Message
Message text to be included in the prompt

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageAlignment
Alignment of the message text.
Options: Left, Center, Right.
Default: Center.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: Center
Accept pipeline input: False
Accept wildcard characters: False
```

### -ButtonRightText
Show a button on the right of the prompt with the specified text

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ButtonLeftText
Show a button on the left of the prompt with the specified text

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

### -ButtonMiddleText
Show a button in the middle of the prompt with the specified text

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

### -Icon
Show a system icon in the prompt.
Options: Application, Asterisk, Error, Exclamation, Hand, Information, None, Question, Shield, Warning, WinLogo.
Default: None.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 7
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoWait
Specifies whether to show the prompt asynchronously (i.e.
allow the script to continue without waiting for a response).
Default: $false.

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

### -PersistPrompt
Specify whether to make the prompt persist in the center of the screen every couple of seconds, specified in the AppDeployToolkitConfig.xml.
The user will have no option but to respond to the prompt - resistance is futile!

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

### -MinimizeWindows
Specifies whether to minimize other windows when displaying prompt.
Default: $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 8
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Timeout
Specifies the time period in seconds after which the prompt should timeout.
Default: UI timeout value set in the config XML file.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 9
Default value: $configInstallationUITimeout
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExitOnTimeout
Specifies whether to exit the script if the UI times out.
Default: $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 10
Default value: True
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

