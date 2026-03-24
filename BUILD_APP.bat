@echo off
echo ========================================
echo FORTRESS STONE BUILD SCRIPT
echo ========================================
echo.
echo Building your app...
echo.

cd /d "%~dp0"
call npm run build

echo.
echo ========================================
echo BUILD COMPLETE!
echo ========================================
echo.
echo Your dist folder is now ready!
echo You can now drag the dist folder to Netlify!
echo.
pause
