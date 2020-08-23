---
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Set-PinnedApplication

## SYNOPSIS
Pins or unpins a shortcut to the start menu or task bar.

## SYNTAX

```
Set-PinnedApplication [-Action] <String> [-FilePath] <String> [<CommonParameters>]
```

## DESCRIPTION
Pins or unpins a shortcut to the start menu or task bar.
This should typically be run in the user context, as pinned items are stored in the user profile.

## EXAMPLES

### EXAMPLE 1
```
Set-PinnedApplication -Action 'PintoStartMenu' -FilePath "$envProgramFilesX86\IBM\Lotus\Notes\notes.exe"
```

### EXAMPLE 2
```
Set-PinnedApplication -Action 'UnpinfromTaskbar' -FilePath "$envProgramFilesX86\IBM\Lotus\Notes\notes.exe"
```

## PARAMETERS

### -Action
Action to be performed.
Options: 'PintoStartMenu','UnpinfromStartMenu','PintoTaskbar','UnpinfromTaskbar'.

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

### -FilePath
Path to the shortcut file to be pinned or unpinned.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
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
Windows 10 logic borrowed from Stuart Pearson (https://pinto10blog.wordpress.com/2016/09/10/pinto10/)

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

