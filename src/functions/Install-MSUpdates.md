---
title: Install-MSUpdates
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Install all Microsoft Updates in a given directory.

## SYNTAX

```
Install-MSUpdates [-Directory] <String> [<CommonParameters>]
```

## DESCRIPTION
Install all Microsoft Updates of type ".exe", ".msu", or ".msp" in a given directory (recursively search directory).

## EXAMPLES

### EXAMPLE 1
```
Install-MSUpdates -Directory "$dirFiles\MSUpdates"
```

## PARAMETERS

### -Directory
Directory containing the updates.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

