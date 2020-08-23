---
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version:
schema: 2.0.0
---

# Get-PEFileArchitecture

## SYNOPSIS
Determine if a PE file is a 32-bit or a 64-bit file.

## SYNTAX

```
Get-PEFileArchitecture [-FilePath] <FileInfo[]> [[-ContinueOnError] <Boolean>] [-PassThru] [<CommonParameters>]
```

## DESCRIPTION
Determine if a PE file is a 32-bit or a 64-bit file by examining the file's image file header.
PE file extensions: .exe, .dll, .ocx, .drv, .sys, .scr, .efi, .cpl, .fon

## EXAMPLES

### EXAMPLE 1
```
Get-PEFileArchitecture -FilePath "$env:windir\notepad.exe"
```

## PARAMETERS

### -FilePath
Path to the PE file to examine.

```yaml
Type: FileInfo[]
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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
Position: 2
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Get the file object, attach a property indicating the file binary type, and write to pipeline

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
This is an internal script function and should typically not be called directly.

## RELATED LINKS
