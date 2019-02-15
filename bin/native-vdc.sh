#!/bin/bash

if [ "$EUID" -ne 0 ]
then
    echo "Please run npm as root to install the Virtual Device Client to /usr/local/bin"
    exit 1;
fi

OS="$(uname)"
ARCH="$(uname -m)"

case $OS in
"Linux")
    ;;
*)
    echo "Unsupported OS...";
    return 1;
esac

case $ARCH in
"armv7l" | "x86_64")
    ;;
*)
    echo "Unsupported architecture...";
    return 1;
esac

VDC_SRC_FILE=dist/$ARCH/avmsavdc
VDC_DEST_DIR=/usr/local/bin
VDC_DEST_FILE=$VDC_DEST_DIR/avmsavdc


if [ $# == "1" ]
then
    if [ $1 == "install" ]
    then
        echo "installing avmsavdc...";
        cp $VDC_SRC_FILE $VDC_DEST_DIR
        exit 0;
    elif [ $1 == "uninstall" ]
    then
        echo "uninstalling avmsavdc...";
        rm $VDC_DEST_FILE
        exit 0;
    else
        echo "unsupported option...";
        exit 1;
    fi
fi
echo "error";
exit 1;