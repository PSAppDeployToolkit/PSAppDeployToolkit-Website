---
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Show-BalloonTip

## SYNOPSIS
Displays a balloon tip notification in the system tray.

## SYNTAX

```
Show-BalloonTip [-BalloonTipText] <String> [[-BalloonTipTitle] <String>] [[-BalloonTipIcon] <ToolTipIcon>]
 [[-BalloonTipTime] <Int32>] [<CommonParameters>]
```

## DESCRIPTION
Displays a balloon tip notification in the system tray.

## EXAMPLES

### EXAMPLE 1
```
Show-BalloonTip -BalloonTipText 'Installation Started' -BalloonTipTitle 'Application Name'
```

### EXAMPLE 2
```
Show-BalloonTip -BalloonTipIcon 'Info' -BalloonTipText 'Installation Started' -BalloonTipTitle 'Application Name' -BalloonTipTime 1000
```

## PARAMETERS

### -BalloonTipText
Text of the balloon tip.

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

### -BalloonTipTitle
Title of the balloon tip.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: $installTitle
Accept pipeline input: False
Accept wildcard characters: False
```

### -BalloonTipIcon
Icon to be used.
Options: 'Error', 'Info', 'None', 'Warning'.
Default is: Info.

```yaml
Type: ToolTipIcon
Parameter Sets: (All)
Aliases:
Accepted values: None, Info, Warning, Error

Required: False
Position: 3
Default value: Info
Accept pipeline input: False
Accept wildcard characters: False
```

### -BalloonTipTime
Time in milliseconds to display the balloon tip.
Default: 500.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: 10000
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

