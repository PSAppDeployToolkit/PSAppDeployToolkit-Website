# Toolkit Components

- [Toolkit File Structure](toolkit-file-structure)
  - [Files](toolkit-file-structure#files)
  - [Directories](toolkit-file-structure#directories)
- [Toolkit User Interface](toolkit-user-interface)
- [Installation Progress](installation-progress)
- [Installation Welcome Prompt](installation-welcome-prompt)

## Block Application Execution

If the block execution option is enabled (see Show-InstallationWelcome function), the user will be prompted that they cannot launch the specified application(s) while the installation is in progress. The application will be unblocked again once the installation has completed.

![](images/image10.png)

## Disk Space Requirements

If the CheckDiskSpace parameter is used with the Show-InstallationWelcome function and the disk space requirements are not met, the following prompt will be displayed and the installation will not proceed.

![](images/image11.png)

## Custom Installation Prompt

A custom prompt with the toolkit branding can be used to display messages and interact with the user using the “Show-InstallationPrompt” function. The title and text is customizable and up to 3 customizable buttons can be included on the prompt as well as optional system icons, e.g.

![](images/image12.png)

Additionally, the prompt can be displayed asynchronously, e.g. to display a message at the end of the installation but allow the installation to return the exit code to the parent process without waiting for the user to respond to the message.

![](images/image13.png)

- [Installation Restart Prompt](installation-restart-prompt)
## Balloon tip notifications

Balloon tip notifications are displayed in the system tray automatically at the beginning and end of the installation. These can be turned off in the XML configuration.

![](images/image15.png)

![](images/image16.png)

![](images/image17.png)

## Custom Dialog box

A generic dialog box to display custom messages to the user without the toolkit branding using the function “Show-DialogBox”. This can be customized with different system icons and buttons.

![](images/image18.png)

![](images/image19.png)

## Logging

The toolkit generates extensive logging for all toolkit and MSI operations.

The default log directory for the toolkit and MSI log files can be specified in the XML configuration file. The default directory is `C:\Windows\Logs\Software\`.

The toolkit log file is named after the application with `_PSAppDeployToolkit` appended to the end, e.g.

Oracle_JavaRuntime_1.7.0.17_EN_01**_PSAppDeployToolkit.log**

All MSI actions are logged and the log file is named according to the MSI file used on the command line, with the action appended to the log file name. For uninstallations, the MSI product code is resolved to the MSI application name and version to keep the same log file format, e.g.

Oracle_JavaRuntimeEnvironmentx86_1.7.0.17_EN_01**_Install.log**

Oracle_JavaRuntimeEnvironmentx86_1.7.0.17_EN_01**_Repair.log**

Oracle_JavaRuntimeEnvironmentx86_1.7.0.17_EN_01**_Patch.log**

Oracle_JavaRuntimeEnvironmentx86_1.7.0.17_EN_01**_Uninstall.log**
