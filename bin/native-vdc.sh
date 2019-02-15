#!/bin/bash

INSTALL_PATH=/usr/local/bin
INSTALL_BINARY=avmsavdc

validate_user(){
  if [[ "$EUID" -ne 0 ]]
  then
    echo "Please run npm as root to install the Virtual Device Client to /usr/local/bin"
    exit 1;
  fi
}

get_target_info(){
  OS="$(uname)"
  ARCH="$(uname -m)"

  case $OS in
    "Linux")
      ;;
    *)
      echo "Error.  Unsupported OS.  The following are supported:";
      echo " Linux";
      exit 1;
      ;;
  esac

  case $ARCH in
    "armv7l" | "x86_64")
      ;;
    *)
      echo "Error.  Unsupported architecture.  The following are supported:";
      echo " armv7l";
      echo " x86_64";
      exit 1;
      ;;
  esac

  VDC_SRC_FILE=dist/$ARCH/$INSTALL_BINARY
  VDC_DEST_DIR=$INSTALL_PATH
  VDC_DEST_FILE=$VDC_DEST_DIR/$INSTALL_BINARY
}

validate_user
get_target_info

if [[ $# == "1" ]]
then
  if [[ $1 == "install" ]]
  then
    echo "Installing $INSTALL_BINARY";
    echo "--> cp $VDC_SRC_FILE $VDC_DEST_DIR";
    cp $VDC_SRC_FILE $VDC_DEST_DIR
    exit 0;
  elif [[ $1 == "uninstall" ]]
  then
    echo "Uninstalling $INSTALL_BINARY";
    echo "--> rm $VDC_DEST_FILE";
    rm $VDC_DEST_FILE
    exit 0;
  else
    echo "Error.  Unsupported option";
    exit 1;
  fi
fi
echo "Error.  Invalid input";
exit 1;