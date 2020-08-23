---
title: Set-RegistryKey
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Creates a registry key name, value, and value data; it sets the same if it already exists.

## SYNTAX

```
Set-RegistryKey [-Key] <String> [[-Name] <String>] [[-Value] <Object>] [[-Type] <RegistryValueKind>]
 [[-SID] <String>] [[-ContinueOnError] <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Creates a registry key name, value, and value data; it sets the same if it already exists.

## EXAMPLES

### EXAMPLE 1
```
Set-RegistryKey -Key $blockedAppPath -Name 'Debugger' -Value $blockedAppDebuggerValue
```

### EXAMPLE 2
```
Set-RegistryKey -Key 'HKEY_LOCAL_MACHINE\SOFTWARE' -Name 'Application' -Type 'Dword' -Value '1'
```

### EXAMPLE 3
```
Set-RegistryKey -Key 'HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce' -Name 'Debugger' -Value $blockedAppDebuggerValue -Type String
```

### EXAMPLE 4
```
Set-RegistryKey -Key 'HKCU\Software\Microsoft\Example' -Name 'Data' -Value (0x01,0x01,0x01,0x01,0x01,0x01,0x01,0x01,0x01,0x01,0x01,0x01,0x02,0x01,0x01,0x01,0x01,0x01,0x01,0x01,0x02,0x01,0x01,0x01,0x01,0x01,0x01,0x01,0x00,0x01,0x01,0x01,0x02,0x02,0x02) -Type 'Binary'
```

### EXAMPLE 5
```
Set-RegistryKey -Key 'HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Example' -Value '(Default)'
```

## PARAMETERS

### -Key
The registry key path.

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

### -Name
The value name.

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

### -Value
The value data.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
The type of registry value to create or set.
Options: 'Binary','DWord','ExpandString','MultiString','None','QWord','String','Unknown'.
Default: String.
Dword should be specified as a decimal.

```yaml
Type: RegistryValueKind
Parameter Sets: (All)
Aliases:
Accepted values: Unknown, String, ExpandString, Binary, DWord, MultiString, QWord, None

Required: False
Position: 4
Default value: String
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
Position: 5
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
Position: 6
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

