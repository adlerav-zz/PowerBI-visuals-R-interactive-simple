############### Library Declarations ###############

libraryRequireInstall = function(packageName, ...)
{
  if(!require(packageName, character.only = TRUE)) 
    warning(paste("*** The package: '", packageName, "' was not installed ***",sep=""))
}

libraryRequireInstall('ggplot2');
#################################################

############### Actual code ###############
g = qplot(`Petal.Length`, data = iris, fill = `Species`, main = Sys.time());

g
#################################################