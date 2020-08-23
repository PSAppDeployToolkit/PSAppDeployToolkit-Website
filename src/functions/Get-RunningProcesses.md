---
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Get-RunningProcesses

## SYNOPSIS
Gets the processes that are running from a custom list of process objects and also adds a property called ProcessDescription.

## SYNTAX

```
Get-RunningProcesses [[-ProcessObjects] <PSObject[]>] [-DisableLogging] [<CommonParameters>]
```

## DESCRIPTION
Gets the processes that are running from a custom list of process objects and also adds a property called ProcessDescription.

## EXAMPLES

### EXAMPLE 1
```
Get-RunningProcesses
```

## PARAMETERS

### -ProcessObjects
Custom object containing the process objects to search for.

```yaml
Type: PSObject[]
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableLogging
Disables logging of running processes

```yaml
Type: SwitchParameter
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
This is an internal script function and should typically not be called directly.

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

