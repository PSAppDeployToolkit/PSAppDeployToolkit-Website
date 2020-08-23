---
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Convert-RegistryPath

## SYNOPSIS
Converts the specified registry key path to a format that is compatible with built-in PowerShell cmdlets.

## SYNTAX

```
Convert-RegistryPath [-Key] <String> [[-SID] <String>] [<CommonParameters>]
```

## DESCRIPTION
Converts the specified registry key path to a format that is compatible with built-in PowerShell cmdlets.
Converts registry key hives to their full paths.
Example: HKLM is converted to "Registry::HKEY_LOCAL_MACHINE".

## EXAMPLES

### EXAMPLE 1
```
Convert-RegistryPath -Key 'HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\{1AD147D0-BE0E-3D6C-AC11-64F6DC4163F1}'
```

### EXAMPLE 2
```
Convert-RegistryPath -Key 'HKLM:SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\{1AD147D0-BE0E-3D6C-AC11-64F6DC4163F1}'
```

## PARAMETERS

### -Key
Path to the registry key to convert (can be a registry hive or fully qualified path)

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

### -SID
The security identifier (SID) for a user.
Specifying this parameter will convert a HKEY_CURRENT_USER registry key to the HKEY_USERS\$SID format.
Specify this parameter from the Invoke-HKCURegistrySettingsForAllUsers function to read/edit HKCU registry settings for all users on the system.

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

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

