---
title: Get-InstalledApplication
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Retrieves information about installed applications.

## SYNTAX

```
Get-InstalledApplication [[-Name] <String[]>] [-Exact] [-WildCard] [-RegEx] [[-ProductCode] <String>]
 [-IncludeUpdatesAndHotfixes] [<CommonParameters>]
```

## DESCRIPTION
Retrieves information about installed applications by querying the registry.
You can specify an application name, a product code, or both.
Returns information about application publisher, name & version, product code, uninstall string, install source, location, date, and application architecture.

## EXAMPLES

### EXAMPLE 1
```
Get-InstalledApplication -Name 'Adobe Flash'
```

### EXAMPLE 2
```
Get-InstalledApplication -ProductCode '{1AD147D0-BE0E-3D6C-AC11-64F6DC4163F1}'
```

## PARAMETERS

### -Name
The name of the application to retrieve information for.
Performs a contains match on the application display name by default.

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

### -Exact
Specifies that the named application must be matched using the exact name.

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

### -WildCard
Specifies that the named application must be matched using a wildcard search.

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

### -RegEx
Specifies that the named application must be matched using a regular expression search.

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

### -ProductCode
The product code of the application to retrieve information for.

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

### -IncludeUpdatesAndHotfixes
Include matches against updates and hotfixes in results.

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

For every detected matching Application the Function puts out a custom Object containing the following Properties:

	DisplayName, DisplayVersion, InstallDate, Publisher, Is64BitApplication, ProductCode, InstallLocation, UninstallSubkey, UninstallString, InstallSource.


## NOTES

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

