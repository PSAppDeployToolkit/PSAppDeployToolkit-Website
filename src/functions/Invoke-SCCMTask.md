---
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Invoke-SCCMTask

## SYNOPSIS
Triggers SCCM to invoke the requested schedule task id.

## SYNTAX

```
Invoke-SCCMTask [-ScheduleID] <String> [[-ContinueOnError] <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Triggers SCCM to invoke the requested schedule task id.

## EXAMPLES

### EXAMPLE 1
```
Invoke-SCCMTask 'SoftwareUpdatesScan'
```

### EXAMPLE 2
```
Invoke-SCCMTask
```

## PARAMETERS

### -ScheduleID
Name of the schedule id to trigger.
Options: HardwareInventory, SoftwareInventory, HeartbeatDiscovery, SoftwareInventoryFileCollection, RequestMachinePolicy, EvaluateMachinePolicy,
LocationServicesCleanup, SoftwareMeteringReport, SourceUpdate, PolicyAgentCleanup, RequestMachinePolicy2, CertificateMaintenance, PeerDistributionPointStatus,
PeerDistributionPointProvisioning, ComplianceIntervalEnforcement, SoftwareUpdatesAgentAssignmentEvaluation, UploadStateMessage, StateMessageManager,
SoftwareUpdatesScan, AMTProvisionCycle, UpdateStorePolicy, StateSystemBulkSend, ApplicationManagerPolicyAction, PowerManagementStartSummarizer

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

