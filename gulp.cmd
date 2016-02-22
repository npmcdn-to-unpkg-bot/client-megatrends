@echo off

if exist node_modules\.bin\gulp goto :run_gulp

echo Building npm modules:
call npm rebuild

:run_gulp
call node_modules\.bin\gulp %*
