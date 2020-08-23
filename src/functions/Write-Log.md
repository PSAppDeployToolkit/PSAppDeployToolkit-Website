---
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Write-Log

## SYNOPSIS
Write messages to a log file in CMTrace.exe compatible format or Legacy text file format.

## SYNTAX

```
Write-Log [-Message] <String[]> [[-Severity] <Int16>] [[-Source] <String>] [[-ScriptSection] <String>]
 [[-LogType] <String>] [[-LogFileDirectory] <String>] [[-LogFileName] <String>] [[-MaxLogFileSizeMB] <Decimal>]
 [[-WriteHost] <Boolean>] [[-ContinueOnError] <Boolean>] [-PassThru] [-DebugMessage]
 [[-LogDebugMessage] <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Write messages to a log file in CMTrace.exe compatible format or Legacy text file format and optionally display in the console.

## EXAMPLES

### EXAMPLE 1
```
Write-Log -Message "Installing patch MS15-031" -Source 'Add-Patch' -LogType 'CMTrace'
```

### EXAMPLE 2
```
Write-Log -Message "Script is running on Windows 8" -Source 'Test-ValidOS' -LogType 'Legacy'
```

## PARAMETERS

### -Message
The message to write to the log file or output to the console.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: Text

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Severity
Defines message type.
When writing to console or CMTrace.exe log format, it allows highlighting of message type.
Options: 1 = Information (default), 2 = Warning (highlighted in yellow), 3 = Error (highlighted in red)

```yaml
Type: Int16
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: 1
Accept pipeline input: False
Accept wildcard characters: False
```

### -Source
The source of the message being logged.

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

### -ScriptSection
The heading for the portion of the script that is being executed.
Default is: $script:installPhase.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: $script:installPhase
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogType
Choose whether to write a CMTrace.exe compatible log file or a Legacy text log file.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 5
Default value: $configToolkitLogStyle
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogFileDirectory
Set the directory where the log file will be saved.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 6
Default value: $(If ($configToolkitCompressLogs) { $logTempFolder } Else { $configToolkitLogDir })
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogFileName
Set the name of the log file.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 7
Default value: $logName
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxLogFileSizeMB
Maximum file size limit for log file in megabytes (MB).
Default is 10 MB.

```yaml
Type: Decimal
Parameter Sets: (All)
Aliases:

Required: False
Position: 8
Default value: $configToolkitLogMaxSize
Accept pipeline input: False
Accept wildcard characters: False
```

### -WriteHost
Write the log message to the console.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 9
Default value: $configToolkitLogWriteToHost
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContinueOnError
Suppress writing log message to console on failure to write message to log file.
Default is: $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 10
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Return the message that was passed to the function

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 11
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -DebugMessage
Specifies that the message is a debug message.
Debug messages only get logged if -LogDebugMessage is set to $true.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 12
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogDebugMessage
Debug messages only get logged if this parameter is set to $true in the config XML file.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 13
Default value: $configToolkitLogDebugMessage
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

