---
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Update-SessionEnvironmentVariables

## SYNOPSIS
Updates the environment variables for the current PowerShell session with any environment variable changes that may have occurred during script execution.

## SYNTAX

```
Update-SessionEnvironmentVariables [-LoadLoggedOnUserEnvironmentVariables] [[-ContinueOnError] <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
Environment variable changes that take place during script execution are not visible to the current PowerShell session.
Use this function to refresh the current PowerShell session with all environment variable settings.

## EXAMPLES

### EXAMPLE 1
```
Update-SessionEnvironmentVariables
```

## PARAMETERS

### -LoadLoggedOnUserEnvironmentVariables
If script is running in SYSTEM context, this option allows loading environment variables from the active console user.
If no console user exists but users are logged in, such as on terminal servers, then the first logged-in non-console user.

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

### -ContinueOnError
Continue if an error is encountered.
Default is: $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
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

