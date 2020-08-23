---
title: Execute-MSP
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Determines if an MSP file applies to any installed products and if so, triggers the Execute-MSI function to patch the installation.

## SYNTAX

```
Execute-MSP [-Path] <String> [<CommonParameters>]
```

## DESCRIPTION
Reads SummaryInfo targeted product codes in MSP file and determines if the MSP file applies to any installed products
If a valid installed product is found, triggers the Execute-MSI function to patch the installation.
Tests for the MSP file in the "Files" sub directory of the App Deploy Toolkit.
Otherwise the full the path is used.

## EXAMPLES

### EXAMPLE 1
```
Execute-MSP -Path 'Adobe_Reader_11.0.3_EN.msp'
```

## PARAMETERS

### -Path
Please enter the path to the MSP file

```yaml
Type: String
Parameter Sets: (All)
Aliases: FilePath

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

