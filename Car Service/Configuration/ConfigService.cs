using Bisness_Logic.Interfaces;
using Bisness_Logic.Services;
using Data_Access;
using Data_Access.Interfaces;
using Data_Access.Repositories;
using Domain.MappingProfiles;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using System;

namespace Car_Service.Configuration
{
    public static class ConfigService
    {
        public static void Config(IServiceCollection services, IConfiguration Configuration)
        {
            AutoMapperConfig(services);
            RepositoryConfig(services);
            ServiceConfig(services);
            InfrastructureConfig(services);
            DataAccessConfig(services, Configuration);
        }

        private static void AutoMapperConfig(IServiceCollection services)
        {
            services.AddAutoMapper(typeof(MarkProfile),typeof(ModelProfile));
        }

        private static void RepositoryConfig(IServiceCollection services)
        {
            services.AddScoped<ICarRepository, CarRepository>();
            services.AddScoped<IMarkRepository, MarkRepository>();
            services.AddScoped<IModelRepository, ModelRepository>();
            services.AddScoped<IPriceRepository, PriceRepository>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
        }

        private static void ServiceConfig(IServiceCollection services)
        {
            services.AddScoped<IPriceService, PriceService>();
            services.AddScoped<IModelService, ModelService>();
            services.AddScoped<IMarkService, MarkService>();
            services.AddScoped<ICarService, CarService>();
        }

        private static void InfrastructureConfig(IServiceCollection services)
        {
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Car_Service", Version = "v1" });
            });
            services.AddCors(options =>
            {
                options.AddPolicy(name: "default",
                                  policy =>
                                  {
                                      policy.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod();
                                  });
            });
        }

        private static void DataAccessConfig(IServiceCollection services, IConfiguration Configuration)
        {
            string connection = Configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<ApplicationContext>(options =>
           options.UseSqlServer(connection));
        }
    }
}
