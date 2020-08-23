---
title: New-Shortcut
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Creates a new .lnk or .url type shortcut

## SYNTAX

```
New-Shortcut [-Path] <String> [-TargetPath] <String> [[-Arguments] <String>] [[-IconLocation] <String>]
 [[-IconIndex] <String>] [[-Description] <String>] [[-WorkingDirectory] <String>] [[-WindowStyle] <String>]
 [-RunAsAdmin] [[-Hotkey] <String>] [[-ContinueOnError] <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Creates a new shortcut .lnk or .url file, with configurable options

## EXAMPLES

### EXAMPLE 1
```
New-Shortcut -Path "$envProgramData\Microsoft\Windows\Start Menu\My Shortcut.lnk" -TargetPath "$envWinDir\system32\notepad.exe" -IconLocation "$envWinDir\system32\notepad.exe" -Description 'Notepad' -WorkingDirectory "$envHomeDrive\$envHomePath"
```

## PARAMETERS

### -Path
Path to save the shortcut

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

### -TargetPath
Target path or URL that the shortcut launches

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

### -Arguments
Arguments to be passed to the target path

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IconLocation
Location of the icon used for the shortcut

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IconIndex
Executables, DLLs, ICO files with multiple icons need the icon index to be specified

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Description of the shortcut

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 6
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WorkingDirectory
Working Directory to be used for the target path

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 7
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WindowStyle
Windows style of the application.
Options: Normal, Maximized, Minimized.
Default is: Normal.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 8
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RunAsAdmin
Set shortcut to run program as administrator.
This option will prompt user to elevate when executing shortcut.

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

### -Hotkey
Create a Hotkey to launch the shortcut, e.g.
"CTRL+SHIFT+F"

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 9
Default value: None
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
Position: 10
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

