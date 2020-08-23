---
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Get-ObjectProperty

## SYNOPSIS
Get a property from any object.

## SYNTAX

```
Get-ObjectProperty [-InputObject] <Object> [-PropertyName] <String> [[-ArgumentList] <Object[]>]
 [<CommonParameters>]
```

## DESCRIPTION
Get a property from any object.

## EXAMPLES

### EXAMPLE 1
```
Get-ObjectProperty -InputObject $Record -PropertyName 'StringData' -ArgumentList @(1)
```

## PARAMETERS

### -InputObject
Specifies an object which has properties that can be retrieved.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertyName
Specifies the name of a property to retrieve.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArgumentList
Argument to pass to the property being retrieved.

```yaml
Type: Object[]
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
This is an internal script function and should typically not be called directly.

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

