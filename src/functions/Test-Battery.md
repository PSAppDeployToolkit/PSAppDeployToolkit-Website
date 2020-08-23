---
title: Test-Battery
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Tests whether the local machine is running on AC power or not.

## SYNTAX

```
Test-Battery [-PassThru] [<CommonParameters>]
```

## DESCRIPTION
Tests whether the local machine is running on AC power and returns true/false.
For detailed information, use -PassThru option.

## EXAMPLES

### EXAMPLE 1
```
Test-Battery
```

### EXAMPLE 2
```
(Test-Battery -PassThru).IsLaptop
```

Determines if the current system is a laptop or not.

## PARAMETERS

### -PassThru
Outputs a hashtable containing the following properties:
IsLaptop, IsUsingACPower, ACPowerLineStatus, BatteryChargeStatus, BatteryLifePercent, BatteryLifeRemaining, BatteryFullLifetime

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

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

