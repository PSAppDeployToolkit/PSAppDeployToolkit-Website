---
title: Test-MSUpdates
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Test whether a Microsoft Windows update is installed.

## SYNTAX

```
Test-MSUpdates [-KBNumber] <String> [[-ContinueOnError] <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Test whether a Microsoft Windows update is installed.

## EXAMPLES

### EXAMPLE 1
```
Test-MSUpdates -KBNumber 'KB2549864'
```

## PARAMETERS

### -KBNumber
KBNumber of the update.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContinueOnError
Suppress writing log message to console on failure to write message to log file.
Default is: $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
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

