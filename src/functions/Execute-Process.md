---
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Execute-Process

## SYNOPSIS
Execute a process with optional arguments, working directory, window style.

## SYNTAX

```
Execute-Process [-Path] <String> [[-Parameters] <String[]>] [-SecureParameters]
 [[-WindowStyle] <ProcessWindowStyle>] [-CreateNoWindow] [[-WorkingDirectory] <String>] [-NoWait] [-PassThru]
 [-WaitForMsiExec] [[-MsiExecWaitTime] <Int32>] [[-IgnoreExitCodes] <String>] [[-ContinueOnError] <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
Executes a process, e.g.
a file included in the Files directory of the App Deploy Toolkit, or a file on the local machine.
Provides various options for handling the return codes (see Parameters).

## EXAMPLES

### EXAMPLE 1
```
Execute-Process -Path 'uninstall_flash_player_64bit.exe' -Parameters '/uninstall' -WindowStyle 'Hidden'
```

If the file is in the "Files" directory of the App Deploy Toolkit, only the file name needs to be specified.

### EXAMPLE 2
```
Execute-Process -Path "$dirFiles\Bin\setup.exe" -Parameters '/S' -WindowStyle 'Hidden'
```

### EXAMPLE 3
```
Execute-Process -Path 'setup.exe' -Parameters '/S' -IgnoreExitCodes '1,2'
```

### EXAMPLE 4
```
Execute-Process -Path 'setup.exe' -Parameters "-s -f2`"$configToolkitLogDir\$installName.log`""
```

Launch InstallShield "setup.exe" from the ".\Files" sub-directory and force log files to the logging folder.

### EXAMPLE 5
```
Execute-Process -Path 'setup.exe' -Parameters "/s /v`"ALLUSERS=1 /qn /L* \`"$configToolkitLogDir\$installName.log`"`""
```

Launch InstallShield "setup.exe" with embedded MSI and force log files to the logging folder.

## PARAMETERS

### -Path
Path to the file to be executed.
If the file is located directly in the "Files" directory of the App Deploy Toolkit, only the file name needs to be specified.
Otherwise, the full path of the file must be specified.
If the files is in a subdirectory of "Files", use the "$dirFiles" variable as shown in the example.

```yaml
Type: String
Parameter Sets: (All)
Aliases: FilePath

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parameters
Arguments to be passed to the executable

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: Arguments

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecureParameters
Hides all parameters passed to the executable from the Toolkit log file

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

### -WindowStyle
Style of the window of the process executed.
Options: Normal, Hidden, Maximized, Minimized.
Default: Normal.
Note: Not all processes honor the "Hidden" flag.
If it it not working, then check the command line options for the process being executed to see it has a silent option.

```yaml
Type: ProcessWindowStyle
Parameter Sets: (All)
Aliases:
Accepted values: Normal, Hidden, Minimized, Maximized

Required: False
Position: 3
Default value: Normal
Accept pipeline input: False
Accept wildcard characters: False
```

### -CreateNoWindow
Specifies whether the process should be started with a new window to contain it.
Default is false.

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

### -WorkingDirectory
The working directory used for executing the process.
Defaults to the directory of the file being executed.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoWait
Immediately continue after executing the process.

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

### -WaitForMsiExec
Sometimes an EXE bootstrapper will launch an MSI install.
In such cases, this variable will ensure that
this function waits for the msiexec engine to become available before starting the install.

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

### -MsiExecWaitTime
Specify the length of time in seconds to wait for the msiexec engine to become available.
Default: 600 seconds (10 minutes).

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 5
Default value: $configMSIMutexWaitTime
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreExitCodes
List the exit codes to ignore.

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

### -ContinueOnError
Continue if an exit code is returned by the process that is not recognized by the App Deploy Toolkit.
Default: $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 7
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

