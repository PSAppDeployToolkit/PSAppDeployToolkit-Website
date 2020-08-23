---
title: Get-UserProfiles
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Get the User Profile Path, User Account Sid, and the User Account Name for all users that log onto the machine and also the Default User (which does not log on).

## SYNTAX

```
Get-UserProfiles [[-ExcludeNTAccount] <String[]>] [[-ExcludeSystemProfiles] <Boolean>] [-ExcludeDefaultUser]
 [<CommonParameters>]
```

## DESCRIPTION
Get the User Profile Path, User Account Sid, and the User Account Name for all users that log onto the machine and also the Default User (which does  not log on).
Please note that the NTAccount property may be empty for some user profiles but the SID and ProfilePath properties will always be populated.

## EXAMPLES

### EXAMPLE 1
```
Get-UserProfiles
```

Returns the following properties for each user profile on the system: NTAccount, SID, ProfilePath

### EXAMPLE 2
```
Get-UserProfiles -ExcludeNTAccount 'CONTOSO\Robot','CONTOSO\ntadmin'
```

### EXAMPLE 3
```
[string[]]$ProfilePaths = Get-UserProfiles | Select-Object -ExpandProperty 'ProfilePath'
```

Returns the user profile path for each user on the system.
This information can then be used to make modifications under the user profile on the filesystem.

## PARAMETERS

### -ExcludeNTAccount
Specify NT account names in Domain\Username format to exclude from the list of user profiles.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeSystemProfiles
Exclude system profiles: SYSTEM, LOCAL SERVICE, NETWORK SERVICE.
Default is: $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeDefaultUser
Exclude the Default User.
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

