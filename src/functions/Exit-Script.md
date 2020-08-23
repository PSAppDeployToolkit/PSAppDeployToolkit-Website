---
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Exit-Script

## SYNOPSIS
Exit the script, perform cleanup actions, and pass an exit code to the parent process.

## SYNTAX

```
Exit-Script [[-ExitCode] <Int32>] [<CommonParameters>]
```

## DESCRIPTION
Always use when exiting the script to ensure cleanup actions are performed.

## EXAMPLES

### EXAMPLE 1
```
Exit-Script -ExitCode 0
```

### EXAMPLE 2
```
Exit-Script -ExitCode 1618
```

## PARAMETERS

### -ExitCode
The exit code to be passed from the script to the parent process, e.g.
SCCM

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
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

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

