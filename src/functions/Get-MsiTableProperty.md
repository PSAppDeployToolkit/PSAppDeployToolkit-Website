﻿---
title: Get-MsiTableProperty
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Get all of the properties from a Windows Installer database table or the Summary Information stream and return as a custom object.

## SYNTAX

### TableInfo (Default)
```
Get-MsiTableProperty -Path <String> [-TransformPath <String[]>] [-Table <String>]
 [-TablePropertyNameColumnNum <Int32>] [-TablePropertyValueColumnNum <Int32>] [-ContinueOnError <Boolean>]
 [<CommonParameters>]
```

### SummaryInfo
```
Get-MsiTableProperty -Path <String> [-TransformPath <String[]>] [-GetSummaryInformation]
 [-ContinueOnError <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Use the Windows Installer object to read all of the properties from a Windows Installer database table or the Summary Information stream.

## EXAMPLES

### EXAMPLE 1
```
Get-MsiTableProperty -Path 'C:\Package\AppDeploy.msi' -TransformPath 'C:\Package\AppDeploy.mst'
```

Retrieve all of the properties from the default 'Property' table.

### EXAMPLE 2
```
Get-MsiTableProperty -Path 'C:\Package\AppDeploy.msi' -TransformPath 'C:\Package\AppDeploy.mst' -Table 'Property' | Select-Object -ExpandProperty ProductCode
```

Retrieve all of the properties from the 'Property' table and then pipe to Select-Object to select the ProductCode property.

### EXAMPLE 3
```
Get-MsiTableProperty -Path 'C:\Package\AppDeploy.msi' -GetSummaryInformation
```

Retrieves the Summary Information for the Windows Installer database.

## PARAMETERS

### -Path
The fully qualified path to an database file.
Supports .msi and .msp files.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransformPath
The fully qualified path to a list of MST file(s) which should be applied to the MSI file.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Table
The name of the the MSI table from which all of the properties must be retrieved.
Default is: 'Property'.

```yaml
Type: String
Parameter Sets: TableInfo
Aliases:

Required: False
Position: Named
Default value: $(If ([IO.Path]::GetExtension($Path) -eq '.msi') { 'Property' } Else { 'MsiPatchMetadata' })
Accept pipeline input: False
Accept wildcard characters: False
```

### -TablePropertyNameColumnNum
Specify the table column number which contains the name of the properties.
Default is: 1 for MSIs and 2 for MSPs.

```yaml
Type: Int32
Parameter Sets: TableInfo
Aliases:

Required: False
Position: Named
Default value: $(If ([IO.Path]::GetExtension($Path) -eq '.msi') { 1 } Else { 2 })
Accept pipeline input: False
Accept wildcard characters: False
```

### -TablePropertyValueColumnNum
Specify the table column number which contains the value of the properties.
Default is: 2 for MSIs and 3 for MSPs.

```yaml
Type: Int32
Parameter Sets: TableInfo
Aliases:

Required: False
Position: Named
Default value: $(If ([IO.Path]::GetExtension($Path) -eq '.msi') { 2 } Else { 3 })
Accept pipeline input: False
Accept wildcard characters: False
```

### -GetSummaryInformation
Retrieves the Summary Information for the Windows Installer database.
Summary Information property descriptions: https://msdn.microsoft.com/en-us/library/aa372049(v=vs.85).aspx

```yaml
Type: SwitchParameter
Parameter Sets: SummaryInfo
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
This is an internal script function and should typically not be called directly.

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

