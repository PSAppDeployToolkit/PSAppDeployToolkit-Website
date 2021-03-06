﻿---
title: New-MsiTransform
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Create a transform file for an MSI database.

## SYNTAX

```
New-MsiTransform [-MsiPath] <String> [[-ApplyTransformPath] <String>] [[-NewTransformPath] <String>]
 [-TransformProperties] <Hashtable> [[-ContinueOnError] <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Create a transform file for an MSI database and create/modify properties in the Properties table.

## EXAMPLES

### EXAMPLE 1
```
[hashtable]$TransformProperties = {
```

'ALLUSERS' = '1'
	'AgreeToLicense' = 'Yes'
	'REBOOT' = 'ReallySuppress'
	'RebootYesNo' = 'No'
	'ROOTDRIVE' = 'C:'
}
New-MsiTransform -MsiPath 'C:\Temp\PSADTInstall.msi' -TransformProperties $TransformProperties

## PARAMETERS

### -MsiPath
Specify the path to an MSI file.

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

### -ApplyTransformPath
Specify the path to a transform which should be applied to the MSI database before any new properties are created or modified.

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

### -NewTransformPath
Specify the path where the new transform file with the desired properties will be created.
If a transform file of the same name already exists, it will be deleted before a new one is created.
Default is: a) If -ApplyTransformPath was specified but not -NewTransformPath, then \<ApplyTransformPath\>.new.mst
			b) If only -MsiPath was specified, then \<MsiPath\>.mst

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransformProperties
Hashtable which contains calls to Set-MsiProperty for configuring the desired properties which should be included in new transform file.
Example hashtable: \[hashtable\]$TransformProperties = @{ 'ALLUSERS' = '1' }

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:

Required: True
Position: 4
Default value: None
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
Position: 5
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

