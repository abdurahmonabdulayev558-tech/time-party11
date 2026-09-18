@echo off
chcp 65001 >nul
title Time Party - ishga tushirish
cd /d "%~dp0"

echo ============================================
echo   TIME PARTY - ishga tushirilmoqda...
echo ============================================
echo.

REM 1) Eski node processlarni to'xtatish (port band bo'lmasligi uchun)
echo [1/3] Eski serverlar to'xtatilmoqda...
taskkill /F /IM node.exe >nul 2>&1

REM 2) Paketlar o'rnatilganligini tekshirish
if not exist "node_modules" (
  echo [2/3] Paketlar o'rnatilmoqda ^(bir necha daqiqa^)...
  call npm install
)
if not exist "server\node_modules" (
  echo [2/3] Backend paketlari o'rnatilmoqda...
  call npm --prefix server install
)

REM 3) Ishga tushirish
echo [3/3] Server ishga tushirilmoqda...
echo.
echo   Sayt:   http://localhost:5173
echo   Admin:  http://localhost:5173/admin
echo   Ustoz:  http://localhost:5173/teacher
echo.
echo   Sayt brauzerda avtomatik ochiladi.
 echo   To'xtatish uchun Ctrl+C bosing (yoki oynani yoping).
echo ============================================
echo.

start "" http://localhost:5173
call npm run dev

pause
