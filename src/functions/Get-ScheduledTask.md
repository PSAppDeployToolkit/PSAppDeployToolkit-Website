---
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Get-ScheduledTask

## SYNOPSIS
Retrieve all details for scheduled tasks on the local computer.

## SYNTAX

```
Get-ScheduledTask [[-TaskName] <String>] [[-ContinueOnError] <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Retrieve all details for scheduled tasks on the local computer using schtasks.exe.
All property names have spaces and colons removed.

## EXAMPLES

### EXAMPLE 1
```
Get-ScheduledTask
```

To display a list of all scheduled task properties.

### EXAMPLE 2
```
Get-ScheduledTask | Out-GridView
```

To display a grid view of all scheduled task properties.

### EXAMPLE 3
```
Get-ScheduledTask | Select-Object -Property TaskName
```

To display a list of all scheduled task names.

## PARAMETERS

### -TaskName
Specify the name of the scheduled task to retrieve details for.
Uses regex match to find scheduled task.

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

### -ContinueOnError
Continue if an error is encountered.
Default: $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
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

