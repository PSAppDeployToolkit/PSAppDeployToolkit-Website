﻿---
title: Write-FunctionHeaderOrFooter
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Write the function header or footer to the log upon first entering or exiting a function.

## SYNTAX

### Header
```
Write-FunctionHeaderOrFooter -CmdletName <String> -CmdletBoundParameters <Hashtable> [-Header]
 [<CommonParameters>]
```

### Footer
```
Write-FunctionHeaderOrFooter -CmdletName <String> [-Footer] [<CommonParameters>]
```

## DESCRIPTION
Write the "Function Start" message, the bound parameters the function was invoked with, or the "Function End" message when entering or exiting a function.
Messages are debug messages so will only be logged if LogDebugMessage option is enabled in XML config file.

## EXAMPLES

### EXAMPLE 1
```
Write-FunctionHeaderOrFooter -CmdletName ${CmdletName} -CmdletBoundParameters $PSBoundParameters -Header
```

### EXAMPLE 2
```
Write-FunctionHeaderOrFooter -CmdletName ${CmdletName} -Footer
```

## PARAMETERS

### -CmdletName
The name of the function this function is invoked from.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CmdletBoundParameters
The bound parameters of the function this function is invoked from.

```yaml
Type: Hashtable
Parameter Sets: Header
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Header
Write the function header.

```yaml
Type: SwitchParameter
Parameter Sets: Header
Aliases:

Required: True
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Footer
Write the function footer.

```yaml
Type: SwitchParameter
Parameter Sets: Footer
Aliases:

Required: True
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
This is an internal script function and should typically not be called directly.

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

