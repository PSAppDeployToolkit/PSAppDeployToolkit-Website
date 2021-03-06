﻿---
title: Get-FreeDiskSpace
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Retrieves the free disk space in MB on a particular drive (defaults to system drive)

## SYNTAX

```
Get-FreeDiskSpace [[-Drive] <String>] [[-ContinueOnError] <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Retrieves the free disk space in MB on a particular drive (defaults to system drive)

## EXAMPLES

### EXAMPLE 1
```
Get-FreeDiskSpace -Drive 'C:'
```

## PARAMETERS

### -Drive
Drive to check free disk space on

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: $envSystemDrive
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContinueOnError
Continue if an error is encountered.
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

