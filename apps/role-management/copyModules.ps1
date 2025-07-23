# Load and parse package.json
$packageJsonPath = "package.json"
$packageJson = Get-Content $packageJsonPath -Raw | ConvertFrom-Json

# Base paths
$nodeModulesBase = "node_modules/@gef-modules"
$destBase = "node_modules/@gef-modules/shell/dist/remotes"

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
    $dest = Join-Path -Path $destBase -ChildPath $module

    Write-Host "Copying $module... from $sourcePath to $dest"

    if (-not (Test-Path $sourcePath)) {
        Write-Host "Source not found: $sourcePath"
        continue
    }

    # Ensure and empty public/remotes/{module}
    if (-not (Test-Path $dest)) { New-Item -ItemType Directory -Path $dest | Out-Null }
    Get-ChildItem -Path $dest -Recurse -Force | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

    # Copy to destinations
    Copy-Item -Path $sourcePath\* -Destination $dest -Recurse -Force

    Write-Host "$module copied successfully.`n"
}

# Copy config.json to shell/dist
$configSource = "config.json"
$configDestDir = "node_modules/@gef-modules/shell/dist"
$configDest = Join-Path -Path $configDestDir -ChildPath "config.json"

if (Test-Path $configSource) {
    Copy-Item -Path $configSource -Destination $configDest -Force
    Write-Host "config.json copied to $configDestDir"
} else {
    Write-Host "config.json not found in current directory."
}

Write-Host "All @gef-modules copied."
