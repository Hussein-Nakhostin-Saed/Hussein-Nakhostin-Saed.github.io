---
sidebar_position: 8
title: ICaptchaTokenSerializer
---


# `ICaptchaTokenSerializer` Interface

This document describes the `ICaptchaTokenSerializer` interface and how to use it to customize captcha token storage and retrieval in your application.  It's crucial to understand this interface if you need to implement your own token handling mechanism.

## `ICaptchaTokenSerializer` Interface Overview

The `ICaptchaTokenSerializer` interface defines the methods required for serializing, deserializing, and clearing captcha tokens.  Implementations of this interface handle the persistence of captcha tokens, allowing you to choose different storage mechanisms like cookies, session storage, databases, or distributed caches.

## Interface Methods

The `ICaptchaTokenSerializer` interface defines the following methods:

### `Serialize(string token)`

This method serializes the provided captcha token.  The implementation should store the token in the chosen storage mechanism.

*   **`token`**: The captcha token to serialize (a string).
*   **`CaptchaException`**:  Implementations should throw a `CaptchaException` if an error occurs during serialization. This can include issues like an invalid token format or failures in accessing the storage.

### `Deserialize()`

This method deserializes a captcha token.  The implementation should retrieve the token from the storage mechanism and return it.

*   **Return Value**: The deserialized captcha token (a string), or `null` if the token does not exist or an error occurs during deserialization.
*   **`CaptchaException`**: Implementations should throw a `CaptchaException` if an error occurs during deserialization, such as failures in accessing the storage or an invalid token format.

### `Clear()`

This method clears the stored captcha token.  The implementation should remove the token from the storage mechanism.

*   **`CaptchaException`**: Implementations should throw a `CaptchaException` if an error occurs while clearing the token, such as failures in accessing the storage.

## Implementing `ICaptchaTokenSerializer`

If you want to provide a custom way of storing and retrieving Captcha tokens, you will need to implement this interface.

1.  Create a class that implements the `ICaptchaTokenSerializer` interface.
2.  Implement the `Serialize`, `Deserialize`, and `Clear` methods according to your chosen storage mechanism.
3.  Register your custom implementation using the `AddCaptchaTokenSerializerService` method.

## Registering Custom Implementations

You register custom implementations of `ICaptchaTokenSerializer` (which `ICaptchaTokenSerializer` implementations are often used with) using the `AddCaptchaTokenCacheService` method.

```csharp
builder.Services.AddCaptchaTokenSerializer<YourCustomCaptchaTokenSerializerService>(); //In Program.cs for .NET 6+

//Or in Startup.cs for older .NET Framework versions:
services.AddCaptchaTokenSerializer<YourCustomCaptchaTokenSerializerService>();
```
Replace `YourCustomCaptchaTokenSerializerService` with the actual name of your class that implements `ICaptchaTokenSerializer`. This registration should be done in your `Program.cs `(for .NET 6 and later) or `Startup.cs` (for older ASP.NET versions).