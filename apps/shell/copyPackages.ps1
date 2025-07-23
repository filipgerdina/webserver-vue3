# Load and parse package.json
$packageJsonPath = "package.json"
$packageJson = Get-Content $packageJsonPath -Raw | ConvertFrom-Json

# Base paths
$nodeModulesBase = "node_modules/@gef-modules"
$publicRemotesBase = "public/remotes"
$shellRemotesBase = "../../dist/apps/shell/remotes"

# Extract @gef-modules/* dependencies
$gefModules = $packageJson.devDependencies.PSObject.Properties |
    Where-Object { $_.Name -like "@gef-modules/*" -and $_.Name -ne "@gef-modules/shell" } |
    ForEach-Object {
        $_.Name.Split("/")[1]  # Extract module name (e.g., 'role-management')
    }

if (-not $gefModules) {
    Write-Host "No @gef-modules dependencies found in package.json"
    exit 1
}

foreach ($module in $gefModules) {
    $sourcePath = Join-Path -Path $nodeModulesBase -ChildPath "$module"
    $destPublic = Join-Path -Path $publicRemotesBase -ChildPath $module
    $destShell = Join-Path -Path $shellRemotesBase -ChildPath $module

    Write-Host "Copying $module... from $sourcePath to $destPublic and $destShell"

    if (-not (Test-Path $sourcePath)) {
        Write-Host "Source not found: $sourcePath"
        continue
    }

    # Ensure and empty public/remotes/{module}
    if (-not (Test-Path $destPublic)) { New-Item -ItemType Directory -Path $destPublic | Out-Null }
    Get-ChildItem -Path $destPublic -Recurse -Force | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

    # Ensure and empty ../../dist/apps/shell/remotes/{module}
    if (-not (Test-Path $destShell)) { New-Item -ItemType Directory -Path $destShell | Out-Null }
    Get-ChildItem -Path $destShell -Recurse -Force | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

    # Copy to destinations
    Copy-Item -Path $sourcePath\* -Destination $destPublic -Recurse -Force
    Copy-Item -Path $sourcePath\* -Destination $destShell -Recurse -Force

    Write-Host "$module copied successfully.`n"
}

Write-Host "All @gef-modules copied."
