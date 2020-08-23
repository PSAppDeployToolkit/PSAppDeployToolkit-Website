---
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Show-DialogBox

## SYNOPSIS
Display a custom dialog box with optional title, buttons, icon and timeout.
Show-InstallationPrompt is recommended over this function as it provides more customization and uses consistent branding with the other UI components.

## SYNTAX

```
Show-DialogBox [-Text] <String> [-Title <String>] [-Buttons <String>] [-DefaultButton <String>]
 [-Icon <String>] [-Timeout <String>] [-TopMost <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Display a custom dialog box with optional title, buttons, icon and timeout.
The default button is "OK", the default Icon is "None", and the default Timeout is none.

## EXAMPLES

### EXAMPLE 1
```
Show-DialogBox -Title 'Installed Complete' -Text 'Installation has completed. Please click OK and restart your computer.' -Icon 'Information'
```

### EXAMPLE 2
```
Show-DialogBox -Title 'Installation Notice' -Text 'Installation will take approximately 30 minutes. Do you wish to proceed?' -Buttons 'OKCancel' -DefaultButton 'Second' -Icon 'Exclamation' -Timeout 600 -Topmost $false
```

## PARAMETERS

### -Text
Text in the message dialog box

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

### -Title
Title of the message dialog box

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: $installTitle
Accept pipeline input: False
Accept wildcard characters: False
```

### -Buttons
Buttons to be included on the dialog box.
Options: OK, OKCancel, AbortRetryIgnore, YesNoCancel, YesNo, RetryCancel, CancelTryAgainContinue.
Default: OK.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: OK
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultButton
The Default button that is selected.
Options: First, Second, Third.
Default: First.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: First
Accept pipeline input: False
Accept wildcard characters: False
```

### -Icon
Icon to display on the dialog box.
Options: None, Stop, Question, Exclamation, Information.
Default: None.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Timeout
Timeout period in seconds before automatically closing the dialog box with the return message "Timeout".
Default: UI timeout value set in the config XML file.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: $configInstallationUITimeout
Accept pipeline input: False
Accept wildcard characters: False
```

### -TopMost
Specifies whether the message box is a system modal message box and appears in a topmost window.
Default: $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
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

