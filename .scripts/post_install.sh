#!/bin/bash


echo "=> Installing react storybook globally"
echo ""
getstorybook
echo ""
echo "=> Post install script fininished"

. .scripts/user/postinstall.sh
