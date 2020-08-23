---
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Get-RegistryKey

## SYNOPSIS
Retrieves value names and value data for a specified registry key or optionally, a specific value.

## SYNTAX

```
Get-RegistryKey [-Key] <String> [[-Value] <String>] [[-SID] <String>] [-ReturnEmptyKeyIfExists]
 [-DoNotExpandEnvironmentNames] [[-ContinueOnError] <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Retrieves value names and value data for a specified registry key or optionally, a specific value.
If the registry key does not exist or contain any values, the function will return $null by default.
To test for existence of a registry key path, use built-in Test-Path cmdlet.

## EXAMPLES

### EXAMPLE 1
```
Get-RegistryKey -Key 'HKLM:SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\{1AD147D0-BE0E-3D6C-AC11-64F6DC4163F1}'
```

### EXAMPLE 2
```
Get-RegistryKey -Key 'HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\iexplore.exe'
```

### EXAMPLE 3
```
Get-RegistryKey -Key 'HKLM:Software\Wow6432Node\Microsoft\Microsoft SQL Server Compact Edition\v3.5' -Value 'Version'
```

### EXAMPLE 4
```
Get-RegistryKey -Key 'HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment' -Value 'Path' -DoNotExpandEnvironmentNames
```

Returns %ProgramFiles%\Java instead of C:\Program Files\Java

### EXAMPLE 5
```
Get-RegistryKey -Key 'HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Example' -Value '(Default)'
```

## PARAMETERS

### -Key
Path of the registry key.

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

### -Value
Value to retrieve (optional).

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

### -SID
The security identifier (SID) for a user.
Specifying this parameter will convert a HKEY_CURRENT_USER registry key to the HKEY_USERS\$SID format.
Specify this parameter from the Invoke-HKCURegistrySettingsForAllUsers function to read/edit HKCU registry settings for all users on the system.

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

### -ReturnEmptyKeyIfExists
Return the registry key if it exists but it has no property/value pairs underneath it.
Default is: $false.

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

### -DoNotExpandEnvironmentNames
Return unexpanded REG_EXPAND_SZ values.
Default is: $false.

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
Position: 4
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

