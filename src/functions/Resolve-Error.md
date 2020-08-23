---
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Resolve-Error

## SYNOPSIS
Enumerate error record details.

## SYNTAX

```
Resolve-Error [[-ErrorRecord] <Array>] [[-Property] <String[]>] [-GetErrorRecord] [-GetErrorInvocation]
 [-GetErrorException] [-GetErrorInnerException] [<CommonParameters>]
```

## DESCRIPTION
Enumerate an error record, or a collection of error record, properties.
By default, the details for the last error will be enumerated.

## EXAMPLES

### EXAMPLE 1
```
Resolve-Error
```

### EXAMPLE 2
```
Resolve-Error -Property *
```

### EXAMPLE 3
```
Resolve-Error -Property InnerException
```

### EXAMPLE 4
```
Resolve-Error -GetErrorInvocation:$false
```

## PARAMETERS

### -ErrorRecord
The error record to resolve.
The default error record is the latest one: $global:Error\[0\].
This parameter will also accept an array of error records.

```yaml
Type: Array
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Property
The list of properties to display from the error record.
Use "*" to display all properties.
Default list of error properties is: Message, FullyQualifiedErrorId, ScriptStackTrace, PositionMessage, InnerException

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: ('Message', 'InnerException', 'FullyQualifiedErrorId', 'ScriptStackTrace', 'PositionMessage')
Accept pipeline input: False
Accept wildcard characters: False
```

### -GetErrorRecord
Get error record details as represented by $_.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -GetErrorInvocation
Get error record invocation information as represented by $_.InvocationInfo.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -GetErrorException
Get error record exception details as represented by $_.Exception.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 5
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -GetErrorInnerException
Get error record inner exception details as represented by $_.Exception.InnerException.
Will retrieve all inner exceptions if there is more than one.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 6
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

