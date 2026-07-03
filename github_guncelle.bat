@echo off
echo.
echo ===================================================
echo     DAVETIYE SISTEMI GITHUB GUNCELLEME ARACI
echo ===================================================
echo.
echo Kodlariniz taranarak degisiklikler algilaniyor...
git add .
echo.
set /p commitMsg="Lutfen ne degistirdiginizi kisaca yazin (ornegin: resim guncellendi): "
git commit -m "%commitMsg%"
echo.
echo Vercel ve Github'a yukleniyor (Push islemi)...
git push
echo.
echo ===================================================
echo ISLEM TAMAMLANDI! Degisiklikler Vercel'e yansiyacaktir.
echo ===================================================
pause
