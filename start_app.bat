@echo off
echo ===========================================
echo Setting up NexusFlow AI...
echo ===========================================

cd /d "%~dp0"

echo.
echo [1/2] Installing dependencies (this may take a minute)...
call npm install
if %errorlevel% neq 0 (
    echo.
    echo ERROR: npm install failed. Do you have Node.js installed?
    pause
    exit /b %errorlevel%
)

echo.
echo [2/2] Starting Development Server...
echo.
echo Once the server starts, open your browser to: http://localhost:5173
echo.
call npm run dev

pause
