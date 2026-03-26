!macro customInit
  ; Force kill any running instance before install
  nsExec::ExecToLog 'taskkill /f /im "EDAFY Presenter.exe"'
  nsExec::ExecToLog 'taskkill /f /im "Edafy Platform Slides.exe"'

  ; Remove old "Edafy Platform Slides" installation (old productName)
  ReadRegStr $0 HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\edafy-presenter-2026-otc" "UninstallString"
  ${If} $0 != ""
    nsExec::ExecToLog '"$0" /S'
    Sleep 2000
  ${EndIf}

  ; Also try the old GUID-based uninstall paths
  ReadRegStr $0 HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\{edafy-presenter-2026-otc}" "UninstallString"
  ${If} $0 != ""
    nsExec::ExecToLog '"$0" /S'
    Sleep 2000
  ${EndIf}

  ; Force remove leftover directories from both old and new product names
  RMDir /r "$PROGRAMFILES\EDAFY Presenter"
  RMDir /r "$PROGRAMFILES\Edafy Platform Slides"
  RMDir /r "$LOCALAPPDATA\edafy-presenter"
  RMDir /r "$LOCALAPPDATA\edafy-platform-slides"
  RMDir /r "$LOCALAPPDATA\Programs\edafy-presenter"
  RMDir /r "$LOCALAPPDATA\Programs\EDAFY Presenter"
  RMDir /r "$LOCALAPPDATA\Programs\Edafy Platform Slides"

  ; Clean up old registry entries
  DeleteRegKey HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\edafy-presenter-2026-otc"
  DeleteRegKey HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\{edafy-presenter-2026-otc}"
  DeleteRegKey HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\edafy-presenter-2026-otc"
  DeleteRegKey HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\{edafy-presenter-2026-otc}"
!macroend
