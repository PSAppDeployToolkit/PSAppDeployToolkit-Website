---
title: Set-ServiceStartMode
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Set the service startup mode.

## SYNTAX

```
Set-ServiceStartMode [-Name] <String> [[-ComputerName] <String>] [-StartMode] <String>
 [[-ContinueOnError] <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Set the service startup mode.

## EXAMPLES

### EXAMPLE 1
```
Set-ServiceStartMode -Name 'wuauserv' -StartMode 'Automatic (Delayed Start)'
```

## PARAMETERS

### -Name
Specify the name of the service.

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

### -ComputerName
Specify the name of the computer.
Default is: the local computer.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: $env:ComputerName
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartMode
Specify startup mode for the service.
Options: Automatic, Automatic (Delayed Start), Manual, Disabled, Boot, System.

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

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

