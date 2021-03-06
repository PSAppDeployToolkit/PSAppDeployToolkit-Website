﻿---
title: Install-SCCMSoftwareUpdates
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Scans for outstanding SCCM updates to be installed and installs the pending updates.

## SYNTAX

```
Install-SCCMSoftwareUpdates [[-SoftwareUpdatesScanWaitInSeconds] <Int32>]
 [[-WaitForPendingUpdatesTimeout] <TimeSpan>] [[-ContinueOnError] <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Scans for outstanding SCCM updates to be installed and installs the pending updates.
Only compatible with SCCM 2012 Client or higher.
This function can take several minutes to run.

## EXAMPLES

### EXAMPLE 1
```
Install-SCCMSoftwareUpdates
```

## PARAMETERS

### -SoftwareUpdatesScanWaitInSeconds
The amount of time to wait in seconds for the software updates scan to complete.
Default is: 180 seconds.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: 180
Accept pipeline input: False
Accept wildcard characters: False
```

### -WaitForPendingUpdatesTimeout
The amount of time to wait for missing and pending updates to install before exiting the function.
Default is: 45 minutes.

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: $(New-TimeSpan -Minutes 45)
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

