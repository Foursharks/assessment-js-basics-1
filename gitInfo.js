/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = `Git is software that allows people to control their documents' versions so they can go back to other versions if they make a mistake, and work together on the same project on the appropriate version`

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = 'GitHub is a cloud storage place for projects so people can work together on them, view them, and download files they need'

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const gitInitDefinition = `git init creates an empty repository with a hidden subdirectory that is used to control all versions of files stored in that repository. Once a repository is initiatized, it can be linked to a remote cloud repository, such as Git Hub, for collaboration`

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
const gitCloneDefinition = `git clone creates a copy of a repository so that you can work on it, without changing the source files, which is helpful for contributing to a project with others`

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatusDefinition =`The git status command is used when you want to know what files were changed, if they were commited, and which files were not committed, which is useful to help identify if there are issues or to confirm that a change was made`

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const gitAddDefinition = `The git add command is used to add selected files, or all files, to the staging area to be included in the next commit`
const gitAddCode = `git add .`

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
const gitCommitDefinition = `The git commit command will capture the staged changes for tracking and version control, as well as to troubleshoot any issues with the repository, or collaborate on a version of code with others so there is transparency on what changed`
const gitCommitCode = `git commit -m "Initial Commit" `


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
const gitPushDefinition =`The git push command will upload changes made to files in a local version of the repository to the repository's remote location, allowing it to be worked on by others, making the changes visible to all, and merging the code with the code on the remote repository`