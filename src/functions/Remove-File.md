---
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Remove-File

## SYNOPSIS
Removes one or more items from a given path on the filesystem.

## SYNTAX

### Path
```
Remove-File -Path <String[]> [-Recurse] [-ContinueOnError <Boolean>] [<CommonParameters>]
```

### LiteralPath
```
Remove-File -LiteralPath <String[]> [-Recurse] [-ContinueOnError <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Removes one or more items from a given path on the filesystem.

## EXAMPLES

### EXAMPLE 1
```
Remove-File -Path 'C:\Windows\Downloaded Program Files\Temp.inf'
```

### EXAMPLE 2
```
Remove-File -LiteralPath 'C:\Windows\Downloaded Program Files' -Recurse
```

## PARAMETERS

### -Path
Specifies the path on the filesystem to be resolved.
The value of Path will accept wildcards.
Will accept an array of values.

```yaml
Type: String[]
Parameter Sets: Path
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LiteralPath
Specifies the path on the filesystem to be resolved.
The value of LiteralPath is used exactly as it is typed; no characters are interpreted as wildcards.
Will accept an array of values.

```yaml
Type: String[]
Parameter Sets: LiteralPath
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Recurse
Deletes the files in the specified location(s) and in all child items of the location(s).

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
Position: Named
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

