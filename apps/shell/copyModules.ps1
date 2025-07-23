# Set list of remotes to copy
$Remotes = @("role-management", "user-management")

foreach ($Remote in $Remotes) {
    # Set source and target paths
    $SourcePath = Join-Path -Path $PSScriptRoot -ChildPath "..\$Remote\dist"
    $TargetPath = Join-Path -Path $PSScriptRoot -ChildPath "public\remotes\$Remote"

    # Resolve source path
    try {
        $ResolvedSource = Resolve-Path $SourcePath -ErrorAction Stop
    } catch {
        Write-Host "Skipping ${Remote}: Source path not found (${SourcePath})"
        continue
    }

    # Ensure target directory exists
    if (-not (Test-Path $TargetPath)) {
        New-Item -ItemType Directory -Path $TargetPath -Force | Out-Null
    }

    # Clean and copy
    Write-Host "Clearing: ${TargetPath}"
    Remove-Item -Recurse -Force -Path "$TargetPath\*" -ErrorAction SilentlyContinue

    Write-Host "Copying ${Remote} from ${ResolvedSource} to ${TargetPath}..."
    Copy-Item -Recurse -Force -Path "$ResolvedSource\*" -Destination $TargetPath

    Write-Host "${Remote} copied successfully.`n"
}

Write-Host "All remotes processed."
