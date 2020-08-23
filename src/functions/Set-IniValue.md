---
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Set-IniValue

## SYNOPSIS
Opens an INI file and sets the value of the specified section and key.

## SYNTAX

```
Set-IniValue [-FilePath] <String> [-Section] <String> [-Key] <String> [-Value] <Object>
 [[-ContinueOnError] <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Opens an INI file and sets the value of the specified section and key.

## EXAMPLES

### EXAMPLE 1
```
Set-IniValue -FilePath "$envProgramFilesX86\IBM\Notes\notes.ini" -Section 'Notes' -Key 'KeyFileName' -Value 'MyFile.ID'
```

## PARAMETERS

### -FilePath
Path to the INI file.

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

### -Section
Section within the INI file.

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

### -Key
Key within the section of the INI file.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Value
Value for the key within the section of the INI file.
To remove a value, set this variable to $null.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: True
Position: 4
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
Position: 5
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

