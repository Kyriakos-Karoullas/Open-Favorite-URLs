@echo off
cd /d "C:\........Path of the file openAllGui............."

rem start server in a new window (keeps it open so you can see logs)
start "brokerageGui server" cmd /k "npm run start"

rem open the site in your default browser
start "" "http://127.0.0.1:PORT/"

pause
