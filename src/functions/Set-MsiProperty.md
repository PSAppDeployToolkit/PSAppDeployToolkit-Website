---
title: Set-MsiProperty
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Set a property in the MSI property table.

## SYNTAX

```
Set-MsiProperty [-DataBase] <__ComObject> [-PropertyName] <String> [-PropertyValue] <String>
 [[-ContinueOnError] <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Set a property in the MSI property table.

## EXAMPLES

### EXAMPLE 1
```
Set-MsiProperty -DataBase $TempMsiPathDatabase -PropertyName 'ALLUSERS' -PropertyValue '1'
```

## PARAMETERS

### -DataBase
Specify a ComObject representing an MSI database opened in view/modify/update mode.

```yaml
Type: __ComObject
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertyName
The name of the property to be set/modified.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertyValue
The value of the property to be set/modified.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 3
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
Position: 4
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
This is an internal script function and should typically not be called directly.

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

