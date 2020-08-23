---
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Set-ActiveSetup

## SYNOPSIS
Creates an Active Setup entry in the registry to execute a file for each user upon login.

## SYNTAX

### Create
```
Set-ActiveSetup -StubExePath <String> [-Arguments <String>] [-Description <String>] [-Key <String>]
 [-Version <String>] [-Locale <String>] [-DisableActiveSetup] [-ContinueOnError <Boolean>] [<CommonParameters>]
```

### Purge
```
Set-ActiveSetup [-Key <String>] [-PurgeActiveSetupKey] [-ContinueOnError <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Active Setup allows handling of per-user changes registry/file changes upon login.
A registry key is created in the HKLM registry hive which gets replicated to the HKCU hive when a user logs in.
If the "Version" value of the Active Setup entry in HKLM is higher than the version value in HKCU, the file referenced in "StubPath" is executed.
This Function:
- Creates the registry entries in HKLM:SOFTWARE\Microsoft\Active Setup\Installed Components\$installName.
- Creates StubPath value depending on the file extension of the $StubExePath parameter.
- Handles Version value with YYYYMMDDHHMMSS granularity to permit re-installs on the same day and still trigger Active Setup after Version increase.
- Copies/overwrites the StubPath file to $StubExePath destination path if file exists in 'Files' subdirectory of script directory.
- Executes the StubPath file for the current user as long as not in Session 0 (no need to logout/login to trigger Active Setup).

## EXAMPLES

### EXAMPLE 1
```
Set-ActiveSetup -StubExePath 'C:\Users\Public\Company\ProgramUserConfig.vbs' -Arguments '/Silent' -Description 'Program User Config' -Key 'ProgramUserConfig' -Locale 'en'
```

### EXAMPLE 2
```
Set-ActiveSetup -StubExePath "$envWinDir\regedit.exe" -Arguments "/S `"%SystemDrive%\Program Files (x86)\PS App Deploy\PSAppDeployHKCUSettings.reg`"" -Description 'PS App Deploy Config' -Key 'PS_App_Deploy_Config' -ContinueOnError $true
```

### EXAMPLE 3
```
Set-ActiveSetup -Key 'ProgramUserConfig' -PurgeActiveSetupKey
```

Deletes "ProgramUserConfig" active setup entry from all registry hives.

## PARAMETERS

### -StubExePath
Full destination path to the file that will be executed for each user that logs in.
If this file exists in the 'Files' subdirectory of the script directory, it will be copied to the destination path.

```yaml
Type: String
Parameter Sets: Create
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Arguments
Arguments to pass to the file being executed.

```yaml
Type: String
Parameter Sets: Create
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Description for the Active Setup.
Users will see "Setting up personalized settings for: $Description" at logon.
Default is: $installName.

```yaml
Type: String
Parameter Sets: Create
Aliases:

Required: False
Position: Named
Default value: $installName
Accept pipeline input: False
Accept wildcard characters: False
```

### -Key
Name of the registry key for the Active Setup entry.
Default is: $installName.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: $installName
Accept pipeline input: False
Accept wildcard characters: False
```

### -Version
Optional.
Specify version for Active setup entry.
Active Setup is not triggered if Version value has more than 8 consecutive digits.
Use commas to get around this limitation.

```yaml
Type: String
Parameter Sets: Create
Aliases:

Required: False
Position: Named
Default value: ((Get-Date -Format 'yyMM,ddHH,mmss').ToString())
Accept pipeline input: False
Accept wildcard characters: False
```

### -Locale
Optional.
Arbitrary string used to specify the installation language of the file being executed.
Not replicated to HKCU.

```yaml
Type: String
Parameter Sets: Create
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableActiveSetup
Disables the Active Setup entry so that the StubPath file will not be executed.

```yaml
Type: SwitchParameter
Parameter Sets: Create
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -PurgeActiveSetupKey
Remove Active Setup entry from HKLM registry hive.
Will also load each logon user's HKCU registry hive to remove Active Setup entry.

```yaml
Type: SwitchParameter
Parameter Sets: Purge
Aliases:

Required: True
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
Original code borrowed from: Denis St-Pierre (Ottawa, Canada), Todd MacNaught (Ottawa, Canada)

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

