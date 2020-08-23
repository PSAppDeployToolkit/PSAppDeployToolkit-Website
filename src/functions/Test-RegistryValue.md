---
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Test-RegistryValue

## SYNOPSIS
Test if a registry value exists.

## SYNTAX

```
Test-RegistryValue [-Key] <Object> [-Value] <Object> [[-SID] <String>] [<CommonParameters>]
```

## DESCRIPTION
Checks a registry key path to see if it has a value with a given name.
Can correctly handle cases where a value simply has an empty or null value.

## EXAMPLES

### EXAMPLE 1
```
Test-RegistryValue -Key 'HKLM:SYSTEM\CurrentControlSet\Control\Session Manager' -Value 'PendingFileRenameOperations'
```

## PARAMETERS

### -Key
Path of the registry key.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Value
Specify the registry key value to check the existence of.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: True
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
To test if registry key exists, use Test-Path function like so:
Test-Path -Path $Key -PathType 'Container'

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

