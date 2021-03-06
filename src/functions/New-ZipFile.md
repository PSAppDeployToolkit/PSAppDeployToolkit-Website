﻿---
title: New-ZipFile
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Create a new zip archive or add content to an existing archive.

## SYNTAX

### CreateFromDirectory (Default)
```
New-ZipFile [-DestinationArchiveDirectoryPath] <String> [-DestinationArchiveFileName] <String>
 [-SourceDirectoryPath] <String[]> [-RemoveSourceAfterArchiving] [-OverWriteArchive]
 [[-ContinueOnError] <Boolean>] [<CommonParameters>]
```

### CreateFromFile
```
New-ZipFile [-DestinationArchiveDirectoryPath] <String> [-DestinationArchiveFileName] <String>
 [-SourceFilePath] <String[]> [-RemoveSourceAfterArchiving] [-OverWriteArchive] [[-ContinueOnError] <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
Create a new zip archive or add content to an existing archive by using the Shell object .CopyHere method.

## EXAMPLES

### EXAMPLE 1
```
New-ZipFile -DestinationArchiveDirectoryPath 'E:\Testing' -DestinationArchiveFileName 'TestingLogs.zip' -SourceDirectory 'E:\Testing\Logs'
```

## PARAMETERS

### -DestinationArchiveDirectoryPath
The path to the directory path where the zip archive will be saved.

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

### -DestinationArchiveFileName
The name of the zip archive.

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

### -SourceDirectoryPath
The path to the directory to be archived, specified as absolute paths.

```yaml
Type: String[]
Parameter Sets: CreateFromDirectory
Aliases:

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceFilePath
The path to the file to be archived, specified as absolute paths.

```yaml
Type: String[]
Parameter Sets: CreateFromFile
Aliases:

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveSourceAfterArchiving
Remove the source path after successfully archiving the content.
Default is: $false.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverWriteArchive
Overwrite the destination archive path if it already exists.
Default is: $false.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 5
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContinueOnError
Continue if an error is encountered.
Default: $true.

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
This is an internal script function and should typically not be called directly.

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

