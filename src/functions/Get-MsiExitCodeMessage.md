---
title: Get-MsiExitCodeMessage
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Get message for MSI error code

## SYNTAX

```
Get-MsiExitCodeMessage [-MsiExitCode] <Int32> [<CommonParameters>]
```

## DESCRIPTION
Get message for MSI error code by reading it from msimsg.dll

## EXAMPLES

### EXAMPLE 1
```
Get-MsiExitCodeMessage -MsiErrorCode 1618
```

## PARAMETERS

### -MsiExitCode
MSI exit code

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: 0
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
This is an internal script function and should typically not be called directly.
http://msdn.microsoft.com/en-us/library/aa368542(v=vs.85).aspx

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

