
using Car_Service.Models.ErrorModels;
using Domain.DTOs.ErrorDTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace Car_Service.Middlewares
{
    public class CustomErrorHelndleMiddleware
    {
        private readonly RequestDelegate _next;

        public CustomErrorHelndleMiddleware(RequestDelegate next)
        {
            _next = next;
        }
        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch (DeleteExeption ex)
            {
                await DeleteExeptionHandler(httpContext, ex);
            }
            catch (DbUpdateException ex)
            {
                await DbUpdateExceptionHandler(httpContext, ex);
            }
            catch (Exception ex)
            {

                await HandleExeptionAsync(httpContext, ex);
            }
        }

        private Task DbUpdateExceptionHandler(HttpContext context, DbUpdateException ex)
        {
            context.Response.StatusCode = StatusCodes.Status409Conflict;

            var errorDetails = new ErrorDetails()
            {
                StatusCode = context.Response.StatusCode,
                Message = "This name is alredy exists, create another one ",
            };
            return context.Response.WriteAsJsonAsync(errorDetails);
        }

        private Task DeleteExeptionHandler(HttpContext context, DeleteExeption ex)
        {
            context.Response.StatusCode = StatusCodes.Status403Forbidden;

            var errorDetails = new ErrorDetails()
            {
                StatusCode = context.Response.StatusCode,
                Message = ex.Message,
            };
            return context.Response.WriteAsJsonAsync(errorDetails);
        }

        private Task HandleExeptionAsync(HttpContext context, Exception ex)
        {
            context.Response.StatusCode = (int)StatusCodes.Status500InternalServerError;

            var errorDetails = new ErrorDetails()
            {
                StatusCode = context.Response.StatusCode,
                Message = ex.ToString()
            };
            return context.Response.WriteAsJsonAsync(errorDetails);

        }
    }
}
