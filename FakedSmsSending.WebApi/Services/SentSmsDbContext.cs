using FakedSmsSending.Models;
using Microsoft.EntityFrameworkCore;

namespace FakedSmsSending.Services;

public class SentSmsesDbContext : DbContext
{
    public SentSmsesDbContext(DbContextOptions<SentSmsesDbContext> options)
        : base(options) =>
        Database.EnsureCreated();

    public DbSet<SentSms> SentSmses { get; set; } = null!;
}
