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
        }
        public void CreateDataBase()
        {
            Database.EnsureCreated();
        }

        public DbSet<Car> Cars { get; set; }
        public DbSet<Mark> Marks { get; set; }
        public DbSet<Model> Models { get; set; }
        public DbSet<Price> Prices { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Mark>()
                .HasIndex(u => u.Name)
                .IsUnique();
            modelBuilder.Entity<Model>()
               .HasIndex(u => u.Name)
               .IsUnique();
            modelBuilder.Entity<Car>()
               .HasIndex(u => u.Name)
               .IsUnique();
            
            modelBuilder.Entity<Mark>()
                .HasMany(p => p.Models)
                .WithOne(x => x.Mark)
                .OnDelete(DeleteBehavior.ClientCascade);

            modelBuilder.Entity<Mark>()
                .HasMany(p => p.Cars)
                .WithOne(x => x.Mark)
                .OnDelete(DeleteBehavior.ClientCascade);


            modelBuilder.Entity<Model>()
                 .HasMany(p => p.Cars)
                 .WithOne(x => x.Model)
                 .OnDelete(DeleteBehavior.ClientCascade);

            modelBuilder.Entity<Car>()
                .HasMany(p => p.Price)
                .WithOne(x => x.Car)
                .OnDelete(DeleteBehavior.ClientCascade);

        }

    }
}
