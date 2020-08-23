---
title: Copy-File
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Copy a file or group of files to a destination path.

## SYNTAX

```
Copy-File [-Path] <String[]> [-Destination] <String> [-Recurse] [-Flatten] [[-ContinueOnError] <Boolean>]
 [[-ContinueFileCopyOnError] <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Copy a file or group of files to a destination path.

## EXAMPLES

### EXAMPLE 1
```
Copy-File -Path "$dirSupportFiles\MyApp.ini" -Destination "$envWindir\MyApp.ini"
```

### EXAMPLE 2
```
Copy-File -Path "$dirSupportFiles\*.*" -Destination "$envTemp\tempfiles"
```

Copy all of the files in a folder to a destination folder.

## PARAMETERS

### -Path
Path of the file to copy.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Destination
Destination Path of the file to copy.

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

### -Recurse
Copy files in subdirectories.

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

### -Flatten
Flattens the files into the root destination directory.

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
This will continue the deployment script, but will not continue copying files if an error is encountered.
Default is: $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContinueFileCopyOnError
Continue copying files if an error is encountered.
This will continue the deployment script and will warn about files that failed to be copied.
Default is: $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
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

