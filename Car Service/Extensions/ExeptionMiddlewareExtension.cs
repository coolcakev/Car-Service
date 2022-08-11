using Car_Service.Middlewares;
using Microsoft.AspNetCore.Builder;

namespace Car_Service.Extensions
{
    public static class ExeptionMiddlewareExtension
    {
        public static void UseExeptionHandle(this IApplicationBuilder app)
        {
            app.UseMiddleware<CustomErrorHelndleMiddleware>();
        }
    }
}
