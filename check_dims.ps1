Add-Type -AssemblyName System.Drawing
$files = @("public/aitomat-screen-inicio.png", "public/aitomat-screen-prioridades.png", "public/aitomat-screen-calendario.png")
foreach ($f in $files) {
    $bmp = New-Object System.Drawing.Bitmap($f)
    Write-Output "$f : $($bmp.Width) x $($bmp.Height)"
}
