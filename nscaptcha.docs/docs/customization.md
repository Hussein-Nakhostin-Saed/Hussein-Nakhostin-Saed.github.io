---
sidebar_position: 3
title: Customization
---

# Registering the Captcha Service

This guide explains how to register the Captcha service within your ASP.NET application.  Two methods are provided, and you should choose the one that best suits your needs.  The registration takes place in either `Program.cs` (for .NET 6 and later) or `Startup.cs` (for older ASP.NET versions).

## Method 1: Basic optional Registration

This method is suitable if you don't need to customize the cookie options.  Add the following code to your `Program.cs` or `Startup.cs` (in the `ConfigureServices` method for older ASP.NET versions):

```csharp
builder.Services.AddCaptcha(options =>
{
    options.Content.UseLetters(uselowerCase: true, useUpperCase: false);
    options.Style.AddNoiseLinesColors(Color.Blue, Color.Brown, Color.BurlyWood);
    // ... other options ...
});
```
- `options`: This parameter allows you to configure various aspects of the Captcha, such as the characters used (letters, numbers, etc.), the styling (colors, noise, etc.), and other settings. In the example above, we're configuring the Captcha to use lowercase letters and adding noise lines with specific colors.

## Method 2: Advanced Registration with Cookie Customization
Use this method if you need to customize the cookie options, such as setting `HttpOnly`, `Name`, `SameSite`, or other cookie properties.  Add the following code to your `Program.cs` or `Startup.cs` (in the `ConfigureServices` method for older ASP.NET versions):

```csharp
builder.Services.AddCaptcha((options, cookieOptions) =>
{
    options.Content.UseLetters(uselowerCase: true, useUpperCase: false);
    options.Style.AddNoiseLinesColors(Color.Blue, Color.Brown, Color.BurlyWood);

    cookieOptions.HttpOnly = true;
    cookieOptions.Name = "captcha-cookie-name";
    // ... other cookie options ...
    // Example for setting SameSite:
    // cookieOptions.SameSite = SameSiteMode.Lax; 
});
```
- `options`: Just like in Method 1, this parameter allows you to configure the Captcha itself.
- `cookieOptions`: This parameter allows you to configure the cookie that stores the Captcha challenge. In the example, we're setting `HttpOnly` to `true` (a security best practice) and giving the cookie a specific name. You can add other cookie configuration options as needed. The example shows how to set `SameSite` as well.

## Choosing the Right Method
- If you only need basic Captcha configuration and don't need to customize the cookie, use Method 1. It's simpler and more concise.
- If you need to customize the cookie options (e.g., for security reasons or to meet specific requirements), use Method 2.

## Important Considerations
- **Placement**: Ensure you place the Captcha service registration code within the `builder.Services` section of your `Program.cs` (for .NET 6 and later) or the `ConfigureServices` method of your `Startup.cs` (for older ASP.NET versions). This is where you register all your application's services.
- **Options**: Explore the available options for both the `options` and `cookieOptions` parameters to tailor the Captcha and its cookie to your specific needs. Refer to the documentation for a complete list of available options.
- **.NET Version**: The `Program.cs` style is used in .NET 6 and later. If you're using an older version of ASP.NET, you'll need to use the `Startup.cs` approach.
- **Security**: Setting `cookieOptions.HttpOnly = true` is highly recommended to prevent client-side scripts from accessing the Captcha cookie, mitigating certain security vulnerabilities. Consider using `cookieOptions.SameSite = SameSiteMode.Lax` or `cookieOptions.SameSite = SameSiteMode.Strict` according to your application's needs.

By following these instructions, you can successfully register the Captcha service in your ASP.NET application and begin using it to protect your forms.  Remember to choose the registration method that best suits your requirements and always prioritize security best practices.