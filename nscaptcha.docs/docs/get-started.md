---
sidebar_position: 2
title: Getting Started
---


# Getting Started: Secure Your Apps with Ease

Welcome to NSCaptcha! This guide will get you up and running with NSCaptcha, a powerful and customizable CAPTCHA library for .NET applications. Protect your applications from bots and spam with just a few simple steps.

## What is NSCaptcha?

NSCaptcha is an open-source library that provides robust CAPTCHA services, helping you distinguish between human users and automated bots. It's designed for flexibility, ease of use, and seamless integration into your .NET projects.

## Installation

### NuGet Package

NSCaptcha is available as a NuGet package. Install it using the following command in your project's Package Manager Console or the .NET CLI:

```bash
Install-Package NSCaptcha
```
You can find the package on [NuGet](https://www.nuget.org/packages/NSCaptcha/).

## Configuration

### 1.Service Registration
Register the NSCaptcha service in your Program.cs (for .NET 6 and later) or Startup.cs (for older .NET Framework/Core versions). This is crucial for setting up data protection and caching.

```csharp{numberLines,highlightLines=[2,5]}
builder.Services.AddDataProtection()
    .SetApplicationName("<Your Project Name>") // Replace with a unique name for your app
    .PersistKeysToFileSystem(new DirectoryInfo(Path.Combine(builder.Environment.ContentRootPath, "keys"))); // For development

// Choose ONE of the following for production key storage:

// Persist keys to the Windows Registry (less recommended for portability)
//builder.Services.AddDataProtection().SetApplicationName("<Your Project Name>").PersistKeysToRegistry(<registry key>);

// Persist keys to a database using Entity Framework Core (for distributed apps)
//builder.Services.AddDataProtection().SetApplicationName("<Your Project Name>").PersistKeysToDbContext<YourDbContext>();

// Persist keys to a secure location in the file system (more secure than the root path)
//builder.Services.AddDataProtection().SetApplicationName("<Your Project Name>").PersistKeysToFileSystem(new DirectoryInfo(Path.Combine("<fully qualified path to a secure directory>")));


builder.Services.AddMemoryCache(); // For caching CAPTCHA challenges (if applicable)

builder.Services.AddCaptcha(); // Add NSCaptcha Service
```
### Explanation:
- **AddDataProtection() :** This is essential for securing CAPTCHA data. It provides cryptographic services to protect against tampering.
- **SetApplicationName() :** Use a unique name for your application. This isolates your data protection keys from other applications.
- **PersistKeysToFileSystem() :** The provided code stores keys in a "keys" folder within your application's directory. **For production, this is strongly discouraged**. Use a more secure key storage provider (see below). I've added commented-out examples and a more secure file system option.
- **AddMemoryCache() :** Registers an in-memory cache, which can be used to store CAPTCHA challenges temporarily for faster verification. This is optional but recommended for performance.
- **AddCaptcha() :** This adds the necessary services for NSCaptcha to function. This is the key line based on your provided image.

### Production Key Storage (Alternatives):
For production environments, you must use a secure key storage mechanism. Here are some options:
- **Azure Key Vault :** This is essential for securing CAPTCHA data. It provides cryptographic services to protect against tampering.
- **Redis :** This is essential for securing CAPTCHA data. It provides cryptographic services to protect against tampering.
- **Protected Configuration (Windows) :** This is essential for securing CAPTCHA data. It provides cryptographic services to protect against tampering.
- **Secure File System Location :** This is essential for securing CAPTCHA data. It provides cryptographic services to protect against tampering.

### Example (Azure Key Vault):

```csharp{numberLines,highlightLines=[2,5]}
// In your Program.cs
builder.Services.AddDataProtection()
    .SetApplicationName("<Your Project Name>")
    .PersistKeysToAzureKeyVault(new AzureKeyVaultConfiguration(...)); // Your Azure Key Vault config
```

### Example (Redis):

```csharp{numberLines,highlightLines=[2,5]}
builder.Services.AddDataProtection()
    .SetApplicationName("<Your Project Name>")
    .PersistKeysToRedis(new RedisConfiguration(...)); // Your Redis config
```

Choose the option that best fits your deployment environment.

### 2.Using NSCaptcha

- **1.** Create a CAPTCHA image endpoint:
````csharp
[Route("image")]
[HttpGet]
public async Task<FileContentResult> GetImage()
{
    var captcha = _captchaService.Create();
    return new FileContentResult(captcha.Image, "image/png");
}
````
- **2.** Add the `[ValidateCaptcha]` attribute to your controller action:
````csharp
[Route("validate")]
[HttpPost]
[ValidateCaptcha]
public async Task Validate([FromBody] CaptchaTest3 valued)
{
    // ... your logic ...
}
````
:::tip Hint
Regardless of the input attribute used (e.g., `[FromBody]`), NSCaptcha will process your input.
:::

:::danger Be Careful
NSCaptcha will process your input regardless of how your CAPTCHA property is nested within your request object.
  However, the CAPTCHA property must be named 'CaptchaValue'.
:::