﻿---
title: Execute-MSI
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

## SYNOPSIS
Executes msiexec.exe to perform the following actions for MSI & MSP files and MSI product codes: install, uninstall, patch, repair, active setup.

## SYNTAX

```
Execute-MSI [[-Action] <String>] [-Path] <String> [[-Transform] <String>] [[-Parameters] <String>]
 [[-AddParameters] <String>] [-SecureParameters] [[-Patch] <String>] [[-LoggingOptions] <String>]
 [[-LogName] <String>] [[-WorkingDirectory] <String>] [-SkipMSIAlreadyInstalledCheck]
 [-IncludeUpdatesAndHotfixes] [-PassThru] [[-ContinueOnError] <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Executes msiexec.exe to perform the following actions for MSI & MSP files and MSI product codes: install, uninstall, patch, repair, active setup.
If the -Action parameter is set to "Install" and the MSI is already installed, the function will exit.
Sets default switches to be passed to msiexec based on the preferences in the XML configuration file.
Automatically generates a log file name and creates a verbose log file for all msiexec operations.
Expects the MSI or MSP file to be located in the "Files" sub directory of the App Deploy Toolkit.
Expects transform files to be in the same directory as the MSI file.

## EXAMPLES

### EXAMPLE 1
```
Execute-MSI -Action 'Install' -Path 'Adobe_FlashPlayer_11.2.202.233_x64_EN.msi'
```

Installs an MSI

### EXAMPLE 2
```
Execute-MSI -Action 'Install' -Path 'Adobe_FlashPlayer_11.2.202.233_x64_EN.msi' -Transform 'Adobe_FlashPlayer_11.2.202.233_x64_EN_01.mst' -Parameters '/QN'
```

Installs an MSI, applying a transform and overriding the default MSI toolkit parameters

### EXAMPLE 3
```
[psobject]$ExecuteMSIResult = Execute-MSI -Action 'Install' -Path 'Adobe_FlashPlayer_11.2.202.233_x64_EN.msi' -PassThru
```

Installs an MSI and stores the result of the execution into a variable by using the -PassThru option

### EXAMPLE 4
```
Execute-MSI -Action 'Uninstall' -Path '{26923b43-4d38-484f-9b9e-de460746276c}'
```

Uninstalls an MSI using a product code

### EXAMPLE 5
```
Execute-MSI -Action 'Patch' -Path 'Adobe_Reader_11.0.3_EN.msp'
```

Installs an MSP

## PARAMETERS

### -Action
The action to perform.
Options: Install, Uninstall, Patch, Repair, ActiveSetup.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: Install
Accept pipeline input: False
Accept wildcard characters: False
```

### -Path
The path to the MSI/MSP file or the product code of the installed MSI.

```yaml
Type: String
Parameter Sets: (All)
Aliases: FilePath

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Transform
The name of the transform file(s) to be applied to the MSI.
The transform file is expected to be in the same directory as the MSI file.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parameters
Overrides the default parameters specified in the XML configuration file.
Install default is: "REBOOT=ReallySuppress /QB!".
Uninstall default is: "REBOOT=ReallySuppress /QN".

```yaml
Type: String
Parameter Sets: (All)
Aliases: Arguments

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddParameters
Adds to the default parameters specified in the XML configuration file.
Install default is: "REBOOT=ReallySuppress /QB!".
Uninstall default is: "REBOOT=ReallySuppress /QN".

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecureParameters
Hides all parameters passed to the MSI or MSP file from the toolkit Log file.

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

### -Patch
The name of the patch (msp) file(s) to be applied to the MSI for use with the "Install" action.
The patch file is expected to be in the same directory as the MSI file.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 6
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LoggingOptions
Overrides the default logging options specified in the XML configuration file.
Default options are: "/L*v".

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 7
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogName
Overrides the default log file name.
The default log file name is generated from the MSI file name.
If LogName does not end in .log, it will be automatically appended.
For uninstallations, by default the product code is resolved to the DisplayName and version of the application.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 8
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WorkingDirectory
Overrides the working directory.
The working directory is set to the location of the MSI file.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 9
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipMSIAlreadyInstalledCheck
Skips the check to determine if the MSI is already installed on the system.
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

### -PassThru
Returns ExitCode, STDOut, and STDErr output from the process.

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
Continue if an exit code is returned by msiexec that is not recognized by the App Deploy Toolkit.
Default is: $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 10
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

