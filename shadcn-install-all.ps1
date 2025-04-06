# 설치할 컴포넌트 목록
$components = @(
  "alert-dialog", "avatar", "badge", "button", "calendar", "card", "checkbox",
  "dialog", "dropdown-menu", "form", "input", "label", "menubar",
  "navigation-menu", "popover", "progress", "radio-group", "select", "separator",
  "sheet", "skeleton", "slider", "switch", "table", "tabs", "textarea",
  "toast", "toggle", "tooltip"
)

# 반복 설치
foreach ($comp in $components) {
  Write-Host "Installing : $comp ..."
  npx shadcn@latest add $comp --yes
}
