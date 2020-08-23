---
title: Test-ServiceExists
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Check to see if a service exists.

## SYNTAX

```
Test-ServiceExists [-Name] <String> [[-ComputerName] <String>] [-PassThru] [[-ContinueOnError] <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
Check to see if a service exists (using WMI method because Get-Service will generate ErrorRecord if service doesn't exist).

## EXAMPLES

### EXAMPLE 1
```
Test-ServiceExists -Name 'wuauserv'
```

### EXAMPLE 2
```
Test-ServiceExists -Name 'testservice' -PassThru | Where-Object { $_ } | ForEach-Object { $_.Delete() }
```

Check if a service exists and then delete it by using the -PassThru parameter.

## PARAMETERS

### -Name
Specify the name of the service.
Note: Service name can be found by executing "Get-Service | Format-Table -AutoSize -Wrap" or by using the properties screen of a service in services.msc.

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

### -ComputerName
Specify the name of the computer.
Default is: the local computer.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: $env:ComputerName
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Return the WMI service object.

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

