---
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Show-InstallationRestartPrompt

## SYNOPSIS
Displays a restart prompt with a countdown to a forced restart.

## SYNTAX

```
Show-InstallationRestartPrompt [[-CountdownSeconds] <Int32>] [[-CountdownNoHideSeconds] <Int32>] [-NoCountdown]
 [<CommonParameters>]
```

## DESCRIPTION
Displays a restart prompt with a countdown to a forced restart.

## EXAMPLES

### EXAMPLE 1
```
Show-InstallationRestartPrompt -Countdownseconds 600 -CountdownNoHideSeconds 60
```

### EXAMPLE 2
```
Show-InstallationRestartPrompt -NoCountdown
```

## PARAMETERS

### -CountdownSeconds
Specifies the number of seconds to countdown before the system restart.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: 60
Accept pipeline input: False
Accept wildcard characters: False
```

### -CountdownNoHideSeconds
Specifies the number of seconds to display the restart prompt without allowing the window to be hidden.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: 30
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoCountdown
Specifies not to show a countdown, just the Restart Now and Restart Later buttons.
The UI will restore/reposition itself persistently based on the interval value specified in the config file.

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

