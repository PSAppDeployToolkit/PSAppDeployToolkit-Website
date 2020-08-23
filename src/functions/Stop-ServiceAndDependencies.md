---
title: Stop-ServiceAndDependencies
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Stop Windows service and its dependencies.

## SYNTAX

```
Stop-ServiceAndDependencies [-Name] <String> [[-ComputerName] <String>] [-SkipServiceExistsTest]
 [-SkipDependentServices] [[-PendingStatusWait] <TimeSpan>] [-PassThru] [[-ContinueOnError] <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
Stop Windows service and its dependencies.

## EXAMPLES

### EXAMPLE 1
```
Stop-ServiceAndDependencies -Name 'wuauserv'
```

## PARAMETERS

### -Name
Specify the name of the service.

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

### -SkipServiceExistsTest
Choose to skip the test to check whether or not the service exists if it was already done outside of this function.

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

### -SkipDependentServices
Choose to skip checking for and stopping dependent services.
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

### -PendingStatusWait
The amount of time to wait for a service to get out of a pending state before continuing.
Default is 60 seconds.

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: (New-TimeSpan -Seconds 60)
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Return the System.ServiceProcess.ServiceController service object.

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
Position: 4
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

