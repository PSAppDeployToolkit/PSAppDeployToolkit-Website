---
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Show-InstallationProgress

## SYNOPSIS
Displays a progress dialog in a separate thread with an updateable custom message.

## SYNTAX

```
Show-InstallationProgress [[-StatusMessage] <String>] [[-WindowLocation] <String>] [[-TopMost] <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
Create a WPF window in a separate thread to display a marquee style progress ellipse with a custom message that can be updated.
The status message supports line breaks.
The first time this function is called in a script, it will display a balloon tip notification to indicate that the installation has started (provided balloon tips are enabled in the configuration).

## EXAMPLES

### EXAMPLE 1
```
Show-InstallationProgress
```

Uses the default status message from the XML configuration file.

### EXAMPLE 2
```
Show-InstallationProgress -StatusMessage 'Installation in Progress...'
```

### EXAMPLE 3
```
Show-InstallationProgress -StatusMessage "Installation in Progress...`nThe installation may take 20 minutes to complete."
```

### EXAMPLE 4
```
Show-InstallationProgress -StatusMessage 'Installation in Progress...' -WindowLocation 'BottomRight' -TopMost $false
```

## PARAMETERS

### -StatusMessage
The status message to be displayed.
The default status message is taken from the XML configuration file.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: $configProgressMessageInstall
Accept pipeline input: False
Accept wildcard characters: False
```

### -WindowLocation
The location of the progress window.
Default: just below top, centered.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: Default
Accept pipeline input: False
Accept wildcard characters: False
```

### -TopMost
Specifies whether the progress window should be topmost.
Default: $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
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

