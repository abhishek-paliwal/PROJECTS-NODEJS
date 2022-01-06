#/bin/bash

## BASH PROGRAM FOR CREATING NODE JS APPLICATIONS

WORKDIR="${REPO_NODEJS}" ; 
echo ">> Current PWD => $WORKDIR" ; 

##++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function FUNC_CREATE_NODEJS_PROJECT () {
    echo ">> ENTER Name of the NODE JS APP project folder to create : " ; 
    read node_app_name ;
    APPDIR="$WORKDIR/$node_app_name" ; 
    mkdir -p "$APPDIR" ;
    echo ">> CD'ing to the app folder ..." ; 
    cd "$APPDIR" ; 
    echo "** Current PWD = $(pwd) **" ; 
    echo ">> CREATING NODE APP USING => npm init -y" ;
    npm init -y ; ## chooses all default options 
    echo ">> NODE-JS app created. Contents of app folder listed below ..." ; 
    ls -al "$APPDIR" ; 
}
##++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

echo ">> SELECT THE OPTION NUMBER FROM BELOW: " ; 

select myOptn in "Create the NodeJS app" "Run the NodeJS app locally" ;  do
    echo "You have chosen => $myOptn" ;
    ##++++++++++++
    case $myOptn in
    "Create the NodeJS app")
    FUNC_CREATE_NODEJS_PROJECT ; 
    ;;
    "Run the NodeJS app locally")
    ## RUNNING THE APP LOCALLY
    echo ">> RUNNING THE APP LOCALLY ..."  ; 
    npm index.js ; 
    ;;
    *)
    echo "*** Invalid entry. Breaking out. ***"
    break ;
    ;;
    esac
    ##++++++++++++
done
