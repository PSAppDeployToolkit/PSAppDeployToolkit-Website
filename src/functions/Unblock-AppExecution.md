---
editLink: false
isShowComments: false
external help file: PSAppDeployToolkit-help.xml
Module Name: PSAppDeployToolkit
online version: http://psappdeploytoolkit.com
schema: 2.0.0
---

# Unblock-AppExecution

## SYNOPSIS
Unblocks the execution of applications performed by the Block-AppExecution function

## SYNTAX

```
Unblock-AppExecution [<CommonParameters>]
```

## DESCRIPTION
This function is called by the Exit-Script function or when the script itself is called with the parameters -CleanupBlockedApps

## EXAMPLES

### EXAMPLE 1
```
Unblock-AppExecution
```

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
This is an internal script function and should typically not be called directly.
It is used when the -BlockExecution parameter is specified with the Show-InstallationWelcome function to undo the actions performed by Block-AppExecution.

## RELATED LINKS

[http://psappdeploytoolkit.com](http://psappdeploytoolkit.com)

