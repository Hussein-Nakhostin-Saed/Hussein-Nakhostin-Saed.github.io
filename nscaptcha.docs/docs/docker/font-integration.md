---
sidebar_position: 1
title: Font Integration
---
# Integrating Fonts into Your Docker Image

This guide explains how to integrate custom fonts into your Docker image, specifically within a Linux-based environment.  We'll focus on the provided Dockerfile example and the necessary commands.

## Adding Fonts to the Dockerfile

The core of font integration lies within these lines of your Dockerfile:

```dockerfile
COPY Fonts /usr/local/share/fonts
RUN apt-get update && apt-get install -y fontconfig
RUN fc-cache -f -v
```
### Let's break down what each line does:
1. `COPY Fonts /usr/local/share/fonts`: This line copies the `Fonts` directory from your host machine (where the Dockerfile resides) into the Docker image's `/usr/local/share/fonts` directory.  It's crucial that you have a directory named `Fonts` in the same directory as your Dockerfile, and this `Fonts` directory should contain the font files you want to install (e.g., `.ttf`, `.otf`, etc.).  This `COPY` command happens after the application is built and published, placing the fonts in the final image.

2. `RUN apt-get update && apt-get install -y fontconfig`: This line executes commands inside the Docker image.  It first updates the package lists for Debian-based systems (which is likely the base image you're using).  Then, it installs `fontconfig`, a library that manages fonts on Linux. The `-y` flag automatically answers "yes" to any prompts during the installation, preventing the build from hanging.

3. `RUN fc-cache -f -v`: This command, also run inside the Docker image, updates the font cache.  `fc-cache` is a utility provided by `fontconfig`. The `-f` flag forces a rebuild of the cache, even if fonts haven't changed. The `-v` flag provides verbose output, showing you what the command is doing.  This step is essential because simply copying the font files isn't enough; the system needs to be aware of them.

### Example

```dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base

FROM mcr.microsoft.com/dotnet/sdk:8.0 as backend-build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["./NSCaptcha/NSCaptcha.csproj", "NSCaptcha/"]
COPY ["./NSCaptcha.Test/NSCaptcha.Test.csproj", "NSCaptcha.Test/"]
RUN dotnet restore "./NSCaptcha.Test/NSCaptcha.Test.csproj"
COPY . .
RUN dotnet build "./NSCaptcha.Test/NSCaptcha.Test.csproj" -c $BUILD_CONFIGURATION -o /app/build 

FROM backend-build as backend-publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./NSCaptcha.Test/NSCaptcha.Test.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base as final
WORKDIR /app
COPY --from=backend-publish /app/publish .

COPY Fonts /usr/local/share/fonts
RUN apt-get update && apt-get install -y fontconfig
RUN fc-cache -f -v

ENTRYPOINT ["dotnet","NSCaptcha.Test.dll"]
EXPOSE 5229
```

### Summary of the Dockerfile
The provided Dockerfile builds and runs a .NET application, likely a test project (`NSCaptcha.Test.dll`). Here's a summary of its stages:

1. `base`: This stage uses the `mcr.microsoft.com/dotnet/aspnet:8.0` image as a base for the final image. It contains the .NET runtime.

2. `backend-build`: This stage uses the .NET SDK image (`mcr.microsoft.com/dotnet/sdk:8.0`) to build the application. It copies the project files, restores dependencies, and builds the test project.

3. `backend-publish`: This stage publishes the test project, creating a self-contained deployment.

4. `final`: This is the final image. It copies the published application from the `backend-publish` stage to the `/app` directory.  This is where the font integration happens. The `COPY Fonts ...`, `apt-get ...`, and `fc-cache ...` commands are executed in this stage, ensuring the fonts are available in the final image.  Finally, it sets the entry point to run the test DLL and exposes port 5229.

## Integrating Fonts - Key Considerations

 - **Font Licensing:** Ensure you have the appropriate licenses for any fonts you include in your Docker image.

 - **Base Image:** The `apt-get` commands are specific to Debian-based distributions. If you're using a different distribution (e.g., Alpine Linux), you'll need to use the appropriate package manager (e.g., `apk`).

 - **Font Directory:** The `/usr/local/share/fonts` directory is a common location for fonts on Linux. You can use other directories, but you might need to adjust the `fc-cache` command accordingly.

 - **Dockerfile Structure:** The provided Dockerfile is multi-stage, which is a best practice. It keeps the final image small by only including the necessary artifacts. The font integration happens in the `final` stage, after the application is built and published.

 By following these steps, you can successfully integrate custom fonts into your Docker images, ensuring your applications have the correct visual appearance. Remember to rebuild your Docker image after making changes to the Dockerfile or the `Fonts` directory.