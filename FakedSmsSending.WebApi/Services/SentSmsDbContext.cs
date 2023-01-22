using Faked_sms_sending.Models;
using Microsoft.EntityFrameworkCore;

namespace Faked_sms_sending.Services;

public class SentSmsesDbContext : DbContext
{
    public SentSmsesDbContext(DbContextOptions<SentSmsesDbContext> options)
        : base(options) =>
        Database.EnsureCreated();

    public DbSet<SentSms> SentSmses { get; set; } = null!;
}
