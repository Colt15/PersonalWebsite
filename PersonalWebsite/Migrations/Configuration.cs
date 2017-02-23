namespace PersonalWebsite.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<PersonalWebsite.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(PersonalWebsite.Models.ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.
            var roleManager = new RoleManager<IdentityRole>(
                new RoleStore<IdentityRole>(context));
            if (!context.Roles.Any(r => r.Name == "Admin"))
            {
                roleManager.Create(new IdentityRole { Name = "Admin" });
            }

            var userManager = new UserManager<ApplicationUser>(
                new UserStore<ApplicationUser>(context));

            if (!context.Users.Any(u => u.Email == "tyler.r@outlook.com"))
            {
                userManager.Create(new ApplicationUser
                {
                    UserName = "tyler.r@outlook.com",
                    Email = "tyler.r@outlook.com",
                    FirstName = "Tyler",
                    LastName = "Rowe",
                    DisplayName = "tylerrowe"
                }, "learntocode");
            }

            var userId = userManager.FindByEmail("tyler.r@outlook.com").Id;
            userManager.AddToRole(userId, "Admin");
            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
        }
    }
}
