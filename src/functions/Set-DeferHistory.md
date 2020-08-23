---
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Set-DeferHistory

## SYNOPSIS
Set the history of deferrals in the registry for the current application.

## SYNTAX

```
Set-DeferHistory [[-DeferTimesRemaining] <String>] [[-DeferDeadline] <String>] [<CommonParameters>]
```

## DESCRIPTION
Set the history of deferrals in the registry for the current application.

## EXAMPLES

### EXAMPLE 1
```
Set-DeferHistory -DeferTimesRemaining 5
```

## PARAMETERS

### -DeferTimesRemaining
Set the number of deferrals remaining

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeferDeadline
Set the deadline for deferrals

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
This is an internal script function and should typically not be called directly.

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

