---
title: Get-UniversalDate
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Returns the date/time for the local culture in a universal sortable date time pattern.

## SYNTAX

```
Get-UniversalDate [[-DateTime] <String>] [[-ContinueOnError] <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Converts the current datetime or a datetime string for the current culture into a universal sortable date time pattern, e.g.
2013-08-22 11:51:52Z

## EXAMPLES

### EXAMPLE 1
```
Get-UniversalDate
```

Returns the current date in a universal sortable date time pattern.

### EXAMPLE 2
```
Get-UniversalDate -DateTime '25/08/2013'
```

Returns the date for the current culture in a universal sortable date time pattern.

## PARAMETERS

### -DateTime
Specify the DateTime in the current culture.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: ((Get-Date -Format ($culture).DateTimeFormat.UniversalDateTimePattern).ToString())
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContinueOnError
Continue if an error is encountered.
Default: $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
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

