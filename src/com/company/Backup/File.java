package com.company.Backup;

public class File {

    // need clarification on what type these are
    private String restoreFile;
    private String backupFile;
    private String newBackupFile;

    public File(){}

    public String getRestoreFile(){return restoreFile}
    public void setRestoreFile(String newRestoreFile){restoreFile = newRestoreFile;}
    public String getBackupFile(){return backupFile;}
    public void setBackupFile(String newBackupFile){backupFile = newBackupFile;}
    // public void newBackupFile(){}        [wasn't sure what this exactly was; clarification needed]
}
