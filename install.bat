@echo off
echo AI卡片生成器安装脚本
echo =========================
echo.

:: 检查Node.js安装
where node >nul 2>nul
if %errorlevel% neq 0 (
  echo 错误: 未检测到Node.js安装。
  echo 请先安装Node.js (https://nodejs.org/)，然后重新运行此脚本。
  pause
  exit /b 1
)

:: 检查npm安装
where npm >nul 2>nul
if %errorlevel% neq 0 (
  echo 错误: 未检测到npm安装。
  echo 请先安装Node.js (https://nodejs.org/)，然后重新运行此脚本。
  pause
  exit /b 1
)

echo 检测到Node.js和npm已安装。
echo.

:: 安装依赖
echo 正在安装依赖...
call npm install
if %errorlevel% neq 0 (
  echo.
  echo 安装依赖时出错。可能是由于PowerShell脚本执行策略限制。
  echo 尝试临时解决方案...
  
  :: 尝试使用--ignore-scripts标志
  echo 使用--ignore-scripts选项重新安装...
  call npm install --ignore-scripts
  
  echo.
  echo 如果仍然有问题，请以管理员身份运行PowerShell并执行:
  echo Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
  echo 然后重新运行此安装脚本。
  pause
  exit /b 1
)

echo.
echo 依赖安装完成!
echo.

:: 询问用户是否要立即启动项目
set /p start_now="是否要立即启动开发服务器? (Y/N): "
if /i "%start_now%"=="Y" (
  echo 正在启动开发服务器...
  call npm run dev
) else (
  echo.
  echo 安装已完成。要启动项目，请运行: npm run dev
  echo 然后在浏览器中访问: http://localhost:3000
)

echo.
pause 