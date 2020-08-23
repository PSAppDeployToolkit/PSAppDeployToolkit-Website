---
title: Invoke-RegisterOrUnregisterDLL
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Register or unregister a DLL file.

## SYNTAX

```
Invoke-RegisterOrUnregisterDLL [-FilePath] <String> [[-DLLAction] <String>] [[-ContinueOnError] <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
Register or unregister a DLL file using regsvr32.exe.
Function can be invoked using alias: 'Register-DLL' or 'Unregister-DLL'.

## EXAMPLES

### EXAMPLE 1
```
Register-DLL -FilePath "C:\Test\DcTLSFileToDMSComp.dll"
```

Register DLL file using the "Register-DLL" alias for this function

### EXAMPLE 2
```
UnRegister-DLL -FilePath "C:\Test\DcTLSFileToDMSComp.dll"
```

Unregister DLL file using the "Unregister-DLL" alias for this function

### EXAMPLE 3
```
Invoke-RegisterOrUnregisterDLL -FilePath "C:\Test\DcTLSFileToDMSComp.dll" -DLLAction 'Register'
```

Register DLL file using the actual name of this function

## PARAMETERS

### -FilePath
Path to the DLL file.

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

### -DLLAction
Specify whether to register or unregister the DLL.
Optional if function is invoked using 'Register-DLL' or 'Unregister-DLL' alias.

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

### -ContinueOnError
Continue if an error is encountered.
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

