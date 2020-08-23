---
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Test-PowerPoint

## SYNOPSIS
Tests whether PowerPoint is running in either fullscreen slideshow mode or presentation mode.

## SYNTAX

```
Test-PowerPoint [<CommonParameters>]
```

## DESCRIPTION
Tests whether someone is presenting using PowerPoint in either fullscreen slideshow mode or presentation mode.

## EXAMPLES

### EXAMPLE 1
```
Test-PowerPoint
```

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
This function can only execute detection logic if the process is in interactive mode.
There is a possiblity of a false positive if the PowerPoint filename starts with "PowerPoint Slide Show".

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

