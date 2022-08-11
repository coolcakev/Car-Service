using Domain.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
            //Database.EnsureDeleted();
            Database.EnsureCreated();   // создаем базу данных при первом обращении
        }

        public DbSet<Car> Cars { get; set; }
        public DbSet<Mark> Marks { get; set; }
        public DbSet<Model> Models { get; set; }
        public DbSet<Price> Prices { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Mark>()
                .HasMany(p => p.Models)
                .WithOne(x => x.Mark)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Mark>()
                .HasMany(p => p.Cars)
                .WithOne(x => x.Mark)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Model>()
               .HasOne(p => p.Mark)
               .WithMany(x => x.Models)
               .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<Model>()
                 .HasMany(p => p.Cars)
                 .WithOne(x => x.Model)
                 .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Car>()
                .HasMany(p => p.Price)
                .WithOne(x => x.Car)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Car>()
               .HasOne(p => p.Mark)
               .WithMany(x => x.Cars)
               .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<Car>()
               .HasOne(p => p.Model)
               .WithMany(x => x.Cars)
               .OnDelete(DeleteBehavior.NoAction);

        }

    }
}
