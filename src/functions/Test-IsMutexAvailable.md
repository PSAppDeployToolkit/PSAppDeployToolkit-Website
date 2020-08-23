---
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Test-IsMutexAvailable

## SYNOPSIS
Wait, up to a timeout value, to check if current thread is able to acquire an exclusive lock on a system mutex.

## SYNTAX

```
Test-IsMutexAvailable [-MutexName] <String> [[-MutexWaitTimeInMilliseconds] <Int32>] [<CommonParameters>]
```

## DESCRIPTION
A mutex can be used to serialize applications and prevent multiple instances from being opened at the same time.
Wait, up to a timeout (default is 1 millisecond), for the mutex to become available for an exclusive lock.

## EXAMPLES

### EXAMPLE 1
```
Test-IsMutexAvailable -MutexName 'Global\_MSIExecute' -MutexWaitTimeInMilliseconds 500
```

### EXAMPLE 2
```
Test-IsMutexAvailable -MutexName 'Global\_MSIExecute' -MutexWaitTimeInMilliseconds (New-TimeSpan -Minutes 5).TotalMilliseconds
```

### EXAMPLE 3
```
Test-IsMutexAvailable -MutexName 'Global\_MSIExecute' -MutexWaitTimeInMilliseconds (New-TimeSpan -Seconds 60).TotalMilliseconds
```

## PARAMETERS

### -MutexName
The name of the system mutex.

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

### -MutexWaitTimeInMilliseconds
The number of milliseconds the current thread should wait to acquire an exclusive lock of a named mutex.
Default is: 1 millisecond.
A wait time of -1 milliseconds means to wait indefinitely.
A wait time of zero does not acquire an exclusive lock but instead tests the state of the wait handle and returns immediately.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: 1
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
This is an internal script function and should typically not be called directly.
http://msdn.microsoft.com/en-us/library/aa372909(VS.85).asp

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

